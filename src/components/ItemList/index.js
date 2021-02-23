import {CardDeck} from 'react-bootstrap';
import Item from '../Item';


const ItemList = ({productos})=>{
    return(
        <>
        <CardDeck className="justify-content-center mx-2 mt-5 ">

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