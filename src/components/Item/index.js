import "./style.css"
import {Card, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import  {Link} from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import ItemCounter from '../ItemCounter';
  
  
const Item = ({producto})=>{
    const [show, setShow] = useState(false);
    const {agregar} = useCartContext();
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addCarro, setAddCarro] = useState(false);
    const onAdd = (items)=>{
        alert(`Agregó ${items} productos al carrito`);
        setAddCarro(items);
        agregar({producto: producto, items: items})
    };     

    return(
      <>
        <Modal size="lg" show={show} producto={producto} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Vista rápida</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ItemDetail producto={producto} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            
          </Modal.Footer>
        </Modal>
        <div>
          <Card className="cardproducto my-2 pt-2 d-flex flex-column" key={producto.id}>
            <Card.Img variant="top" src={producto.urlImagen} />
            
            <Card.Body >
            <Button onClick={handleShow} variant="outline-info" className='p-1 px-2 mb-2'>
            <FontAwesomeIcon className="fa-1x" icon={faEye} /> Vista rápida
            </Button>
            <Card.Title><Link to={`/producto/${producto.id}`}>{producto.titulo}</Link></Card.Title>
            
                    <h5>Categoría: {producto.categoria}</h5>
                    <h4 className='precio'>{producto.precio}</h4> 
                    <b>Stock: {producto.categoria}</b>
            
            </Card.Body>
            <Card.Footer>
            {addCarro?<Link to="/Cart"><Button variant="info" className="px-3" size="sm">
            Finalizar compra  <FontAwesomeIcon className="fa-1x" icon={faShoppingBasket} /></Button></Link>:<ItemCounter stock={producto.stock} onAdd={onAdd}/>}
            </Card.Footer>
        </Card>
      </div>
    </>         
    )}

export default Item;