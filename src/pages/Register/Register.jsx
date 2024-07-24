// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './Register.css';


function Register() { 
  // Mova a função SwitchContent para dentro do useEffect para garantir que ela seja chamada após a renderização
  React.useEffect(() => {
    function SwitchContent() {
      const content = document.getElementById('content');
      const registerBtn = document.getElementById('register');
     
  
      registerBtn.addEventListener('click', () => {
        content.classList.add("active")
      });
     
    }
    SwitchContent();
  }, []);

  const [username, setUsername] = useState(""); // Inicialize com strings vazias
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    axios.post("http://localhost:8081/register", { username, email, password })
      // eslint-disable-next-line no-unused-vars
      .then(res => {
        navigate("/homework");
      }).catch(err => console.log(err));
  }

  return (
    <div className="login-area" id="content">
      <form onSubmit={register}>
        <div className="header-text">
          <h1>Criar conta</h1>
        </div> 

        <div className="input-group">
          <input type='text' placeholder='name' className='form-control' onChange={e => setUsername(e.target.value)} />
        </div>

        <div className="input-group">
          <input type='email' placeholder='email' className='form-control' onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="input-group">
          <input type='password' placeholder='password' className='form-control' onChange={e => setPassword(e.target.value)} />
        </div>

        <div className='input-button'>
          <button className='btn-register' id='register'>Register</button>

          
        </div>
         <Link to="/login" className="start-Link">
              Ja tenho uma conta.
            </Link>
      </form>

      
   </div>

  );
}

export default Register;
