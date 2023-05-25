import "./contact.css"
import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { BsFillEnvelopeOpenHeartFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Contact() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(false);
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yl448lo', 'template_llrtx0f', form.current, 'UzpZwd2hzdHtMCufe')
      .then((result) => {
        setVisible(true); 
        console.log("funcionou")
      }, (error) => {
        alert(error.message)
      });
    e.target.reset();

  }
  
  

  ;
  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="form">

        <div className="containerIconAni">
          <BsFillEnvelopeHeartFill className="envelopeIcon" />
          <h2>Entre em Contato</h2>
        </div>

        <label for="name">Nome:</label>
        <input type="text" name="name" placeholder="Digite seu nome..." required/>

        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="Digite seu email..." required/>

        <label for="message">Mensagem:</label>
        <textarea name="message" placeholder="Digite sua Mensagem..." required/>


        <div className="socials">
          <div className="containerSocials">
            <span data-text="Visite meu perfil no Github" className="tooltip"><a href="https://www.linkedin.com/in/isabela-fatima-4353601b2/" target="_blanck"><FaLinkedin /></a></span>
            <span data-text="Entre em contato pelo WhatsApp" className="tooltip"><a href="https://github.com/IsabelaFatima" target="_blanck"><FaGithub /></a></span>
            <span data-text="Visite meu perfil no Linkedin" className="tooltip"> <a href="https://wa.me/+5541995280760/" target="_blanck"><RiWhatsappFill /></a></span>
          </div>
          <div className="containerSubmit">
            <input type="submit" value="Enviar" id="inputSend" />
          </div>
        </div>
      </form>
      {visible && (
        <div className="containerSendMessage">
        <button className="containerclose" onClick={handleClick}>
          <AiOutlineCloseCircle className="closeIconSendMessage" />
        </button>

        <span className="containerTFMessage">
          <motion.div
            animate={{
              rotate: [0, 15, 0, -15, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
            }}
          >
            <BsFillEnvelopeOpenHeartFill className="openedEnvelope" />
          </motion.div>
          Obrigada pela mensagem!!, responderei em breve.</span>

      </div>
      )}
      
    </div>
  )
}

export default Contact;
