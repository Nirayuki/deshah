
import React from 'react'
import Layout from '../src/components/Layout'
import Card from 'react-bootstrap/Card'

export default function Sobre(){// sobre somos negrito etc backgroun e fundo branco
    return(
        <Layout>
            <Card  className="text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="background.png"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Layout>
        
    )
}