
import React, { Component } from 'react'
import Layout from '../src/components/Layout'
import styled from 'styled-components'

export default function sobre (){
    return(
        <Layout>
            <Container>
                Página de sobre
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