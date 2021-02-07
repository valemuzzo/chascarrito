import "./style.css"
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Item = ({producto})=>{
    return(
        <Card style={{ padding:'10px' }} className='cardproducto mb-2' key={producto.id}>
            <Card.Img variant="top" src={producto.urlImagen} />
            <Card.Body>
            <Card.Title>{producto.titulo}</Card.Title>
            
                    <h5>Categoría: {producto.categoria}</h5>
                    <h4 className='precio'>{producto.precio}</h4> 
            
            </Card.Body>
            <Card.Footer>
                    <Button variant="outline-info" className='p-1 px-2'>
            <FontAwesomeIcon className="fa-1x" icon={faEye} /> Ver detalle
            </Button>
            </Card.Footer>
            
            
        </Card>            
    )}

export default Item;