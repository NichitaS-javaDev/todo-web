import React from 'react'
import {PiUserCircleLight} from "react-icons/pi";
import {Button} from "react-bootstrap";
import SignInPopup from "./SignInPopup";

function SignInButton({onSignInClick}) {
    const buttonStyles = {
        backgroundColor: 'transparent',
        border: 'none'
    };
    const iconStyles = {
        fontSize: '200%'
    };

    return (
        <div>
            <Button variant="primary" className="m-1" style={buttonStyles} onClick={onSignInClick}>
                <PiUserCircleLight style={iconStyles}/> Sign In
            </Button>
            <SignInPopup/>
        </div>
    )
}

export default SignInButton;