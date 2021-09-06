
import React from 'react'
import Layout from '../src/components/Layout'
import { Accordion, Card, Button } from 'react-bootstrap';
import CustomColorContainer from '../src/components/CustomColorContainer';

export default function Sobre() {// sobre somos negrito etc backgroun e fundo branco
    return (

        <Layout>

            <style type="text/css">
                {`
                
                    .AccordionHead{
                        font-weight:bold;
                        color:#000;
                        background:#97b0af;
                        
                    }

                    .AccordionBody{
                        background-color: #b0a897;
                        color: #000;
                        font-weight:500;
                    }

                    
                `}
            </style>
            <div style={{ background: 'url(background.png)', backgroundPosition: 'center center', height: '100vh' }}>
                <Accordion style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', position: 'relative', top: '200px'  }} flush  >

                    <Accordion.Item eventKey="0" >
                        <Accordion.Header>
                            <div className='AccordionHead'>Quem somos?</div>
                        </Accordion.Header>

                        <Accordion.Body className='AccordionBody'>
                            Somos a DESHAH, um time de desenvolvedores composto por universitarios da FAG.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className='AccordionHead'>Qual o objetivo do nosso projeto?</div>
                        </Accordion.Header>

                        <Accordion.Body className='AccordionBody'>
                            Trazer um produto, sendo ele o jogo e site que traga felicidade ao publico
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className='AccordionHead'>Qual a previsao de lancamento do jogo?</div>
                        </Accordion.Header>

                        <Accordion.Body className='AccordionBody'>
                            Dezembro de 2022
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <div className='AccordionHead'>Quais os integrantes da equipe?</div>
                        </Accordion.Header>

                        <Accordion.Body className='AccordionBody'>
                            Samuel, Hugo, Henrique, Aron, Eduardo, David
                        </Accordion.Body>
                    </Accordion.Item>

                    
                </Accordion>
            </div>
        </Layout>



    )
}