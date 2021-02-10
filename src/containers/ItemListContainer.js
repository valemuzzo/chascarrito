import { useEffect, useState } from 'react';
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
    
    
 

    return(
        <>
        <div className="textoloco text-center mt-5"><h2>{text}</h2></div>
        
        
        <ItemList productos={productos}/>
        </>
    )
}
export default ItemListContainer;