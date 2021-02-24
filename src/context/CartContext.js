import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children, defaultValue }) => {
    const [cartItems, setCartItems] = useState(defaultValue);

    const isInCart = (id) => {
        return cartItems.filter(item => item.item.id == id);
    }

    function agregar (agregaProd) {
        
            let listadoProductos = [agregaProd, ...cartItems];
            setCartItems(listadoProductos);
        
    }
    const removeItem = id => {  
        setCartItems(cartItems.filter(prod => prod.item.id !== id));
    };
    
    const clear = () => setCartItems([]);

    return <CartContext.Provider value={{cartItems, agregar, removeItem, clear}}>
                {children}
            </CartContext.Provider>;
};