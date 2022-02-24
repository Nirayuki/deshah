import React from 'react'
import ContainerFooter from '../../../styles/Footer/ContainerFooter';

const Footer = () => {
  return (
    <ContainerFooter>
        <div className="text copyright">© Copyright 2022 Deshah - Todos os direitos reservados</div>
        <div className='container-navigation'>
            <div className='text content'>Termos</div>
            <div className='text content'>Sobre</div>
            <div className='text content'>Fale Conosco</div>
        </div>
    </ContainerFooter>
  )
}

export default Footer;