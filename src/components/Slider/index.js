import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./style.css"

function Slider({productos}){
    
    return(
        <Carousel>

            {productos.map((producto)=>{
                        return(
                        <Carousel.Item>
                            <Link to={`/producto/${producto.id}?${encodeURIComponent(producto.titulo).replace(/%20/g, "-")}`}>
                            <img 
                            className="d-block imgslider "
                            src={producto.urlImagen}/>
                            </Link>
                            <Carousel.Caption>
                            <h3><Link to={`/producto/${producto.id}?${encodeURIComponent(producto.titulo).replace(/%20/g, "-")}`}>{producto.titulo}</Link></h3>
                            <p className="px-5 d-none d-md-block">{producto.descripcion}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                    })}
        
        </Carousel>)
}
export default Slider;