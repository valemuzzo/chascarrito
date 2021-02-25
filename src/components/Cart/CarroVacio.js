import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const CarroVacio = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h4>
                Aún no agregaste ningún producto al carrito.
            </h4>
            <Link to="/">
                <Button variant="info" className="mt-5">Descubre más productos</Button>
            </Link>
        </div>
    );
};