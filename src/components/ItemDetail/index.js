import {Container, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import ItemCounter from '../ItemCounter';

const ItemDetail = ({producto})=>{
    const [addCarro, setAddCarro] = useState(false);

    const onAdd = (items)=>{
        alert(`Agregó ${items} productos al carrito`);
        setAddCarro(items);
    };   
    

    return(
        <Container>
            <Row key={producto.id}>
                <Col md="auto"><img src={producto.urlImagen}/></Col>
                <Col>
                    <h3>{producto.titulo}</h3>
                    <h5>Categoría: {producto.categoria}</h5>
                    <h4 className='precio'>{producto.precio}</h4>
                    <p>{producto.descripcion}</p>
                    <p><b>Stock: {producto.stock}</b></p>
                    {addCarro?<Link to="/Cart"><Button variant="info" className="px-3" size="sm">
            Finalizar compra  <FontAwesomeIcon className="fa-1x" icon={faShoppingBasket} /></Button></Link>:<ItemCounter stock={producto.stock} onAdd={onAdd}/>}
                </Col>
            </Row>
        </Container>
       
    )}

export default ItemDetail;