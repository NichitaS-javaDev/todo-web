import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from "./NavBar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./Welcome";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <NavBar/>
        <Welcome/>
    </React.Fragment>
);