import React from 'react'
import Layout from '../src/components/Layout';
import Download from '../src/components/Download';
import styled from 'styled-components';

export default function download () {
  return (
      <Layout>
        <Container>
          <Download/>
        </Container> 
      </Layout>    
  )
}

const Container = styled.div`
    height: 87.5vh;
    /* display: flex;
    justify-content: center;
    align-items: center;
    width: 61.25rem;
    margin: auto;
    background-color: antiquewhite; */
`


