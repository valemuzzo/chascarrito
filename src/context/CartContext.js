import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [addCarro, setAddCarro] = useState([]);

    return <CartContext.Provider value={[addCarro, setAddCarro]}>
                {children}
            </CartContext.Provider>;
};