import React from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
//local resimleri gosterebilmek icin import yontemi ile eklemek gerekiyor aksi halde go
import logo from "../images/logo.png"

const MyNavbar = () => {
    return (
        <div>
            <Navbar className="p-4" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Dersler</Nav.Link>
      <NavDropdown title="Kurslar" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Web Developer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Java Developer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">SDET </NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default MyNavbar
