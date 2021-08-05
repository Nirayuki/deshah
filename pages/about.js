import React from 'react';
import Layout from '../src/components/Layout';
import {Card, Button} from 'react-bootstrap';


export default function About() {
    return (
        <Layout>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Layout>

    );
}