import React from 'react'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


export default function Footer() {
    return (

        <Navbar bg="dark" variant="dark" expand="lg" className="fixed-bottom" >
            <Container>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/sobre">Sobre</Nav.Link>                        
                    </Nav>
                    
                    <Nav className="me-auto">
                        <Nav.Link href="/termos">Termos</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="/ajuda">Ajuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}