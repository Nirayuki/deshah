import styled from "styled-components";


export const ContainerDownload = styled.div`
    /* height: 87.5vh; */
    /* display: flex; */
    /* justify-content: center; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* padding-top: 5rem; */
    /* width: 61.25rem; */
    /* margin: auto; */
    /* background-color: antiquewhite; */
`;

export const BgSection = styled.section`
    width: 100vw;
    height: 31.875rem;
    background: url(${(props)=>props.img});
    background-position: center center;
    /* top: 30%; */
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 31.875rem;
        width: 100%;
    }

    button{
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
    }
`;


export const MainSection = styled.section`
    width: 100vw;
    height: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`




