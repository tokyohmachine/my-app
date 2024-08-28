import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
import { blueGrey} from '@mui/material/colors';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

function Navigation() {
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
                        <Link to="/" className="nav-link mx-2">Home</Link>
                        <Link to="/testimonials" className="nav-link mx-2">About</Link>
                        <Link to="/order" className="nav-link mx-2">Menu</Link>
                        <Link to="/bookingpage" className="nav-link mx-2">Reservation</Link>
                        <Link to="/order" className="nav-link mx-2">Order online</Link>
                    </Nav>

                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">

                    <Navbar.Text style={{ marginRight: '30px'}}>
                        <a href="#login">
                        <Avatar  sx={{ bgcolor: blueGrey }} alt="" src="/broken-image.jpg" />
                        </a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Navigation;
