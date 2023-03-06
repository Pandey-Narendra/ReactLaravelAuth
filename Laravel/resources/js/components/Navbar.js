import React from "react";
import ReactDOM from 'react-dom';

export default function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="login">LaravelReact</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="register">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}