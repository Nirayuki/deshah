import { AppBar, Toolbar, Typography, Button, makeStyles} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import React from 'react';


const headersdata = [
    {
        label: "Inicio",
        href: "/inicio"
    },
    {
       label: "Logar",
       href: "/logar"
    },
    {
        label: "Registrar",
        href: "/registrar"
    },
    
    {
        label: "Sobre nós",
        href: "/sobre"
    }

];

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#400CCC",
       paddingRight: "79px",
       paddingLeft: "118px",
    },
    logo:{
        fontFamily: "Wrok sans, sans-serif",
        fontWeight: 600,
        color: "#FFfEFE",
        textAlign: "left",
    },
    menuButton:{
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px"
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
    }
 }));

export default function Header() {

    const { header, logo, menuButton, toolbar } = useStyles();

    const displayDesktop = () => {
        return <Toolbar className={toolbar}>
            {desashLogo}
            <div>{getMenuButtons()}</div>
            </Toolbar>
    }


    const desashLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            Desash Games
        </Typography>
    )

    const getMenuButtons = () => {
        return headersdata.map(({label, href}) => {
            return(
                <Button
                {...{
                    key: label,
                    color: "inherit",
                    to: href,
                    component: RouterLink,
                    className: menuButton
                }}
                >
                    {label}
                </Button>
            )
        })
    }

    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    )
}