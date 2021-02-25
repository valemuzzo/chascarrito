import './cart.css';
import { useCartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const CartItem = ({ producto, items }) => {
    const {removeItem} = useCartContext();
    return (
        
            
                        <tr key={producto.id} >
                            <td style={{textAlign:'center'}} className="borde"><img style={{maxWidth:'50px'}} src={producto.urlImagen}/></td>
                            <td  className="borde">{producto.titulo}</td>
                            <td style={{textAlign:'center'}} className="borde">{items}</td>
                            <td style={{textAlign:'center'}} className="borde">${producto.precio}</td>
                            <td style={{textAlign:'center'}} className="borde"><b>${producto.precio * items}</b></td>
                            <th style={{textAlign:'center'}} className="borde">{removeItem && (<span style={{cursor:'pointer'}} onClick={() => removeItem(producto.id)}><FontAwesomeIcon className="fa-1x" icon={faTrashAlt} /></span>)}</th>
                        </tr>
                    
    );
};