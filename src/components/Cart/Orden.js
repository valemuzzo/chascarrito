function Orden ({orderId}) {

    
    
    return <div>
        
        <p>Agradecemos su compra, el ID de referencia para retiro es: {orderId}</p>
    </div>
}

export default Orden;

//export const Orden = ({ orderId }) => {
//    return(
//    <>
//    <div className="align-items-center mx-5">
//    <h2>Su pedido se generó correctamente</h2>
//    <h3>Su número de orden es:</h3>
//    <h1>{orderId}</h1>
//    </div>
//    <div>{orderId.data}</div>
//    <div>{orderId.buyer}</div>
//    <div>{orderId.compra}</div>
//    
//    <div>{orderId.total}</div>
//                 </>)
//}