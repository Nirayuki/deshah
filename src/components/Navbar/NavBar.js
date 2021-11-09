import React from 'react'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


export default function NavBar() {
    const {isAuthenticated, logOut} = useContext(AuthContext);
    console.log(isAuthenticated)
    return (

        <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top'>
            <Container>
                <Navbar.Brand href="/">Deshah</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="/about">About</Nav.Link> */}
                        <Nav.Link href="#link">Link</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                    
                    <Nav>
                        {isAuthenticated ? <> <Nav.Link onClick={() => logOut()}>LogOut</Nav.Link></> : <> <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Registrar</Nav.Link></>}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}