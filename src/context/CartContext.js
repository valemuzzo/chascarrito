import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children, defaultValue }) => {
    const [cartItems, setCartItems] = useState(defaultValue);

    
    function agregar (agregaProd) {
    //busco que la id del producto a agregar esté en el estado del carrito
    const isInCart = cartItems.find(item => item.producto.id === agregaProd.producto.id);
        //si está en el carrito le sumo los items adicionales, actualizo la cantidad
        if (isInCart) {
            let sumaProd = isInCart.items + agregaProd.items;
            let i = cartItems.indexOf(isInCart);
            let actualizaItem = [...cartItems];
            actualizaItem[i].items = sumaProd;
            setCartItems(actualizaItem);
        //si no está en el carrito lo agrego
        } else {
            setCartItems([agregaProd, ...cartItems]);
        }   
}

    const removeItem = (itemId) => {
        window.confirm("desea quitar el producto de su compra?");
        setCartItems(cartItems.filter(item => item.producto.id !== itemId))
    }

    const clear = () => setCartItems([]);


    return <CartContext.Provider value={{cartItems, agregar, removeItem, clear}}>
                {children}
            </CartContext.Provider>;
};