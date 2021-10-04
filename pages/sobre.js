
import React, { Component } from 'react'
import Layout from '../src/components/Layout'
import { Accordion, Card, Button, Fade } from 'react-bootstrap';
import CustomColorContainer from '../src/components/CustomColorContainer';
import { getActiveElement } from 'formik';

class sobre extends Component {


    toggleItem(itemIndex){
        const itens = document.querySelectorAll(".AccordionBody");
        
        itens.forEach((element,index) => {
            if(index == itemIndex){
                console.log("Found it");
                if(element.style.display=="flex"){
                    console.log("None");
                    element.style.display="none";
                }else{
                    console.log("Show");
                    element.style.display="flex";
                }
            }else{
                element.style.display="none";
            }
        });

        //get all and then find by the parameter in for each        
    }

    render() {// sobre somos negrito etc backgroun e fundo branco


        return (


            <Layout>

                <style type="text/css">
                    {`
                        .Accordion{
                             
                        }
    
                        .AccordionHead{
                            font-weight:bold;
                            color:#000;
                            background:#97b0afnul;
                            
                        }
    
                        .AccordionBody{
                            background-color: #b0a897;
                            color: #000;
                            font-weight:500;
                            display: none;
                            animation: 0.3s ease-in;
                            animation-name: appear;
                        }
    
                        @keyframes appear{
                            from{
                                opacity:0.5;
                                margin-top:-1rem;
                            }
                            to{
                                opacity:1;
                                margin-top:0;
                            }
                        }
    
                        
                    `}
                </style>
                <div style={{ background: 'url(background.png)', backgroundPosition: 'center center', height: '100vh' }}>
                    <Accordion className='Accordion' style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', position: 'relative', top: '200px' }} flush  >

                        <Accordion.Item eventKey="0">
                            <Accordion.Header onClick={() => this.toggleItem(0)}>
                                <div className='AccordionHead'>Quem somos?</div>
                            </Accordion.Header>

                            <Accordion.Body className='AccordionBody' >
                                Somos a DESHAH, um time de desenvolvedores composto por universitarios da FAG.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header  onClick={() => this.toggleItem(1)}>
                                <div className='AccordionHead'>Qual o objetivo do nosso projeto?</div>
                            </Accordion.Header>

                            <Accordion.Body className='AccordionBody'>
                                Trazer um produto, sendo ele o jogo e site que traga felicidade ao publico
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header onClick={() => this.toggleItem(2)}>
                                <div className='AccordionHead'>Qual a previsao de lancamento do jogo?</div>
                            </Accordion.Header>

                            <Accordion.Body className='AccordionBody'>
                                Dezembro de 2022
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header  onClick={() => this.toggleItem(3)}>
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
}

export default sobre;
