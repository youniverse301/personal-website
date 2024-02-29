import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };
    return (
      <form className='contactForm' onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='Name'/>
        <input type="email" name="user_email" placeholder='Email'/>
        <textarea name="message" placeholder='Message'/>
        <button className='fill' type="submit" value="Send" disabled={isSubmitting}>Submit</button>
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    );
};

export default ContactForm;