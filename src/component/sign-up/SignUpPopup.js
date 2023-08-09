import React from 'react';
import CloseButton from "react-bootstrap/CloseButton";

function SignUpPopup({isOpen, onClose}) {
    return (
        isOpen && (
            <div className="bg-dark p-2 popup-overlay-sUp">
                <div className="popup-content">
                    <div className={"popup-content-input"}>
                        <input id={"sign-up-input"} type={"text"} placeholder={"Username"}/>
                        <input id={"sign-up-input"} type={"email"} placeholder={"Email"}/>
                        <input id={"sign-up-input"} type={"password"} placeholder={"Password"}/>
                        <input id={"sign-up-input"} type={"password"} placeholder={"Confirm Password"}/>
                        <button id={"sign-up-input-btn"} type={"submit"}><b>Submit</b></button>
                    </div>
                    <div data-bs-theme="dark" className='bg-dark p-3 topPanelPopUp-sUp'>
                        <CloseButton onClick={onClose}/>
                    </div>
                </div>
            </div>
        )
    );
}

export default SignUpPopup;
