import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// style={{ backgroundColor: '#495E57'}}
function Footer() {
  return (
    <Navbar className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand style={{ marginLeft: '30px'}}>
                        <img
                            src="/images/logo.jpg"
                            alt="Little Lemon"
                            className="d-inline-block align-top"
                            style={{ width: '100%', height: '40px'}}
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav  style={{ color: '#495E57', fontWeight: '600'}}>
                        <Nav.Link href="#home" className="mx-2">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" className="mx-2">
                            About
                        </Nav.Link>
                        <Nav.Link href="#menu" className="mx-2">
                            Menu
                        </Nav.Link>
                        <Nav.Link href="#reservation" className="mx-2">
                            Reservation
                        </Nav.Link>
                        <Nav.Link href="#order" className="mx-2">
                            Order online
                        </Nav.Link>
                    </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
  );
}

export default Footer;
