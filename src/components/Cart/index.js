import './cart.css';
import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useFirestoreContext } from "../../context/FirestoreContext";
import { CartItem } from "./CartItem";
import { CarroVacio } from "./CarroVacio";
import  {Link} from 'react-router-dom';
import {Table, Button, Form, Row, Col, Collapse} from 'react-bootstrap';


function Cart (){
    const {cartItems, clear}= useCartContext();
    const {ordenesCollection, dataTime}= useFirestoreContext();
    const [total, setTotal] = useState();
    const [open, setOpen] = useState(false);
    const [cliente, setCliente]= useState('');
    const [orderId, setOrderId] = useState();

    const handleChange=(event)=>{
        setCliente({...cliente, [event.target.name]:event.target.value})
        }

    const finalizarCompra=()=>{
        console.log({cliente: cliente, items: [...cartItems], total});
        
        const nuevaOrden = {
            buyer : cliente,
            compra : cartItems,
            data : dataTime,
            total : total}
        
    
        ordenesCollection.add(nuevaOrden).then(({id}) => {
            setOrderId(id);
        }).catch(err=>{
            console.log("no se guardó");
        })
        console.log(orderId);
    }
    
    const itemsCarrito = () =>
      cartItems.map(compra => {
            return (
                <CartItem
                key={compra.producto.id}
                producto={compra.producto}
                items={compra.items}
                />      
            );
        });


    useEffect(() => {
        let montoTotal = 0;
        cartItems.forEach(element => {
            montoTotal += element.items * element.producto.precio;
        });
        setTotal(montoTotal);
    }, [cartItems]);

        

    return(
    <>
        <div className="mincontenedor">
            <h3 className="categoria">Carrito de Compras</h3>
            {cartItems.length === 0 && <CarroVacio />}
            {cartItems.length !== 0 && (
                <div className="align-items-center mx-5">
                    <div className="m-5 d-flex justify-content-between p-1"> 
                 <h3>Tu carrito:</h3><Button  variant="light" onClick={clear}>vaciar carrito</Button>
                 </div>
                    
                    <Table hover size="sm">
                    <tbody>
                        <tr className="color-row">
                        <th className="borde"></th>
                        <th className="borde">Producto</th>
                        <th style={{textAlign:'center'}} className="borde">Cantidad</th>
                        <th style={{textAlign:'center'}} className="borde">P. Unitario</th>
                        <th style={{textAlign:'center'}} className="borde">SubTotal</th>
                        <th style={{textAlign:'center'}} className="borde"></th>
                        </tr>
                        {itemsCarrito()}
                    </tbody>
                 </Table>
                 <div className="precio-total">Precio Total: $ {total}</div>
                 <div className="m-5 d-flex justify-content-center p-1"> 
                 <Button  variant="info" onClick={()=>{setOpen(!open)}}>Finalizar Compra</Button></div>
                 </div>
            )}
        </div>
        <Collapse in={open} className="mx-5 mb-4">
        <div className="mx-5 px-5">
            <h3>A continuación complete su datos para generar la órden</h3>
            <Form>
                <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name="nombre" placeholder="Ingrese su nombre" onChange={handleChange}/>
                </Form.Group>
                <Row>
                <Col>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" placeholder="Ingrese su email" onChange={handleChange} />
                    <Form.Text className="text-muted">
                    Ingrese su direccion de correo electrónico
                    </Form.Text>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="tel">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control name="telefono" placeholder="Ingrese un numero de contacto" onChange={handleChange}/>
                </Form.Group>
                </Col>
                </Row>
                <div className="m-5 d-flex justify-content-center p-1"> 
                <Link to="/Orden" orderId={orderId}><Button  variant="info" onClick={()=>{finalizarCompra()}}>Confirmar Pedido</Button></Link>
                </div>
            </Form>
        </div>
      </Collapse>
            
    </>)
}

export default Cart;