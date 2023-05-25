import { FaLinkedin , FaGithub , FaWhatsapp } from 'react-icons/fa';
import Typewriter from "typewriter-effect";


import './home.css'

export default function Home() {
  return (
    <>
      <section className="home">
        <div className='containerLine1'>
          <span className='line-1'>
          </span>

          <span className='contactHome'>
              <FaLinkedin/>
            </span>
            <span className='contactHome'>
              <FaGithub/>
            </span>
            <span className='contactHome'>
              <FaWhatsapp/>
            </span>

        
          <span className='line-2'>
          </span>
        </div>

        <div className='container'>
          <h2>Olá</h2>
          <h2>Me chamo</h2>
          <h1>Isabela</h1>
          
          <h2 className='typewriter'>
            <Typewriter
            options={{
            strings: ["Desenvolvedora FullStack"],
                        autoStart: true,
                        loop: true
                      }}/>
          </h2>
          
        </div>

        <div className='containerLine2'>
          <span className='line2'></span>
          </div>
      </section>
    </>
  )
}
