// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

function Footer({ isFixed }) {
  return (
    <div className={`footer_area ${isFixed ? 'fixed' : ''}`}>
      <div className='links-section'>
        <p className='titulo'>SOBRE</p>
        <ul className='list-unstyled'>
          <li>
            <a href='#!' className='text-white'>
Brasil, São Paulo, SP            </a>
          </li>
          <li>
            <a href='#!' className='text-white'>
              Quem Somos
            </a>
          </li>
          <li>
            <a href='#!' className='text-white'>
              Política de Privacidade
            </a>
          </li>
          <li>
            <a href='#!' className='text-white'>
           Artigos
            </a>
          </li>
        </ul>
      </div>
     
      <div className='links-section-2'>
        <p className='titulo'>CONTATO</p>
        <ul className='list-unstyled'>
          <li>
            <a href='#!' className='text-white'>
              vitalityvisionn@gmail.com
            </a>
          </li>
          <li>
            <a href='#!' className='text-white'>
              +55 (11) 99999-9999
            </a>
          </li>
          <li>
            <a href='#!' className='text-white'>
              Fale Conosco
            </a>
          </li>
          <li>
            <a href='#!' className='text-white'>
       Ajuda
            </a>
          </li>
        </ul>
      </div>


    </div>
  );
}

Footer.propTypes = {
  isFixed: PropTypes.bool
};

export default Footer;
