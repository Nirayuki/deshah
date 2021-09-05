
import React from 'react'
import Layout from '../src/components/Layout'
import { Accordion, Card, Button } from 'react-bootstrap';
import CustomColorContainer from '../src/components/CustomColorContainer';

export default function Sobre() {// sobre somos negrito etc backgroun e fundo branco
    return (

         <Layout>
             <div style={{background:'url(background.png)',backgroundPosition:'center center',height:'100vh'}}>
                <Accordion style={{width:'50%', marginLeft:'auto', marginRight:'auto', position:'relative', top:'200px'}} flush >

                    <Accordion.Item  eventKey="0">
                        <Accordion.Header as='h1'>Quem somos?</Accordion.Header>

                        <Accordion.Body style={{background:'#99e6ff'}}>
                            Somos a DESHAH, um time de desenvolvedores composto por universitarios da FAG.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Qual o objetivo do nosso projeto?</Accordion.Header>

                        <Accordion.Body style={{background:'#99e6ff'}}>
                            Trazer um produto, sendo ele o jogo e site que traga felicidade ao publico
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Qual a previsao de lancamento do jogo?</Accordion.Header>

                        <Accordion.Body style={{background:'#99e6ff'}}>
                            Dezembro de 2022
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Quais os integrantes da equipe?</Accordion.Header>

                        <Accordion.Body style={{background:'#99e6ff'}}>
                            Samuel, Hugo, Henrique, Aron, Eduardo, David
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Layout>



    )
}