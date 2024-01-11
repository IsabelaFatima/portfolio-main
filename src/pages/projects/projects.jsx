import './projects.css'
import imgProject1 from '../../assets/project1.png'
import imgProject2 from '../../assets/project2.png'
import imgProject3 from '../../assets/project3.png'
import imgProject4 from '../../assets/project4.png'
import { GiPadlock } from 'react-icons/gi';
import {motion} from "framer-motion";

function Projects() {
  return (
    <section className='projects'>

      <motion.div className='containerProject'
        initial={{ opacity: 0 , x: -200}}
         whileInView={{ opacity: 1 , x: 0 , transition:{duration: 1.5}}}
      >
        <h2>SystemRegistration</h2>
        <div className='containerImgProject'>
          <img src={imgProject1} className='imgProject' alt='systemRegistration' />
        </div>
        <p>Sistema de cadastro feito com Html, Css, Javascript Vanilla e LocalStorage.</p>
        <div className='containerButtonsProject'>
          <button className='buttonDemo'><a className='links' href="https://isabelafatima.github.io/RegistrationSystem/" target="_blank" rel="noreferrer">Demo</a></button>
          <button className='buttonRepository'><a className='links' href="https://github.com/IsabelaFatima/RegistrationSystem" target="_blank" rel="noreferrer">Repositório</a></button>
        </div>
      </motion.div>




      <motion.div className='containerProject'
      initial={{ opacity: 0 , x: 200}}
      whileInView={{ opacity: 1 , x: 0 , transition:{duration: 1.5}}}
      >
        <h2>PetWebsite</h2>
        <div className='containerImgProject'>
          <img src={imgProject2} className='imgProject' alt='systemRegistration' />
        </div>
        <p>Website responsivo feito com Html, Css e Bulma.</p>
        <div className='containerButtonsProject'>
          <button className='buttonDemo'><a className='links' href="https://isabelafatima.github.io/Pet-Website" target="_blank" rel="noreferrer">Demo</a></button>
          <button className='buttonRepository'><a className='links' href="https://github.com/IsabelaFatima/Pet-Website" target="_blank" rel="noreferrer">Repositório</a></button>
        </div>
      </motion.div>

      <motion.div className='containerProject'
      initial={{ opacity: 0 , x: -200}}
      whileInView={{ opacity: 1 , x: 0 , transition:{duration: 1.5}}}
      >
        <h2>Spotify Interface</h2>
        <div className='containerImgProject'>
          <img src={imgProject3} className='imgProject' alt='systemRegistration' />
        </div>
        <p>Clone da Interface do Spotify, feito com ReactJs, e Tailwind.</p>
        <div className='containerButtonsProject'>
        <button className='buttonRepository'><a className='links' href="https://github.com/IsabelaFatima/interface_spotify_with_tailwind/tree/main" target="_blank" rel="noreferrer">Repositório</a></button>
        </div>
      </motion.div>

      <motion.div className='containerProject'
      initial={{ opacity: 0 , x: 200}}
      whileInView={{ opacity: 1 , x: 0 , transition:{duration: 1.5}}}
      >
        <h2>Spotify Interface</h2>
        <div className='containerImgProject'>
          <img src={imgProject4} className='imgProject' alt='systemRegistration' />
        </div>
        <p>Clone da Interface do Spotify, feito com ReactJs, e Tailwind.</p>
        <div className='containerButtonsProject'>
        <button className='buttonRepository'><a className='links' href="https://github.com/IsabelaFatima/Landing-Page-Reservas-de-Quarto" target="_blank" rel="noreferrer">Repositório</a></button>
        </div>
      </motion.div>

      <motion.div className='containerProject'
      initial={{ opacity: 0 , x: -200}}
      whileInView={{ opacity: 1 , x: 0 , transition:{duration: 1.5}}}
      >
        <h2>Em Breve</h2>
        <div className='containerImgProjectCO'>
          <GiPadlock className='padlock' />
        </div>
        <p></p>
        <div className='containerButtonsProject'>
          <button className='buttonDemoCO'><GiPadlock /></button>
          <button className='buttonRepositoryCO'><GiPadlock /></button>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects;
