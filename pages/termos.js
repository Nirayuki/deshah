import React from 'react'
import Layout from '../src/components/Layout'
import styled from 'styled-components';

export default function termos() {
    return(
        <Layout>
            <Container>
                Pagina dos termos
            </Container>
        </Layout>
    )
}



const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 61.25rem;
    margin: auto;
    background-color: antiquewhite;
`