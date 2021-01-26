//import cart from "../img/cart-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
//<img width="40em" src={cart}/>
const CartWidget=()=>{
    return(
        <>
        <FontAwesomeIcon className="fa-2x" icon={faShoppingBasket} />
        <i class="fas fa-shopping-basket"></i>
        </>
    )
}

export default CartWidget;