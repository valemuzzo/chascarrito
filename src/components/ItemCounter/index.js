import {ButtonGroup, Button} from 'react-bootstrap';
import "./style.css"
const ItemCounter = ({stock, items, onAdd, onSubstract})=>{
    
    return(
        
        <ButtonGroup  className="ButtonGroup" size="sm">
            <Button variant="outline-info" className="px-3" onClick={onSubstract} ><b>-</b></Button>
            <input className="items" value={items} disabled></input>
            <Button variant="outline-info" className="px-3" onClick={()=> {onAdd (stock)}}><b>+</b></Button>
        </ButtonGroup>
       
    )
}

export default ItemCounter;