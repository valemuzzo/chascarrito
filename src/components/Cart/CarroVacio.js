import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const CarroVacio = () => {
    return (
        <div>
            <h4>
                Aún no agregaste ningún producto al carrito.
            </h4>
            <Link to="/">
                <Button variant="info">Descubre más productos</Button>
            </Link>
        </div>
    );
};