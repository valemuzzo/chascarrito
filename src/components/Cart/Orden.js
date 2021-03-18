import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirestoreContext } from "../../context/FirestoreContext";
import {OrdenItem} from "../Cart/OrdenItem"
import {Table} from 'react-bootstrap';




function Orden () {
        const {ordenesCollection}= useFirestoreContext();
        const { orderId } = useParams();
        const [orderUser, setOrderUser]=useState({});
 
        useEffect( ()=>{

                const docRef = ordenesCollection.doc(orderId);

                docRef.get().then(async(doc) => {
                if (doc.exists) {
                        const dataOrden = await doc.data();
                        const resultado = await { ...dataOrden, id: orderId };
                        setOrderUser(resultado);
                        console.log("Document data:", doc.data());
                        //setOrderUser(doc.data());
                        console.log(orderUser);
                        
                } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                }
                }).catch((error) => {
                console.log("Error getting document:", error);
                });
                
        },[])
        
    
 return <>
        <div className="orden">
        <h3 className="subtit text-center">Su órden fue generada con éxito!
        <p>Hemos enviado una copia del detalle a: <h5>{orderUser.buyer.email}</h5></p>
        <p><b>El ID de referencia es:</b></p></h3>
        <h2 className="orderId mb-5">{orderId}</h2>
        <h5><b>Detalle de orden:</b></h5>
        <p><b>ID de Orden:</b> {orderId}</p>     
        <p><b>A nombre de: </b>{orderUser.buyer.nombre}</p>
        <p><b>Email: </b>{orderUser.buyer.email}</p>
        <p><b>Teléfono:</b> {orderUser.buyer.telefono}</p>
        <Table striped bordered hover size="sm" className="mt-4">
                <thead>
                <tr>
                <th style={{textAlign:'center'}}>Producto</th>
                <th style={{textAlign:'center'}}>Cantidad</th>
                <th style={{textAlign:'center'}}>Precio Unitario</th>
                <th style={{textAlign:'center'}}>Sub-total</th>
                </tr>
                </thead>
                <tbody>
                {orderUser.compra.map(cadaItem => {
                            return (
                                <OrdenItem key={cadaItem.producto.id} producto={cadaItem.producto} items={cadaItem.items} />
                            );
                        })}
                </tbody>
        </Table>
        <div className="precio-total">Precio Total: $ {orderUser.total}</div>
        
                </div>
        </>
}

export default Orden;
