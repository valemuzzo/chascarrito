import '../../css/style.css';
import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { CarroVacio } from "./CarroVacio";

function Cart (){
    const {cartItems}= useCartContext();


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

    return(
    <>
        <div className="mincontenedor">
            <h3 className="categoria">Carrito de Compras</h3>
            {cartItems.length === 0 && <CarroVacio />}
            {cartItems.length !== 0 && (
                <div>
                    <h3>Tu carrito:</h3>
                    {itemsCarrito()}
                    
                        <p>Precio Total: $ </p>
                        
                    
                </div>
            )}
        </div>
    </>)
}

export default Cart;