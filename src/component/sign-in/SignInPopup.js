import React from 'react';
import CloseButton from "react-bootstrap/CloseButton";

function SignInPopup({isOpen, onClose}) {
    return (
        isOpen && (
            <div className="bg-dark p-2 popup-overlay-sIn">
                <div className="popup-content">
                    <div className={"popup-content-input"}>
                        <input id={"sign-up-input"} type={"text"} placeholder={"Username or Email"}/>
                        <input id={"sign-up-input"} type={"password"} placeholder={"Password"}/>
                        <button id={"sign-up-input-btn"} type={"submit"}><b>Log In</b></button>
                    </div>
                    <div data-bs-theme="dark" className='bg-dark p-3 topPanelPopUp-sIn'>
                        <CloseButton onClick={onClose}/>
                    </div>
                </div>
            </div>
        )
    );
}

export default SignInPopup;
