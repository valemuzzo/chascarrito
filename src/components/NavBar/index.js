import './style.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import  {Link, NavLink} from 'react-router-dom';
import CartWidget from "../Cart/CartWidget";
import logo from "../../img/logo.png";

function NavBar(){
    const carrito = {
        color: "#a3f1fd"
      };
    return(
        <>
        <Navbar expand="lg" className="mb-4">
            <Navbar.Brand href="#home">
            <Link to="/"><img alt="" src={logo} width="40em" className="d-inline-block align-top"/> Chascarrito</Link>
            </Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Chascos & Bromas" id="basic-nav-dropdown">
                    <Link to="/bichos">Bichos</Link>
                    <Link to="/chascos">Chascos</Link>
                    <Link to="/lanza-aguas">Lanza Aguas</Link>
                </NavDropdown>
                <NavDropdown title="Caracterizaciones" id="basic-nav-dropdown">
                    <Link to="/heridas">Heridas</Link>
                    <Link to="/mascaras">Mascaras</Link>
                    <Link to="/pelucas">Pelucas</Link>
                    <Link to="/accesorios">Accesorios</Link>
                </NavDropdown>
                <Link  to="/ilusionismo">Ilusionismo</Link>
                <Link to="/disfraces">Disfraces</Link>
                <NavDropdown title="Cotillón" id="basic-nav-dropdown">
                    <Link to="/despedida-solteros">Despedida de solteros</Link>
                    <Link to="/halloween">Halloween</Link>
                    <Link to="/zombies">Zombies</Link>
                </NavDropdown>
                <Link to="/13">Juguetes</Link>
                </Nav>
                <NavLink style={carrito} to="/Cart"><CartWidget /></NavLink>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavBar;