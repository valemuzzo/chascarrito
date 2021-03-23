import './cart.css';
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useFirestoreContext } from "../../context/FirestoreContext";
import { CartItem } from "./CartItem";
import { CarroVacio } from "./CarroVacio";
import {Table, Button, Form, Row, Col, Collapse} from 'react-bootstrap';


function Cart (){
    const {cartItems, clear}= useCartContext();
    const {ordenesCollection, dataTime, itemCollProductos}= useFirestoreContext();
    const [total, setTotal] = useState();
    const [open, setOpen] = useState(false);
    const [cliente, setCliente]= useState('');
    const [orderId, setOrderId] = useState();
    const { register, handleSubmit, errors } = useForm();
    const [emailCtrl, setEmailCtrl] = useState(false);    
  
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
            
            ordenesCollection.add(nuevaOrden).then(docRef => {
                console.log("Orden ID: ", docRef.id);
                setOrderId(docRef.id);  
                
                    
                })
                .catch(err=>{
                    console.log("no se guardó");
                })
        
                clear();

        //actualizar stock
        let itemCartId = cartItems.map(aux => aux.producto.id);
        
        itemCartId.map(cadaId => {
            itemCollProductos.doc(cadaId).get().then(aux =>{
                let filtroId = cartItems.find(aux => aux.producto.id == cadaId);
                if (aux.data().stock > 0) return aux.ref.update({stock: aux.data().stock - filtroId.items})
            })
        })
    }
    
    const onSubmit = data => {
        if (data.email === data.confirmail) {
            finalizarCompra(data);
            
        } else {
            setEmailCtrl(true);
        }
    };

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
{/*Items en el carrito*/}
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
       
        <Collapse in={open} className="mx-5 mb-4" id="formUsuario">
        <div className="mx-5 px-5">
            <h3>A continuación complete su datos para generar la órden</h3>
            <Form onSubmit={handleSubmit(onSubmit)}> 
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name="nombre" placeholder="Ingrese su nombre" ref={register({ required: true })} onChange={handleChange}/>
                    {errors.nombre && <div className="err">Debe completar este campo</div>}
                </Form.Group>
                <Row>
                <Col>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" placeholder="Ingrese su email" ref={register({
                            required: true,
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
                        })} onChange={handleChange}/>
                    {errors.email?.type === "required" && (
                        <div className="err">Ingrese una direccion de email válida</div>
                    )}
                    {errors.email?.type === "pattern" && <div className="err">Formato no válido</div>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirme su email</Form.Label>
                    <Form.Control name="confirmail" placeholder="Ingrese su email" autoComplete="nope" ref={register({
                            required: true,
                            
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
                        })} onChange={handleChange}/>
                    {errors.confirmail?.type === "pattern" && <div className="error">Formato no válido</div>}
                    {emailCtrl && <div className="error">Los emails no coinciden</div>}
                </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control name="telefono" placeholder="Ingrese un numero de contacto" ref={register({ required: true })} onChange={handleChange}/>
                    {errors.telefono && <div className="err">Debe completar este campo</div>}
                </Form.Group>
                </Col>
                </Row>
                <div className="m-5 d-flex justify-content-center p-1"> 
                
                <Button  type="submit" variant="info">
                    Confirmar Pedido</Button>
                </div>
            </Form>
            {orderId && <Redirect to={`/orden/${orderId}`} />}
        </div>
      </Collapse>
     
    </>
    )
}

export default Cart;