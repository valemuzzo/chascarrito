import { useFirestoreContext } from '../context/FirestoreContext';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import db_productos from '../mocks/db_productos.js';
import ItemDetail from '../components/ItemDetail';


const ItemDetailContainer = () => {
    const {id}=useParams();
    const { getProducto } = useFirestoreContext();
      const [producto, setProducto] = useState([]);
    
    //  useEffect(() => {
    //    const getItems = new Promise((resolve, reject) => {
    //      setTimeout(() => resolve(db_productos), 2000);
    //    });
    //    getItems.then(function (resultado){
    //    let prodId= resultado.find(prod=>{return prod.id==id})//busco dentro del resultado (mi DB), un solo producto que tenga un id igual que el id que me guarda useParams (ese id viene de la ruta desde la card)
    //    setProducto(prodId);
//
    //});
    //  }, [])
     


    useEffect(() => {      
        getProducto.then((querySnapshot) => {
            setProducto({id: querySnapshot.id, ...querySnapshot.data()});
        }).catch(error => console.log("error no se encontro"));
    });

      return (
        <>
          <ItemDetail producto={producto} />
        </>
      );
    };


export default ItemDetailContainer;