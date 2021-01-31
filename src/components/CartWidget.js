import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CartWidget=()=>{
    return(
        <>
        <FontAwesomeIcon className="fa-2x" icon={faShoppingBasket} />
        <i class="fas fa-shopping-basket"></i>
        </>
    )
}

export default CartWidget;