import React, {useState} from 'react'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import ContainerNavbar from '../../../styles/Navbar/ContainerNavbar';
import styled from "styled-components";


export default function NavBar() {
    const {isAuthenticated, logOut} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    return (

        // <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top'>
        //     <Container>
        //         <Navbar.Brand href="/">Deshah</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="/">Home</Nav.Link>
        //                 {/* <Nav.Link href="/about">About</Nav.Link> */}
        //                 <Nav.Link href="/download">Download</Nav.Link>
        //                 {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown> */}
        //             </Nav>

                    
        //             <Nav>
        //                 {isAuthenticated ? <> <Nav.Link onClick={() => logOut()}>LogOut</Nav.Link> <Nav.Link href="/settings">Settings</Nav.Link></> : <> <Nav.Link href="/login">Login</Nav.Link>
        //                 <Nav.Link href="/register">Registrar</Nav.Link></>}
                        
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>


        <ContainerNav>
        <Logo href="">
            Deshah<span>Games</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
            <MenuLink href="">Home</MenuLink>
            <MenuLink href="">Download</MenuLink>
            {isAuthenticated ? <> <MenuLink onClick={() => logOut()}>LogOut</MenuLink> <MenuLink href="/settings">Settings</MenuLink></> : <> <MenuLink href="/login">Login</MenuLink>
            <MenuLink href="/register">Registrar</MenuLink></>}
        </Menu>
        </ContainerNav>
        
        
    )

}


const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #7b7fda;
  }
`;

const ContainerNav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #202020;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;