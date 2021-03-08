import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';


export default function Header() {

return (
    <>
        <nav>
            <nav className="logo_container">
                <h1>Deshah</h1>
            </nav>

            <ul className="navigation">
                <Link to="/" id="nav">
                    Home
                </Link>

                <Link to="/logar" id="nav">
                    Login
                </Link>

                <Link to="/registrar" id="nav">
                    Register
                </Link>

                <Link to="/sobre" id="nav">
                    About
                </Link>
            </ul>
        </nav>
    </>
)

}