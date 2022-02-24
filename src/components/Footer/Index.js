import React from 'react'
import ContainerFooter from '../../../styles/Footer/ContainerFooter';

const Footer = () => {
  return (
    <ContainerFooter>
      <div className='content'>
        <div className="text copyright">© Copyright 2022 Deshah - Todos os direitos reservados</div>
          <div className='container-navigation'>
              <a className='text textContent'>Termos</a>
              <a className='text textContent'>Sobre</a>
              <a className='text textContent'>Fale Conosco</a>
          </div>
      </div>
    </ContainerFooter>
  )
}

export default Footer;