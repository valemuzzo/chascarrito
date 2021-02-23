import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children, defaultValue }) => {
    const [cartItems, setCartItems] = useState(defaultValue);

    function agregar (agregaProd) {
        
            let listadoProductos = [agregaProd, ...cartItems];
            setCartItems(listadoProductos);
        
    }

    return <CartContext.Provider value={{cartItems, agregar}}>
                {children}
            </CartContext.Provider>;
};