import React from 'react'
import {PiUserCirclePlusLight} from "react-icons/pi";
import {Button} from "react-bootstrap";
import SignUpPopup from "./SignUpPopup";

function SignUpButton({onSignUpClick}) {
    const buttonStyles = {
        backgroundColor: 'transparent',
        border: 'none'
    };
    const iconStyles = {
        fontSize: '200%'
    };

    return (
        <div>
            <Button variant="primary" className="m-1" style={buttonStyles} onClick={onSignUpClick}>
                <PiUserCirclePlusLight style={iconStyles}/> Sign Up
            </Button>
            <SignUpPopup/>
        </div>
    )
}

export default SignUpButton;