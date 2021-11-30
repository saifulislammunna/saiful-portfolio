import React from 'react';
import { Container, Nav, Navbar  } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
        <Navbar bg="dark" sticky="top" collapseOnSelect expand="lg"  variant="dark">
          <Container>
              <Navbar.Text className=" text-white">
              <h3 className="text-white">Saiful.</h3>
            </Navbar.Text>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="home text-white"  as={Link}  to="/home">Home</Nav.Link>
             
            <Nav.Link  className="home text-white" as={Link}  to="/aboutme">About Me</Nav.Link>
            <Nav.Link  className="home text-white" as={Link}  to="/blogs">Blogs</Nav.Link>
            <Nav.Link  className="home text-white" as={Link}  to="/contactme">Contact Me</Nav.Link>
            
             
            
          </Navbar.Collapse>
           
          </Container>
        </Navbar> 
      </>  
    );
};

export default Header;