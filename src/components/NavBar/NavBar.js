import logo from "../../img/logo.png";
import './navbar.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBar(){
    return(
        <>
        <Navbar variant="light" expand="lg">
            <Navbar.Brand href="#home">
            <img alt="" src={logo} width="40em" className="d-inline-block align-top"/> Chascarrito
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Chascos & Bromas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Bichos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Chascos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Lanza Aguas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Caracterizaciones" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Heridas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Mascaras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Pelucas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="">Ilusionismo</Nav.Link>
                <Nav.Link href="">Disfraces</Nav.Link>
                <NavDropdown title="Cotillón" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Despedida de solteros</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Halloween</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Zombies</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="">Juguetes</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavBar;