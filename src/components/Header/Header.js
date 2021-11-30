import React from 'react';
import { Container, Nav, Navbar  } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
        <Navbar bg="dark" sticky="top" collapseOnSelect expand="lg"  variant="dark">
          <Container>
              <Navbar.Text className=" text-white">
               Saiful.
            </Navbar.Text>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="home text-white"  as={Link}  to="/home">Home</Nav.Link>
             
            <Nav.Link  className="home text-white" as={Link}  to="/aboutme">About Me</Nav.Link>
            <Nav.Link  className="home text-white" as={Link}  to="/blogs">Blogs</Nav.Link>
            
             
            
          </Navbar.Collapse>
           
          </Container>
        </Navbar> 
      </>  
    );
};

export default Header;