import { useState, useEffect  } from "react";
import { createContext } from "react";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import axios from 'axios';


export const AuthContext = createContext({})

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [twoStep, setTwoStep] = useState(true);

    useEffect(() => {
        const { 'token': token} = parseCookies()
        if (token) {
            setIsAuthenticated(true);
        }
    }, [])

    async function signIn({email, senha, resposta}) {
        
        const form = {
            email,
            senha,
            resposta
        }

        axios.post('http://localhost:3001/login', form)
            .then((response) => {
               if(response.data?.message === "Login incorreto" || response.data?.message === "Email doesn't exist"){
                    setIsAuthenticated(false);
                    setErrorLogin(true);
                    setTwoStep(false);
                    console.log("caiu no errado")
               } else {
                    setCookie(undefined, 'token', response.token, {
                        maxAge: 60 * 60 * 1, // 1 Hour
            
                    })
                    setIsAuthenticated(true);
                    Router.push('/');
               }
            });

            return(twoStep);
    }

    async function logOut() {
        setIsAuthenticated(false);
        destroyCookie(undefined, 'token');
        Router.push('/');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, logOut, errorLogin }}>
            {children}
        </AuthContext.Provider>
    )
}