import styled from "styled-components";


export const Download = styled.div`
    max-width: 61.5rem;
    min-width: 25rem;
    width: 100%;
    
    /* border: solid #7b7fda 3px; */

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5rem;


`

export const Main = styled.div`

    width: 30.5rem;
    height: 33rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .desc-content{
        font-size: 35px;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 20px;
    }

`

export const Demo = styled.div`

    width: 30.5rem;
    height: 33rem;

    /* background-color: azure; */

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .desc-content{
        font-size: 35px;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 20px;
    }

    
/* 
    @media screen and (max-width: 1000px) {
        height: 20rem;
    } */
`

export const CardDemo = styled.div`
    max-width: 25rem;
    min-width: 20rem;
    height: 25rem;

    box-shadow:  1px 1px 4px #6f7cce;


    border-radius: 20px;
    background: url(${(props)=>props.img});
    background-size: 450px 327px;

    padding-top: 30px;
    
    display: flex;
    align-items: flex-end;

    transition: 0.5s;
    
    .button-content{

        height: 5rem;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        /* padding-top: 10px; */

        background-color: #7b7fda;
        /* border-radius: 20px; */
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`

export const Card = styled.div`
    max-width: 25rem;
    min-width: 20rem;
    height: 25rem;

    box-shadow:  1px 1px 4px #6f7cce;


    border-radius: 20px;
    /* background-color: #FFF; */
    background: url(${(props)=>props.img});
    background-size: 350px 350px;
    /* background-position: center center; */

    padding-top: 30px;
    
    display: flex;
    align-items: flex-end;

    transition: 0.5s;
    
    .button-content{

        height: 5rem;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        /* padding-top: 10px; */

        background-color: #7b7fda;
        /* border-radius: 20px; */
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

`

export const Button = styled.button`

        font-family: arial;
        color: #FFFFFF !important;
        font-size: 14px;

        /* text-shadow: 1px 1px 0px #6F7CCE; */
        box-shadow: 1px 1px 4px #6F7CCE;

        padding: 14px 50px;

        border-radius: 10px;
        border: solid #FFFFFF 2px;

        background: none;

        &:hover{
            color: #7b7fda !important;
            background: #FFFFFF;
        }

`



