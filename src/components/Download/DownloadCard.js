import React from 'react';
import { Download,TextSection , Card, Button, Demo, Main, CardDemo } from '../../../styles/Download/Donwload';


export default function DownloadCard(){
    return(
        <Download>
            <Demo>
                <div className='desc-content'>
                        Jogo completo
                </div>
                <Card img="img/bg2.png">
                    <div className='button-content'>
                        <Button>
                            Comprar
                        </Button>
                    </div>
                </Card>
            </Demo>
            <Main>
                <div className='desc-content'>
                    Demo
                </div>
                 <CardDemo img="img/bg1.png">
                    <div className='button-content'>
                        <Button>
                            Baixar
                        </Button>
                    </div>
                </CardDemo>
            </Main>    
        </Download>
    )
}