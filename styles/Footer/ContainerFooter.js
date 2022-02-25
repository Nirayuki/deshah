import styled from "styled-components";

const ContainerFooter = styled.footer`
    width: 100vw;
    height: 5vh;
    background-color: #202020;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 5rem;
    position: static;
    bottom:0;
    left:0;

    @media screen and (max-width: 650px) {
        height: auto;
    }

    .content{
        width: 50%;
        justify-content: space-between;
        display: flex;

        @media screen and (max-width: 1280px) {
            width: 100%;
        }

        @media screen and (max-width: 650px){
            flex-direction: column;
            width: 100%;
        }
    }

    .container-navigation{
        width: 50%;
        display: flex;
        justify-content: flex-start;

        @media screen and (max-width: 650px){
            width: 100%;
            margin-top: 0.5rem;
            justify-content: center;
        }
    }

    .container-copyright{
        display: flex;
        width: 50%;
        justify-content: flex-end;

        @media screen and (max-width: 650px){
            margin-top: 0.5rem;
            width: 100%;
            justify-content: center;
        }
    }

    .textContent{
        text-decoration: none;
        padding-right: 3rem;
        color: white;
        cursor: pointer;

        &:hover {
            color: #7b7fda;
        }
    }

    .text{
        font-size: 0.7rem;
    }
`


export default ContainerFooter;