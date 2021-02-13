import  {Link} from 'react-router-dom';
import logo from "../../img/logo.png";
import CartWidget from "../CartWidget";
import './style.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBar(){
    return(
        <>
        <Navbar expand="lg">
            <Navbar.Brand href="#home">
            <Link to="/"><img alt="" src={logo} width="40em" className="d-inline-block align-top"/> Chascarrito</Link>
            </Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Chascos & Bromas" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/bichos">Bichos</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/chascos">Chascos</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/agua">Lanza Aguas</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Caracterizaciones" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/heridas">Heridas</Link></NavDropdown.Item>
                    <NavDropdown.Item>Mascaras</NavDropdown.Item>
                    <NavDropdown.Item>Pelucas</NavDropdown.Item>
                    <NavDropdown.Item>Accesorios</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="">Ilusionismo</Nav.Link>
                <Nav.Link href="">Disfraces</Nav.Link>
                <NavDropdown title="Cotillón" id="basic-nav-dropdown">
                    <NavDropdown.Item>Despedida de solteros</NavDropdown.Item>
                    <NavDropdown.Item>Halloween</NavDropdown.Item>
                    <NavDropdown.Item>Zombies</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="">Juguetes</Nav.Link>
                </Nav>
                <Nav.Link href=""><CartWidget/></Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavBar;