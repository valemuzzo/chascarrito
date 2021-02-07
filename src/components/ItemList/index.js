import Item from '../Item'
import {CardDeck} from 'react-bootstrap';
const ItemList = ({productos})=>{
    return(
        <>
        <CardDeck className="mx-2 mt-5">

        {productos.map((producto)=>{
            return(
                    <Item key={producto.id} producto={producto}/>
            )
        })}
        </CardDeck>
        </>
    )

}

export default ItemList;