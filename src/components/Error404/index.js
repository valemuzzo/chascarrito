import "../../css/style.css";
import Error from "../../img/404error.png";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Error404(){
    return(
<>
<div className="contenedor d-flex flex-column align-items-center mt-5">
    <img src={Error} alt="not found"/>
    <h3 className="textoloco2">Lo sentimos, la ruta que buscas no se encuentra... </h3>
    <p>intenta desde el principio:</p>
    <Link to="/"><Button variant="info" className="mb-5">ir al Inicio</Button></Link>
</div>
</>
    )
}
export default Error404;