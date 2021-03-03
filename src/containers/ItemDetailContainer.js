import { useFirestoreContext } from '../context/FirestoreContext';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';


const ItemDetailContainer = () => {
    const {id}=useParams();
    const { getProducto } = useFirestoreContext();
      const [producto, setProducto] = useState([]);
    
    
   useEffect(() => {      
       getProducto(id).then((doc) => {
           if(!doc.exists){
               console.log("no se encontro el item");
               return;
           }
           setProducto({id: doc.id, ...doc.data()});
       }).catch((error) => {console.log("error no se encontro", error);
       })
   },[]);



      return (
        <>
          <ItemDetail producto={producto} />
        </>
      );
    };


export default ItemDetailContainer;