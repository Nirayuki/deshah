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


    img{
        height: 31.875rem;
        width: 100%;
    }

`;


export const MainSection = styled.section`
    width: 100vw;
    background-color: white;
    height: 31.875rem;
`




