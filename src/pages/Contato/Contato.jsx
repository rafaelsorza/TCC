import './contato.css'
import Navbar from '../../components/navbar/navbar'
import ContactForm from '../../components/contact-form/ContactForm'

function Contato() {
  return(
    <>
    <Navbar/>
    <div className='contact-area'>

      <div className='text-section'>
        <p className='contact-title'> Contate-nos</p>
        <p className='paragrafo'> Valorizamos sua comunicação e faremos o possível para responder a sua mensagem em alguns dias. Agradecemos sua paciência e interesse e estamos ansiosos para ajudá-lo da melhor maneira possível.</p>

        <p className='paragrafo1'> Faremos o possível para retornar sua ligação em alguns dias. Agradecemos pela sua compreensão e interesse, aguardamos ansiosamente para conversar e ajudar no que for necessário.</p>
        <p className='number'> +55 (11) 99999-9999</p>
      </div>

      <div className='form-section'>
       <ContactForm/>
        
      </div>
    </div>
    
    
    
    </>
  )
}

export default Contato
