import '../../css/style.css';
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { CarroVacio } from "./CarroVacio";

function Cart (){
    const [addCarro, setAddCarro] = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let montoTotal = 0;
        addCarro.forEach(element => {
            montoTotal += element.items * element.producto.precio;
        });
        setTotal(montoTotal);
    }, [addCarro]);

    const borrarItem = id => {
        alert("Producto eliminado");
        setAddCarro(addCarro.filter(compra => compra.producto.id !== id));
    };

    const itemsCarrito = () =>
        addCarro.map(compra => {
            return (
                <CartItem
                    key={compra.producto.id}
                    item={compra.producto}
                    items={compra.items}
                    borrarItem={borrarItem}
                />
            );
        });

    return(
    <>
        <div className="mincontenedor">
            <h3 className="categoria">Carrito de Compras</h3>
            {addCarro.length === 0 && <CarroVacio />}
            {addCarro.length !== 0 && (
                <div>
                    <h3>Tu carrito:</h3>
                    {itemsCarrito()}
                    
                        <p>Precio Total: $ {total}</p>
                        
                    
                </div>
            )}
        </div>
    </>)
}

export default Cart;

