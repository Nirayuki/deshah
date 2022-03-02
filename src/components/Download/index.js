import React from 'react';
import {ContainerDownload, BgSection, MainSection, TextSection} from '../../../styles/Download/ContainerDownload';
import DownloadCard from './DownloadCard';


export default function Download(){
    return(
        <ContainerDownload> 
            <TextSection>
                <span className='text-first'>
                    Planos e Preços
                </span>
                <span className='text-second'>
                    Na Deshah nos temos um teste Demo e também o jogo pago aonde temos o melhor preço do mercado
                </span>
            </TextSection>
            <div className='laser'/>
            <MainSection>
                <DownloadCard/>
            </MainSection>
        </ContainerDownload>
        
    )
} 