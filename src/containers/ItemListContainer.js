import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import db_productos from '../mocks/db_productos.js';
import ItemList from '../components/ItemList';
import Item from '../components/Item';
import {CardDeck} from 'react-bootstrap';


const ItemListContainer=({text})=>{
const {categoria} = useParams();
const [productos, setProductos] = useState([]);
const [productosCategoria, setProductosCategoria] = useState([]);

useEffect(()=>{
    const getItems = new Promise((resolve, reject)=>{
        setTimeout(() => resolve (db_productos), 2000);
    });
    getItems.then((resultado)=>setProductos(resultado));
},[]);


useEffect(() => {
    
    const getItems = new Promise((resolve, reject) => {
              setTimeout(() => resolve(db_productos), 2000);
            });
    getItems.then(function (resultado){
        let catProd= resultado.filter(prod=>{return prod.categoria==categoria})//busco dentro del resultado (mi DB), un solo producto que tenga un id igual que el id que me guarda useParams (ese id viene de la ruta desde la card)
        setProductosCategoria(catProd);
    });
}, [categoria]);
    
const mostrarCategoria = () => {
    
    if (productosCategoria.length === 0)
        return (
            <div>
                <h3>No hay productos en esta categoria</h3>
            </div>
        );
    return productosCategoria.map(producto => (
        
        <Item  producto={producto} />
    ));
};
 

    return(
        <>
        {categoria ? 
        <><h2>{categoria}</h2>
            <div className="textoloco text-center mt-5"><h2>{text}</h2></div>
            <CardDeck className="mx-2 mt-5">
                {mostrarCategoria()}
            </CardDeck>
        </>
        :
        <>
            <ItemList productos={productos}/>
        </>
        }
        </>
    )
}
export default ItemListContainer;