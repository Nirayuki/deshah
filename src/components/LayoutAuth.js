import {React, useEffect, useState} from 'react';
import { Grid } from '@material-ui/core';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Router from 'next/router';
import NavBar from './Navbar/NavBar';
import Footer from './Footer/Footer'
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export default function LayoutAuth(props){

    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        const { 'token': token} = parseCookies()
        if (!token) {
            Router.push("/login")
            setIsAuth(false);
        }else{
            setIsAuth(true);
        }
    }, [])


    return(
        <> 
            {isAuth ? <>
                <div className="content">
                    <NavBar/>  
                    {props.children}
                    <Footer/>
                </div>
            </> : null}
            
        </>
        
    )
}

