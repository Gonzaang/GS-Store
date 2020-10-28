import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';


class NavBar extends React.Component{
    render(){
      return (<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">GS STORE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Inicio
    </Nav.Link>
      <Nav.Link href="#pricing">Nosotros</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Motherboards</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Placas de video</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Procesadores</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Memorias RAM</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
      <CartWidget />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


</>
      )
    }
  }

  export default NavBar;