import React from 'react';
import Layout from '../src/components/Layout';
import { useContext } from 'react';
import { AuthContext } from '../src/contexts/AuthContext';
import styled from 'styled-components';

const data = [
  {name: "Godinez", score: 1000},
  {name: "Hugo", score: 970},
  {name: "Aron", score: 968},
  {name: "David", score: 950},
  {name: "Henrique", score: 940},
  {name: "Samuel", score: 930},
  {name: "Eduardo", score: 910},
  {name: "Dudu", score: 850},
  {name: "American Killer", score: 840},
  {name: "God of scores", score: 810},
]

export default function Home() {
    const {isAuthenticated} = useContext(AuthContext);
  
  return (
    

    <Layout> 
      {isAuthenticated ? <> 
      
        <Container>
            You are authenticated
        </Container>
      
      </> : <>  {/* ---------------------------------------------------------------------------------*/}

      <Container>You arent authenticated</Container>
      
      </>}
      
    </Layout>
  )
}

const Container = styled.div`
    height: 100vh;
    /* display: flex;
    justify-content: center; */
    /* align-items: center; */
    /* width: 61.25rem;
    margin: auto;
    background-color: antiquewhite; */
`