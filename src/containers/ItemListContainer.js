import {CardDeck} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db_productos from '../mocks/db_productos.js';
import ItemList from '../components/ItemList';
import Item from '../components/Item';
import Loader from '../img/loader.gif';
import Banner from '../img/banner-cotillon.jpg';


const ItemListContainer=({text})=>{
const {categoria} = useParams();
const [productos, setProductos] = useState([]);
const [productosCategoria, setProductosCategoria] = useState([]);
const [isLoading, setIsLoading]= useState(false);

useEffect(()=>{
    setIsLoading(true);
    const getItems = new Promise((resolve, reject)=>{
        setTimeout(() => resolve (db_productos), 2000);
    });
    getItems.then((resultado)=>setProductos(resultado));
    setIsLoading(false);
},[]);


useEffect(() => {
    setIsLoading(true);
    const getItems = new Promise((resolve, reject) => {
              setTimeout(() => resolve(db_productos), 2000);
            });
    getItems.then(function (resultado){
        let catProd= resultado.filter(prod=>{return prod.categoria==categoria})//busco dentro del resultado (mi DB), un solo producto que tenga un id igual que el id que me guarda useParams (ese id viene de la ruta desde la card)
        setProductosCategoria(catProd);
        setIsLoading(false);
    });
}, [categoria]);

//Loading...
if (isLoading){
return(
    <div className="d-flex flex-column align-items-center mx-0"><img style={{width:'12em'}} src={Loader}/>cargando...</div>
)
};//

const mostrarCategoria = () => {
    
    if (productosCategoria.length > 0)
    return productosCategoria.map(producto => (
        
        <Item  producto={producto} />
    ));
                
 return ( 
            <div>
                <h3 className="ml-4">No hay productos en esta categoría</h3>
            </div>
        );
    
};
 

    return(
        <>
        {categoria ? 
        <><h3 className="categoria">{categoria}</h3>
            
            <CardDeck className="mx-2 mt-5">
                {mostrarCategoria()}
            </CardDeck>
        </>
        :
        <>
            <div className="d-flex flex-column text-align-center textoloco align-items-center mt-5">
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