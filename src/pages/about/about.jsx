import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiMysql } from "react-icons/si";
import { FaReact, FaNode, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import Slider from "react-slick";
import "./about.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from "framer-motion";
// initial={{ opacity: 0 , x: -200}}
// whileInView={{ opacity: 1 , x: 0 , transition:{duration: 1.5}}}

import certificate1 from '../../assets/certificate1.png'
import certificate2 from '../../assets/certificate2.png'
import certificate3 from '../../assets/certificate3.png'
import certificate4 from '../../assets/certificate4.png'
import certificate5 from '../../assets/certificate5.png'
import photo from '../../assets/photo.png'

function CustomPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
}

function CustomNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots-custom">{dots}</ul>
      </div>
    ),
  };
  return (
    <>
      <section className="about">
        <motion.div className="containerAbout"
        initial={{ opacity: 0 , y: -200}}
        whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1.5}}}
        >
          <h1>Sobre Mim</h1>
          <div className="aboutMe">
            <motion.div className="presentation"
            initial={{ opacity: 0 , x: -200}}
            whileInView={{ opacity: 1 , x: 0 , transition:{duration: 1.5, delay: 1}}}>
              <p>Olá, meu nome é <strong>Isabela Fatima</strong>. Moro em        Curitiba-PR, atualmente estou cursado Análise e   Desenvolvimento de Sistemas.
                Eterna estudante, e apaixonada por tecnologia, pretendo me profissionalizar como desenvolvedora Fullstack. Minhas <strong>skills</strong> são:
              </p>
              <div className="containerSkills">
                <motion.span
                initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1 , delay: 0.5}}}
                ><ImHtmlFive className="skillIcons" /></motion.span>

                <motion.span
                initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1 , delay: 1.5}}}
                ><IoLogoCss3 className="skillIcons" /></motion.span>

                <motion.span
                initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1 , delay: 1.8}}}><SiJavascript className="skillIcons" /></motion.span>

                <motion.span
                initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1 , delay: 2.1}}}><FaReact className="skillIcons" /></motion.span>

                <motion.span
                initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1 , delay: 2.4}}}><FaNode className="skillIcons" /></motion.span>

                <motion.span
                initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1 , delay: 2.7}}}><SiMysql className="skillIcons" /></motion.span>

                <motion.span
                initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1 , delay: 3}}}><FaGitAlt className="skillIcons" /></motion.span>

                <motion.span
                initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1 , delay: 3.3}}}><FaGithub className="skillIcons" /></motion.span>

                <motion.span
                initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1 , y: 0 , transition:{duration: 1 , delay: 3.6}}}><FaLinux className="skillIcons" /></motion.span>
              </div>
            </motion.div>




            <motion.span className="containerPhoto"
            initial={{ opacity: 0 , x: 200}}
            whileInView={{ opacity: 1 , x: 0 , transition:{duration: 1.5, delay: 1.5}}}>
              <img src={photo} alt="me" className="photo" />
            </motion.span>
          </div>
        </motion.div>

        <motion.div className="certificates"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 , transition:{duration: 1}}}>
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


