import {Container, Row, Col,} from 'react-bootstrap';
import ItemCounter from '../ItemCounter';
const ItemDetail = ({producto})=>{
    const onAdd = (items)=>{
        
        alert(`Agregó ${items} productos al carrito`);
    
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
                    <ItemCounter stock={10} onAdd={onAdd}/>
                </Col>
            </Row>
        </Container>
       
    )}

export default ItemDetail;