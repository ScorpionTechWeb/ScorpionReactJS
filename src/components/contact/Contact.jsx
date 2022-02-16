import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [message, setMessage] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('smtp_scorpiontech', 'ScorpionTechWeb', form.current, 'user_LXTIKkte1x4H0sCRMkUrt')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        setMessage(true);
      }, (error) => {
        console.log(error.text);
        e.target.reset();
        setMessageErr(true);
      });
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contactez moi.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Prénom" name="user_name" required />
          <input type="email" placeholder="Email" name="reply_to" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send</button>
          {message && <span>Merci, je répondrai au plus vite :)</span>}
          {messageErr && <span>Oups, il y a un soucis, veuillez réessayer plus tard.</span>}
        </form>
      </div>
    </div>
  );
}
