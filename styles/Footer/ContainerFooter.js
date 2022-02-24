import styled from "styled-components";

const ContainerFooter = styled.div`
    width: 100%;
    height: 5vh;
    background-color: darkgrey;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 5rem;

    @media screen and (max-width: 500) {
        flex-direction: column;
    }

    .container-navigation{
        width: 50%;
        display: flex;

    }

    .copyright{
        width: 50%;
    }
    
    .content{
        padding-right: 3rem;
    }

    .text{
        font-size: 0.7rem;
    }
`


export default ContainerFooter;