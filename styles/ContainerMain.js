import styled from "styled-components";

const ContainerMain = styled.div`
    width: ${props => props.width || "100vw"};
    height: ${props => props.height || "100vh"};
    background-color: #181818;
`

export default ContainerMain;