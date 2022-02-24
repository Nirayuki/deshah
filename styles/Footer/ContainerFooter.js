import styled from "styled-components";

const ContainerFooter = styled.div`
    width: 100%;
    height: 5vh;
    background-color: darkgrey;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 5rem;

    @media screen and (max-width: 500px) {
        height: 10rem;
        flex-direction: column;
        padding: 0rem 1rem;
    }

    .content{
        width: 50%;
        /* background-color: #000; */
        justify-content: space-between;
        display: flex;

        @media screen and (max-width: 500px){
            width: 70%;
            height: 10rem;
            align-items: center;
            padding: 0.5rem;
            /* justify-content: center; */
            /* background-color: #000; */
            flex-direction: column;
        }
    }

    .container-navigation{
        width: 50%;
        display: flex;


        @media screen and (max-width: 500px){
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
    }

    .copyright{
        width: 50%;
    }
    
    .textContent{
        text-decoration: none;
        padding-right: 3rem;
        color: #000;
        cursor: pointer;
        @media screen and (max-width: 500px){
            padding-bottom: 0.7rem;
            padding-right: 0px;
        }
    }

    .text{
        font-size: 0.7rem;
    }
`


export default ContainerFooter;