import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignUpButton from "./sign-up/SignUpButton";
import SignUpPopup from "./sign-up/SignUpPopup";
import SignInButton from "./sign-in/SignInButton";
import SignInPopup from "./sign-in/SignInPopup";

function NavBar() {
    const [isSignUpPopupOpen, setSignUpPopupOpen] = useState(false);
    const [isSignInPopupOpen, setSignInPopupOpen] = useState(false);

    const openSignUpPopup = () => {
        setSignUpPopupOpen(true);
    };

    const closeSignUpPopup = () => {
        setSignUpPopupOpen(false);
    };

    const openSignInPopup = () => {
        setSignInPopupOpen(true);
    };

    const closeSignInPopup = () => {
        setSignInPopupOpen(false);
    };

    const handleSignInClick = () => {
        closeSignUpPopup();
        openSignInPopup();
    }

    const handleSignUpClick = () => {
        closeSignInPopup();
        openSignUpPopup();
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary navbar">
            <Container fluid className="ps-3">
                <Navbar.Brand className="me-auto">ToDo List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ps-4">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#price">Price</Nav.Link>
                        <Nav.Link href="#support">Support</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <SignUpButton onSignUpClick={handleSignUpClick}/>
                <SignUpPopup isOpen={isSignUpPopupOpen} onClose={closeSignUpPopup}/>
                <SignInButton onSignInClick={handleSignInClick}/>
                <SignInPopup isOpen={isSignInPopupOpen} onClose={closeSignInPopup}/>
            </Container>
        </Navbar>
    )
}

export default NavBar;