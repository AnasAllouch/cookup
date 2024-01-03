import React, { useState } from 'react';
import { Container, Navbar, Nav, Image, Modal, Button, Form, } from 'react-bootstrap';
import {Link }from'react-router-dom'
import cookpal from './images/cookpal.png';
import logoform from'./images/Cookup.png';
export default function Topnavbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true); // State to manage which form to display

  const handleDecouvrirClick = () => {
    setShowLoginModal(true);
  };

  const handleClose = () => {
    setShowLoginModal(false);
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm); // Toggle between login and registration form
  };

  return (
    <>
        
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#FF5733' }} variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={cookpal} alt="Logo" width="150" height="25" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light"><b>Passer en cuisine</b></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-light"><Link to="/"className="text-light" style={{textDecoration:'none'}}><b>Faire les courses</b></Link></Nav.Link>
              <Nav.Link className="text-light"><b>A propos</b></Nav.Link>
              <Nav.Link className="text-light"><Link to="/aide"className="text-light" style={{textDecoration:'none'}}><b>Aide</b></Link></Nav.Link>

              <Nav.Link className="text-light">
              </Nav.Link>
              <Nav.Link>
                <button className="btn btn-light" style={{ color: '#FF5733', borderRadius: '20px' }} onClick={handleDecouvrirClick}>
                  <b>Découvrir</b>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <Modal show={showLoginModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showLoginForm ? 'Se connecter' : 'Registre'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={logoform} alt="" style={{ width: '150px', margin: 'auto', display: 'block', padding: '0px' }} />
          {showLoginForm ? (
            <Form >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Adresse e-mail</Form.Label>
                <Form.Control type="email" placeholder="exemple@gmail.com" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" />
              </Form.Group>
              
              <Button  type="submit" style={{color:'white',backgroundColor:'#B73A06',border:'none',width:'100%',margin: 'auto', display: 'block',marginTop:'10px'}}>
              Se connecter
              </Button>
              <br />
              <p>Vous etes pas inscriez ?</p>
              <Button variant="link" onClick={toggleForm} style={{color:'#FF5733'}}>
              Passer à l'inscription
              </Button>
            </Form>
          ) : (
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" style={{color:'white',backgroundColor:'#B73A06',border:'none',width:'100%',margin: 'auto', display: 'block',marginTop:'10px'}}>
                Inscrire
              </Button>
              <br />
              <p>Vous avez deja un compte ?</p>
              <Button variant="link" onClick={toggleForm} style={{color:'#FF5733'}}>
              Passer à la connexion
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      
      
    
    </>

   
  );
}
