import { useEffect, useState } from 'react';
import ItemCounter from '../components/ItemCounter/';
import db_productos from '../mocks/db_productos.js';
import ItemList from '../components/ItemList';

const ItemListContainer=({text})=>{

const [productos, setProductos] = useState([]);

useEffect(()=>{
    const getItems = new Promise((resolve, reject)=>{
        setTimeout(() => resolve (db_productos), 2000);
    });
    getItems.then((resultado)=>setProductos(resultado));
},[]);
    
    
    //agregar productos
    const onAdd = (items)=>{
        
            alert(`Agregó ${items} productos al carrito`);
        
    };

    return(
        <>
        <div className="textoloco text-center mt-5"><h2>{text}</h2></div>
        <div className="text-center mt-5"><ItemCounter stock={10} onAdd={onAdd}/></div>
        
        <ItemList productos={productos}/>
        </>
    )
}
export default ItemListContainer;