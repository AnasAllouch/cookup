import React from "react";
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import cookpal from './images/cookpal.png';

export default function Topnavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#FF5733'}} variant="light">
      <Container>
        <Navbar.Brand href="">
          <Image src={cookpal} alt="Logo" width="150" height="25"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/cuisine">Passer en cuisine</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home" className="text-light" > <b>Acceuil</b> </Nav.Link>
            <Nav.Link href="#features" className="text-light"> <b>A propos</b> </Nav.Link>
            <Nav.Link href="#pricing" className="text-light"> <b>Aide</b> </Nav.Link>
            <Nav.Link><button className="btn btn-light" style={{color:'#FF5733',borderRadius:'20px'}} > <b>Découvrir</b> </button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
