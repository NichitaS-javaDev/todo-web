import React from "react";
import logo from './images/logo.png'
import welcome_left from './images/welcome-left.png'
import welcome_right from './images/welcome-right.png'


function Welcome() {
    return (
        <div className={'centered-container'}>
            <div className={'left-component'}>
                <img src={welcome_left} width={300} height={450} alt={welcome_left}/>
            </div>
            <div className={'center-components'}>
                <div className={'align-self-center mb-3'}>
                    <img src={logo} width={100} height={80} alt={logo}/>
                </div>
                <div className={'text-center'}>
                    <span><p>Macrosoft To Do</p></span>
                    <p>'To Do' helps you stay focused whether</p>
                    <p>you're working or playing enhancing </p>
                    <p>your productivity and efficiency</p>
                </div>
            </div>
            <div className={'right-component'}>
                <img src={welcome_right} width={220} height={520} alt={welcome_left}/>
            </div>
        </div>
    )
}

export default Welcome;