import React, { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';
import { motion } from 'framer-motion';
init(process.env.REACT_APP_ID)


const ContactForm = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      const formMess = document.querySelector(".form-message");
  
      emailjs.sendForm("service_4bdqtiz", "template_hgxq536", form.current, "KH2PQNfUY8NjGIBJY")
        .then((result) => {
            console.log(result.text); 
            form.current.reset()
            formMess.innerHTML = "<p className='success'>Message Envoyé avec succes</p>";
  
            setTimeout(() => {
                formMess.innerHTML = "";
            }, 2500)
        }, (error) => {
            console.log(error.text);
            formMess.innerHTML = "<p className='error'>Une erreur c'eest produit veuillez reessayé</p>";
            
            setTimeout(() => {
                formMess.innerHTML = "";
              }, 2500)
        });
    };
  
    return (
        <div className="form-container">
            <h2>Contactez-nous</h2>
          <form ref={form} onSubmit={sendEmail} className="form-content">
              <label>Nom</label>
              <input type="text" name="name" required id='name' />
              <label>Email</label>
              <input type="email" name="email" required id='email' />
              <label>Message</label>
              <textarea name="message"  required id='mess'/>
              <input type="submit" value="Send" className='hover button'/>
          </form>
          <div className="form-message">
  
          </div>
        </div>
    );
  };

export default ContactForm;