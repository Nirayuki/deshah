import styled from "styled-components";


export const Download = styled.div`
    width: 61.25rem; 
    
    border: solid #7b7fda 3px;

    display: flex;
    align-items: center;

    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5rem;

    span{
        font-size: 2rem;
        color: #fff;
        margin-bottom: 10px;
        margin-top: 10px;

        &:hover {
            color: #7b7fda;
        }
    }

    @media screen and (max-width: 650px){
        flex-direction: column;
        width: 25rem;
        height: 33rem;
    }
`

export const Card = styled.div`
    max-width: 25rem;
    height: 20rem;


    background: url(${(props)=>props.img});
    background-position: center center;
    
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;

    transition: 0.5s;

    /* &:hover{

    } */
    
    img{
        width: 100px;
        height: 100px;
    }

    @media screen and (max-width: 650px){

        width: 20rem;
        height: 26rem;

        /* &:hover{
            transition: 0.3s;
            width: 21rem;
            height: 27rem;
        } */
    }
`

export const Button = styled.button`

        font-family: arial;
        color: #FFFFFF !important;
        font-size: 14px;
        text-shadow: 1px 1px 0px #6F7CCE;
        box-shadow: 1px 1px 4px #6F7CCE;
        padding: 14px 50px;
        border-radius: 10px;
        /* border: 2px solid #3866A3; */
        border: none;
        background: #6F7CCE;

        &:hover{
            color: #FFFFFF !important;
            background: #5F71CE;
        }

`