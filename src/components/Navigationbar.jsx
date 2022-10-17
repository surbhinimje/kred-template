import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/sticky-logo.svg";



const Navigationbar = () => {
    return (
     <>
            
           <Navbar collapseOnSelect fill expand="lg" className="px-5 navbar-white" fixed="top">
           <Container fluid>
            <Navbar.Brand  to="/" >
            <a href="/"><img src={logo} width="100px"  /></a>{" "}
             
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto" >
            <Nav.Item className="px-3">
                <Nav.Link 
                  href="/"
                  activeStyle={{ color:'black' }}
                >
                    Menu 1
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-3"> 
                <Nav.Link  
                  href="#about"
                  activeStyle={{ color: 'black' }}
                >
                    Menu 2
                </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                <Nav.Link 
                  href="#work" 
                  activeStyle={{ color: 'black' }}
                >
                   Menu 3
                </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                <Nav.Link  
                  href="#projects" 
                  activeStyle={{ color: 'black' }}
                >
                    Menu 4
                </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                <Nav.Link  
                  href="#contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Menu 5
                </Nav.Link>
                </Nav.Item>
               
                </Nav> 
                </Navbar.Collapse>
                </Container>
                </Navbar>
              
          
        </>
    );
};
export default Navigationbar;