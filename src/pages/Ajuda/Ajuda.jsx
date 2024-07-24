import './ajuda.css';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/navbar'

function Ajuda() {
 const [show, setShow] = useState(false);
  
  return (
<>
    <div className='ajuda-area'>
      <div className='class-title'>
    <p className='title-ajuda'> Como podemos ajudar?</p> </div>

    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setShow(!show)}> Eu gostaria de... <FaCaretDown/> </button>
      <div className={`dropdown-content ${show ? 'show' : ''}`}>
        <a className="dropdown-item">Cadastrar um novo alimento.</a>
        <a className="dropdown-item">Acessar meus dados.</a>
        <a className="dropdown-item">Acessar os artigos de ajuda.</a>
        <a className="dropdown-item">Acessar minhas estatísticas.</a>
        <a className="dropdown-item" >Analisar cálculo de metabolismo e calorias.</a>
      </div>
    </div>
     


 
    </div>
    <Navbar/>
    <Footer isFixed={true}/>
    
    </>
   
  )
}

export default Ajuda
