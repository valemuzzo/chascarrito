import { useCartContext } from "../../context/CartContext";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CartWidget=()=>{
    
    const { cartItems } = useCartContext();
    const [items, setItems] = useState(0);

    useEffect(() => {
        let cantidad = 0;
        cartItems.forEach(element => {
            cantidad += element.items;
        });
        setItems(cantidad);
    }, [cartItems]);



    return(<>
        
        <FontAwesomeIcon className="fa-2x" icon={faShoppingBasket} />
        {cartItems.length !== 0 && <span className="itemscart">{items}</span>}
          </>      
    )
}
//{ cartItems.length > 0 && }
export default CartWidget;