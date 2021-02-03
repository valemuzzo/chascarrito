import ItemCounter from '../components/ItemCounter/';


const ItemListContainer=({text})=>{

    //agregar productos
    
    const onAdd = (items)=>{
        
            alert(`Agregó ${items} productos al carrito`);
        
    };

    return(
        <>
        <div className="textoloco text-center mt-5"><h2>{text}</h2></div>
        <div className="text-center mt-5"><ItemCounter stock={10} onAdd={onAdd}/></div>
        </>
    )
}
export default ItemListContainer;