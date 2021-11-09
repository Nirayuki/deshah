import {React, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Router from 'next/router';
import NavBar from './Navbar/NavBar';
import Footer from './Footer/Footer'
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export default function LayoutAuth(props){

    useEffect(() => {
        const { 'token': token} = parseCookies()
        if (!token) {
            Router.push("/login")
        }
    }, [])


    return(
        <div className="content">
            <NavBar/>  
                {props.children}
            <Footer/>
        </div>
    )
}

