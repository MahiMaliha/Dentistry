import React from 'react';
import { Button, Card, CardGroup, Col, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" className='p-1' variant="dark">
  <Container>
  <Navbar.Brand href="#home"><h1>Dentistry</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className='mx-auto'>
      <Nav.Link as={Link} to="/" className='me-2'>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className='me-2'>About</Nav.Link>
      <Nav.Link as={Link} to="/services" className='me-2'>Services</Nav.Link>
      <Nav.Link as={Link} to="/blogs" className='me-2'>Blog</Nav.Link>
      <Nav.Link as={Link} to="/reviews" className='me-2'>Reviews</Nav.Link>
      <Nav.Link as={Link} to="/contact" className='me-2'>Contact</Nav.Link>
    </Nav>
    <Nav>

        {
            user ?
            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
            :
            <Nav.Link as={Link} to="login">
            Login
            </Nav.Link>
        }  
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;