import { ImHtmlFive } from "react-icons/im";

import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiMysql } from "react-icons/si";
import { FaReact, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import Slider from "react-slick";
import "./about.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import certificate1 from '../../assets/certificate1.png'
import certificate2 from '../../assets/certificate2.png'
import certificate3 from '../../assets/certificate3.png'
import certificate4 from '../../assets/certificate4.png'
import certificate5 from '../../assets/certificate5.png'
import photo from '../../assets/photo.png'




function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    cssEase: "linear",
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots-custom">{dots}</ul>
      </div>
    ),
  };
  return (
    <>
      <section className="about">
        <motion.div className="containerAbout">
          <h1>Sobre Mim</h1>

          <div className="aboutMe">

          <motion.span className="containerPhoto"
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5, delay: 1.5 } }}>
                <img src={photo} alt="me" className="photo" />
              </motion.span>

              
            <motion.div className="presentation"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5, delay: 1 } }}>
              

              <motion.span initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5, delay: 1 } }}>Olá, me chamo <strong>Isabela Lima</strong> 👋🏼.</motion.span>


              <motion.p initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5, delay: 2 } }}>Residente em Curitiba-PR, atualmente estou dedicada ao curso de Engenharia de Software.
                Sou uma eterna entusiasta do aprendizado e uma apaixonada por tecnologia, com o objetivo de me tornar uma desenvolvedora Fullstack. <br/> Minhas <strong>habilidades técnicas </strong>incluem:
              </motion.p>
              <div className="containerSkills">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 2.5 } }}
                ><ImHtmlFive className="skillIcons" /></motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 2.8 } }}
                ><IoLogoCss3 className="skillIcons" /></motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 3.1 } }}><SiJavascript className="skillIcons" /></motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 3.4 } }}><FaReact className="skillIcons" /></motion.span>


                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 3.8 } }}><SiMysql className="skillIcons" /></motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 4.1 } }}><FaGitAlt className="skillIcons" /></motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 4.4 } }}><FaGithub className="skillIcons" /></motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 4.8 } }}><FaLinux className="skillIcons" /></motion.span>
              </div>
            </motion.div>



          </div>
        </motion.div>

        <motion.div className="certificates"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}>
          <h1>Certificados</h1>

          <div className="slide">
            <Slider {...settings}>
              <div className="containerCertificates">
                <img src={certificate1} alt="certificate1" className="certificateImg" />
              </div>
              <div className="containerCertificates">
                <img src={certificate2} alt="certificate1" className="certificateImg" />
              </div>
              <div className="containerCertificates">
                <img src={certificate3} alt="certificate1" className="certificateImg" />
              </div>
              <div className="containerCertificates">
                <img src={certificate4} alt="certificate1" className="certificateImg" />
              </div>
              <div className="containerCertificates">
                <img src={certificate5} alt="certificate1" className="certificateImg" />
              </div>

            </Slider>
            <br />
          </div>

        </motion.div>
      </section>
    </>
  )
}

export default About;


