import React from 'react';
import {ContainerDownload, BgSection, MainSection} from '../../../styles/Download/ContainerDownload';
import DownloadCard from './DownloadCard';


export default function Download(){
    return(
        <ContainerDownload>
            <BgSection img='img/download.jpg'>
                <button>Baixar Demo</button>
            </BgSection>
            <MainSection>
                <DownloadCard/>
            </MainSection>
        </ContainerDownload>
        
    )
} 