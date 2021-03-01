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
                    <Link to="/2">Bichos</Link>
                    <Link to="/1">Chascos</Link>
                    <Link to="/3">Lanza Aguas</Link>
                </NavDropdown>
                <NavDropdown title="Caracterizaciones" id="basic-nav-dropdown">
                    <Link to="/4">Heridas</Link>
                    <Link to="/5">Mascaras</Link>
                    <Link to="/6">Pelucas</Link>
                    <Link to="/7">Accesorios</Link>
                </NavDropdown>
                <Link  to="/8">Ilusionismo</Link>
                <Link to="/9">Disfraces</Link>
                <NavDropdown title="Cotillón" id="basic-nav-dropdown">
                    <Link to="/10">Despedida de solteros</Link>
                    <Link to="/11">Halloween</Link>
                    <Link to="/12">Zombies</Link>
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