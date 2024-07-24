// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {

React.useEffect(() => {
    function SwitchContent() {
      const content = document.getElementById('content');
      const loginBtn = document.getElementById('login');
  
     
      loginBtn.addEventListener('click', () => {
        content.classList.remove("active")
      });
    }
    SwitchContent();
  }, []);

const navigate = useNavigate();
const [values, setValues] = useState({
    email: '',
    password: ''
})

 function login(event) {
    event.preventDefault();
    axios.post("http://localhost:8081/login",values)
      .then(res => {
        if(res.data.Status === "Success"){
        navigate("/homework");
        } else{
            alert(res.data.Error)
        }
      }).catch(err => console.log(err));
  }

return(
<div className="login-area" id="content">
      <form onSubmit={login}>
        <div className="header-text">
          <h1>Login</h1>
        </div> 

        <div className="input-group">
          <input type='email' placeholder='email' className='form-control' onChange={e => setValues({...values,email:e.target.value})} />
        </div>

        <div className="input-group">
          <input type='password' placeholder='password' className='form-control' onChange={e => setValues({...values,password:e.target.value})}/>
        </div>

        <div className='input-button'>
          <button className='btn-login' id='login'>Login</button>
        </div>
      </form>
    </div>
)

}

export default Login;