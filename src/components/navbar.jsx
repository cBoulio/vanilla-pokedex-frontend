import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
          
          <Navbar bg="primary" expand="lg" variant="dark" >
          <Navbar.Brand href="/home">Vanilla Pokédex</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/">Register</Nav.Link>
            </Nav>
            
            <Nav>
              <Nav.Link href="/pokemon">Pokémon</Nav.Link>
              <Nav.Link href="/editions">Editions</Nav.Link>
              <Nav.Link href="/trainers">Trainers</Nav.Link>
              <Nav.Link href="/regions">Regions</Nav.Link>
            </Nav>
         
          </Navbar.Collapse>
        </Navbar>


      </React.Fragment>
    );
  }
}
 
export default NavBar;