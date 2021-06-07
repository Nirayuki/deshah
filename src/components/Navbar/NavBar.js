import React from 'react'
import Link from 'next/link'


export default function NavBar() {
return (
    <>  
        <nav className="container">
            <nav className="logo_container">
                <h1>Deshah</h1>
            </nav>

            <ul className="navigation">

                <li className="nav">
                    <Link href="/">
                        <a>Home</a>
                    </Link> 
                </li>
                <div className="barrerinha"></div>
                <li className="nav">
                    <Link href="/login">
                        <a>Login</a>
                    </Link> 
                </li>
                <div className="barrerinha"></div>
                <li className="nav">
                    <Link href="/register">
                        <a>Register</a>
                    </Link> 
                </li>
                <div className="barrerinha"></div>
                <li className="nav">
                    <Link href="/about">
                        <a>About</a>
                    </Link> 
                </li>
            </ul>
        </nav>
    </>
)

}