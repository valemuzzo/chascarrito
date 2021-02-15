import "./style.css";
import {ButtonGroup, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const ItemCounter = ({stock, onAdd})=>{
    
    //logica del contador de productos
    const [items, setItems]= useState(1);

    const sumaUno = (stock)=>{
        if (items < stock){
        setItems (items + 1);
        }else{
            alert("Superó el límite del Stock");
        }
    };

    const restaUno =()=>{
        if (items > 1){
        setItems(items-1);
        }
    }
    //fin logica contador

    return(
        <>
        <ButtonGroup  className="ButtonGroup" size="sm">
            <Button variant="outline-info" className="px-3" onClick={restaUno} ><b>-</b></Button>
            <input className="items" value={items} disabled></input>
            <Button variant="outline-info" className="px-3" onClick={()=> {sumaUno (stock)}}><b>+</b></Button>
            <br></br>
            <Button variant="info" className="px-3" onClick={()=> {onAdd (items)}}>
            Agregar   <FontAwesomeIcon className="fa-1x" icon={faShoppingBasket} /></Button>
        </ButtonGroup>
        
       </>
    )
}

export default ItemCounter;