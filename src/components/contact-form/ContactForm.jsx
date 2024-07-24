// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulando o envio do formulário (aqui você pode adicionar lógica real de envio)
    console.log('Form Data:', formData);
    setSubmitted(true);
    // Limpar os campos do formulário após o envio
    setFormData({
      name: '',
      email: '',
      subject: ''
    });
  };

  return (
    <div className="contact-form-container">
     
      {submitted ? (
        <div className="success-message">
          <p>Comentário enviado! Agradecemos a opinião.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Assunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func
};

export default ContactForm;
