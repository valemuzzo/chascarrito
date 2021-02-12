import "./style.css"
import { useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import ItemDetail from '../ItemDetail';
import  {Link} from 'react-router-dom';
  
  
const Item = ({producto})=>{
    const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            
            <Card.Title><Link to={`/producto/${producto.id}`}>{producto.titulo}</Link></Card.Title>
            
                    <h5>Categoría: {producto.categoria}</h5>
                    <h4 className='precio'>{producto.precio}</h4> 
            
            </Card.Body>
            <Card.Footer>
            <Button onClick={handleShow} variant="outline-info" className='p-1 px-2 mb-2'>
            <FontAwesomeIcon className="fa-1x" icon={faEye} /> Vista rápida
            </Button>  
            </Card.Footer>
        </Card>
      </div>
    </>         
    )}

export default Item;