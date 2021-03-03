import React from 'react';
import '../styles/header.css';
import {Link} from 'react-router-dom';


export default function Header(){
    return(
        <div className="header">
            <div className="inner_header">
                <div className="logo_container">
                    <h1>Deshah</h1>
                </div>

                <ul className="navigation">
                    <Link to="/">
                     <a><li>Home</li></a>
                    </Link>

                    <Link to="/logar">
                    <a><li>Login</li></a>
                    </Link>

                    <Link to="/registrar">
                    <a><li>Register</li></a>
                    </Link>

                    <Link to="/sobre">
                    <a><li>About</li></a>
                    </Link>
                </ul>
            </div>
        </div>
    )
}