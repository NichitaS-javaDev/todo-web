import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";
import {PiUserCircleLight, PiUserCirclePlusLight} from "react-icons/pi";

function NavBar(){
    const buttonStyles = {
        backgroundColor: 'transparent',
        border: 'none'
    };
    const iconStyles = {
        fontSize: '200%'
    };

    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary navbar">
            <Container fluid className="ps-3">
                <Navbar.Brand className="me-auto">ToDo List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ps-4">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#price">Price</Nav.Link>
                        <Nav.Link href="#support">Support</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="primary" className="m-1" style={buttonStyles}>
                    <PiUserCirclePlusLight style={iconStyles}/> Sign Up
                </Button>
                <Button variant="primary" className="m-1" style={buttonStyles}>
                    <PiUserCircleLight style={iconStyles}/> Sign In
                </Button>
            </Container>
        </Navbar>
    )
}

export default NavBar;