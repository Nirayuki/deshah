import React from 'react'
import ContainerFooter from '../../../styles/Footer/ContainerFooter';

const Footer = () => {
  return (
    <ContainerFooter>
      <div className='content'>
          <div className='container-navigation'>
              <a href="/termos" className='text textContent'>Termos</a>
              <a href="/sobre" className='text textContent'>Sobre</a>
              <a href="/ajuda" className='text textContent'>Fale Conosco</a>
          </div>
        <div className="container-copyright">
          <div className="text copyright">© Copyright 2022 Deshah - Todos os direitos reservados</div>
        </div>
      </div>
    </ContainerFooter>
  )
}

export default Footer;