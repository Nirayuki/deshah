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
        <ContainerNav>
        <Logo href="/">
            Deshah<span>Games</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/download">Download</MenuLink>
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
  position: static;
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