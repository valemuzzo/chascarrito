import Modal from 'react-bootstrap/Modal';
import ItemDetailContainer from '../../containers/ItemDetailContainer';
import {Button} from 'react-bootstrap';
import { useState } from 'react';

const ModalProducto=(producto)=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
    return(
        <Modal size="lg" >
          <Modal.Header closeButton>
            <Modal.Title>Vista rápida</Modal.Title>
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
    )
}
export default ModalProducto;