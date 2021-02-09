import "./style.css"
import { useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import ItemDetailContainer from '../../containers/ItemDetailContainer';
  
  
const Item = ({producto})=>{
    const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
        <Modal size="lg" show={show} producto={producto} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Producto: {producto.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ItemDetailContainer producto={producto}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            
          </Modal.Footer>
        </Modal>
        <Card style={{ padding:'10px' }} className='cardproducto mb-2' key={producto.id}>
            <Card.Img variant="top" src={producto.urlImagen} />
            <Card.Body>
            <Card.Title>{producto.titulo}</Card.Title>
            
                    <h5>Categoría: {producto.categoria}</h5>
                    <h4 className='precio'>{producto.precio}</h4> 
            
            </Card.Body>
            <Card.Footer>
                    <Button onClick={handleShow} variant="outline-info" className='p-1 px-2'>
            <FontAwesomeIcon className="fa-1x" icon={faEye} /> Ver detalle
            </Button>
            </Card.Footer>
        </Card>   </>         
    )}

export default Item;