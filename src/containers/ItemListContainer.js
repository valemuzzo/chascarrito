import ItemCounter from '../components/ItemCounter/';
import { useState } from "react";

const ItemListContainer=({text})=>{

    //logica del contador de productos
    const [items, setItems]= useState(1);

    const onAdd = (stock)=>{
        if (items < stock){
        setItems (items + 1);
        }else{
            alert("Superó el límite del Stock");
        }
    };

    const onSubstract =()=>{
        if (items > 1){
        setItems(items-1);
        }
    }
    //fin logica contador

    return(
        <>
        <div className="textoloco text-center mt-5"><h2>{text}</h2></div>
        <div className="text-center mt-5"><ItemCounter stock={10} items={items} onAdd={onAdd} onSubstract={onSubstract}/></div>
        </>
    )
}
export default ItemListContainer;