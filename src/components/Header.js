import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from "react-router-dom";


const Header = () => {
  return (
    <Navbar  expand="lg" className="navbar-dark bg-dark">
      <Navbar.Brand as={NavLink} to="/" exact>
        <i className="fa fa-imdb"></i> Movie Search Info
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className= "mx-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/"  exact className="navLinkColor">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  as={NavLink} to="/searchMovie" exact>Search</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
