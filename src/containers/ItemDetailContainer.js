import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import db_productos from '../mocks/db_productos.js';

const ItemDetailContainer = () => {
    const {id}=useParams();
      const [producto, setProducto] = useState([]);
    
      useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
          setTimeout(() => resolve(db_productos), 2000);
        });
        getItems.then(function (resultado){
        let prodId= resultado.find(prod=>{return prod.id==id})//busco dentro del resultado (mi DB), un producto que tenga un id igual que el id que me guarda useParams (ese id viene de la ruta desde la card)
        setProducto(prodId);

    });
      }, [])
      console.log(producto);
      return (
        <>
          <ItemDetail producto={producto} />
        </>
      );
    };


export default ItemDetailContainer;