import { useFirestoreContext } from '../context/FirestoreContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {CardDeck} from 'react-bootstrap';
import ItemList from '../components/ItemList';
import Item from '../components/Item';
import Loader from '../img/loader.gif';
import Slider from "../components/Slider";

const ItemListContainer=({text})=>{
    
    const {categoria} = useParams();
    const { itemCollProductos, itemCollCategorias } = useFirestoreContext();
    const [productos, setProductos] = useState([]);
    const [productosCategoria, setProductosCategoria] = useState([]);
    const [tituloCat, setTituloCat] = useState();
    const [isLoading, setIsLoading]= useState(false);
    
    localStorage.removeItem( "miOrden" );

    useEffect(() => {

        if (categoria) {
            setIsLoading(true);
            const categorias = categoria ? itemCollProductos.where('categoria', '==', categoria) : itemCollProductos;
            
            categorias.get().then(async (value) => {
                //  Usando Promise.all() para esperar que todos los metodos asincronicos se terminen de ejecutar!!
                let aux = await Promise.all(value.docs.map( async (product) => {
    
                    // Tomamos el documento la id de la categoria
                    let auxCategorias = await itemCollCategorias.doc(product.data().categoria).get()
                    setTituloCat(auxCategorias.data().nombre); //Titulo de la categoria (en pagina)
                    return { id: product.id,...product.data(), categoria:auxCategorias.data().nombre }
                    
                }))
                
                console.log(aux)
                setProductosCategoria(aux);
                
            }).catch(error => console.log("error buscando", error))
            .finally(() => setIsLoading(false));
        } else {
        itemCollProductos.get().then(async (value) => {
            //  Usando Promise.all() para esperar que todos los metodos asincronicos se terminen de ejecutar!!
            let aux = await Promise.all(value.docs.map( async (product) => {

                // Tomamos el documento la id de la categoria
                let auxCategorias = await itemCollCategorias.doc(product.data().categoria).get()
                return {  id: product.id,...product.data(), categoria:auxCategorias.data().nombre }
            }))
            console.log(aux)
            setProductos(aux);
        }).catch(error => console.log("error buscando", error))
        .finally(() => setIsLoading(false));
    }
    }, [categoria])


const mostrarCategoria = () => {
    
    if (productosCategoria.length > 0)
    return productosCategoria.map(producto => (
        
        <Item  producto={producto} />
    ));
    
    //Loading...
if (isLoading){
    return(
        <div className="contenedor d-flex flex-column align-items-center mx-0"><img style={{width:'12em'}} src={Loader}/>cargando...</div>
    )
    };//
    
 return ( 
            <div className="mincontenedor">
                <h3 className="ml-4">No hay productos en esta categoría</h3>
            </div>
        );
    
};
 

    return(
        <>
        {categoria ? 
        <><h3 className="categoria mt-3">{tituloCat}</h3>
            
            <CardDeck className="justify-content-center mx-2 mt-5">
                {mostrarCategoria()}
            </CardDeck>
        </>
        :
        <><Slider productos={productos}/>
            <div className="textoloco align-items-center mt-5 mx-2">
                
            <h1>{text}</h1></div>
            
           {/* <img style={{width:'96%'}} src="https://muzzo.com.ar/img/banner-chascarrito.jpg"/>*/}
            
            
            <ItemList productos={productos}/>
        </>
        }
        </>
    )
}
export default ItemListContainer;