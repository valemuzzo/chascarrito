function Orden ({orderId, cliente}) {
    
 return <>
        <div>
        <h5>Su órden fue generada con éxito!</h5>
        <h5>El ID de referencia es:</h5>
        <h2>{orderId}</h2>
        <h5>Hemos enviado una copia de su pedido a: {cliente.email}</h5>
        </div>
        </>
}

export default Orden;
