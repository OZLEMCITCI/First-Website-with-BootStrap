import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
//local resimleri gosterebilmek icin import yontemi ile eklemek gerekiyor aksi halde go
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <div>
            <Navbar className="p-4" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="logo"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto ">
                       <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/kurslar">Kurslar</Link>
                      <Link className="nav-link" to="/iletisim">Iletisim</Link>
                        
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default MyNavbar
