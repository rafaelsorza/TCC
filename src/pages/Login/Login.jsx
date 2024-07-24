
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import './login.css';

function Login() {
  const [input, setInput] = useState({
    identifier: '', // Pode ser email, usuário ou telefone
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  
  return (
    <div className='mae'> 
    <div className='container'> </div>
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input
          type="text"
          name="identifier"
          placeholder="Email, Usuário ou Telefone"
          value={input.identifier}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={input.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button">Avançar</button>
      </form>
    </div></div>
  );
}

export default Login; 