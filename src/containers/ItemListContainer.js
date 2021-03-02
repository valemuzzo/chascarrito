import { useFirestoreContext } from '../context/FirestoreContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {CardDeck} from 'react-bootstrap';
import db_productos from '../mocks/db_productos.js';
import ItemList from '../components/ItemList';
import Item from '../components/Item';
import Loader from '../img/loader.gif';
import Banner from '../img/banner-cotillon.jpg';


const ItemListContainer=({text})=>{
    const {categoria} = useParams();
    const { getProductos, itemCollProductos, itemCollCategorias } = useFirestoreContext();
    const [productos, setProductos] = useState([]);
    const [productosCategoria, setProductosCategoria] = useState([]);
    const [tituloCat, setTituloCat] = useState();
    const [isLoading, setIsLoading]= useState(false);
    
   
    useEffect(() => {
        setIsLoading(true);
        itemCollProductos.get().then((valorConsulta) => {
            let aux = valorConsulta.docs.map( async (product) => {
                // llamar otra vez a la bd tomando la categoriaID del elemento
                let categoriaNombre = await itemCollCategorias.doc(product.data().categoria).get()          
                return {id: product.id, ...product.data(), categoria: categoriaNombre.data().name}
            })
            setProductos(aux);
        })
    }, [])

    //useEffect(() => {
    //    setIsLoading(true);
    //    getProductos.then((valorConsulta) => {
    //        if (valorConsulta.length === 0) {
    //            console.log('No hay productos');
    //        }
    //        setProductos(valorConsulta.docs.map(doc=> ({id: doc.id, ...doc.data()})));   
    //    }).catch((error) => {console.log("error al buscar productos");
    //    }).finally(()=>{
    //        setIsLoading(false);
    //    });
    //  
    //}, []);


//useEffect(()=>{
//    setIsLoading(true);
//    const getItems = new Promise((resolve, reject)=>{
//        setTimeout(() => resolve (db_productos), 2000);
//    });
//    getItems.then((resultado)=>setProductos(resultado));
//    setIsLoading(false);
//},[]);

                

useEffect(() => {
    setIsLoading(true);
    const categorias = categoria ? itemCollProductos.where('categoria', '==', categoria) : itemCollProductos;
    //setTituloCat(categorianombre);
    categorias.get().then((valorConsulta) => {
        if (valorConsulta.length === 0) {
        }
        setProductosCategoria(valorConsulta.docs.map(doc => ({ id: doc.id, ...doc.data(), })));
    })
    .catch(error => console.log("error buscando", error))
    .finally(() => setIsLoading(false));
}, [categoria]);

//useEffect(() => {
//    setIsLoading(true);
//    const getItems = new Promise((resolve, reject) => {
//              setTimeout(() => resolve(db_productos), 2000);
//            });
//    getItems.then(function (resultado){
//        let catProd= resultado.filter(prod=>{return prod.categoria==categoria})//busco dentro del resultado (mi DB), un solo producto que tenga un id igual que el id que me guarda useParams (ese id viene de la ruta desde la card)
//        setProductosCategoria(catProd);
//        setIsLoading(false);
//    });
//}, [categoria]);

//Loading...
if (isLoading){
return(
    <div className="contenedor d-flex flex-column align-items-center mx-0"><img style={{width:'12em'}} src={Loader}/>cargando...</div>
)
};//

const mostrarCategoria = () => {
    
    if (productosCategoria.length > 0)
    return productosCategoria.map(producto => (
        
        <Item  producto={producto} />
    ));
                
 return ( 
            <div className="mincontenedor">
                <h3 className="ml-4">No hay productos en esta categoría</h3>
            </div>
        );
    
};
 

    return(
        <>
        {categoria ? 
        <><h3 className="categoria">{tituloCat}</h3>
            
            <CardDeck className="justify-content-center mx-2 mt-5">
                {mostrarCategoria()}
            </CardDeck>
        </>
        :
        <>
            <div className="textoloco align-items-center mt-5 mx-2">
            <h2>{text}</h2>
            <img style={{width:'96%'}} src={Banner}/>
            
            </div>
            <ItemList productos={productos}/>
        </>
        }
        </>
    )
}
export default ItemListContainer;