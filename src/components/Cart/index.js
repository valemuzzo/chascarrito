import './cart.css';
import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { CarroVacio } from "./CarroVacio";
import {Table, Button} from 'react-bootstrap';


function Cart (){
    const {cartItems, clear}= useCartContext();
    const [total, setTotal] = useState();

    const itemsCarrito = () =>
      cartItems.map(compra => {
            return (
                <CartItem
                key={compra.producto.id}
                producto={compra.producto}
                items={compra.items}
                />      
            );
        });

        useEffect(() => {
            let montoTotal = 0;
            cartItems.forEach(element => {
                montoTotal += element.items * element.producto.precio;
            });
            setTotal(montoTotal);
        }, [cartItems]);

    return(
    <>
        <div className="mincontenedor">
            <h3 className="categoria">Carrito de Compras</h3>
            {cartItems.length === 0 && <CarroVacio />}
            {cartItems.length !== 0 && (
                <div className="align-items-center mx-5">
                    <h3>Tu carrito:</h3>
                    <Table hover size="sm">
                    <tbody>
                        <tr className="color-row">
                        <th className="borde"></th>
                        <th className="borde">Producto</th>
                        <th style={{textAlign:'center'}} className="borde">Cantidad</th>
                        <th style={{textAlign:'center'}} className="borde">P. Unitario</th>
                        <th style={{textAlign:'center'}} className="borde">SubTotal</th>
                        <th style={{textAlign:'center'}} className="borde"></th>
                        </tr>
                        {itemsCarrito()}
                    </tbody>
                 </Table>
                 <div className="precio-total">Precio Total: $ {total}</div>
                 <div className="m-5 d-flex justify-content-center p-1"> <Button  variant="info" onClick={clear}>vaciar carrito</Button></div>
                 </div>
            )}
        </div>
    </>)
}

export default Cart;