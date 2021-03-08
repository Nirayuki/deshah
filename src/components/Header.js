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
                <Link to="/">
                    <li>
                        <a href="#">
                            Home
                            </a>
                    </li>
                </Link>

                <Link to="/logar">
                    <li>
                        <a href="#">
                            Login
                            </a>
                    </li>
                </Link>

                <Link to="/registrar">
                    <li>
                        <a href="#">
                            Register
                            </a>
                    </li>
                </Link>

                <Link to="/sobre">
                    <li>
                        <a href="#">
                            About
                            </a>
                    </li>
                </Link>
            </ul>
        </nav>
    </>
)

}