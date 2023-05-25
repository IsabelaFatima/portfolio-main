import './nav.css';
import { useRef } from "react";
import { AiOutlineMenu , AiOutlineCloseCircle } from 'react-icons/ai';


function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };
  return (
    <>
      <div className='navbar'>
        <header className='containerNav'>
          <nav className='nav' ref={navRef}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <AiOutlineCloseCircle />
            </button>
          </nav>
          <button
            className="nav-btn"
            onClick={showNavbar}>
            <AiOutlineMenu/>
          </button>
        </header>
      </div>
    </>
  )
}

export default Nav;
