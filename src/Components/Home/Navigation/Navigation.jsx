import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation-content">
            <Navbar  expand="lg">
                <Navbar.Brand href="#home">
                    <h2 className="tag-line">Fruits-Details</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#fruits">Fruits</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#contract">Contract</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;