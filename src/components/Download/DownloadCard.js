import React from 'react';
import { Download, Card, Button } from '../../../styles/Download/Donwload';


export default function DownloadCard(){
    return(
        <Download>
            <span>
                Jogo completo
            </span>
            <Card img="img/bg.jpg">
                <Button>
                    Comprar
                </Button>
            </Card>
        </Download>
    )
}