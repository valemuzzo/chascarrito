import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db_productos from '../mocks/db_productos.js';
import ItemList from '../components/ItemList';


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
    
    
 

    return(
        <>
        {categoria ? 
        <><h2>{categoria}</h2>
            <div className="textoloco text-center mt-5"><h2>{text}</h2></div>
            <ItemList productos={productos}/></>:
        <>
            <ItemList productos={productos}/>
        </>
        }
        </>
    )
}
export default ItemListContainer;