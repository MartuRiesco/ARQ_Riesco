/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './style.css';
import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { VscListSelection } from 'react-icons/vsc';

function Header() {
    const navRef = useRef();
    const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
};

    return (
      <header className='header'>
            <div className="header__content">
                <div className="header__content-logo">

                      <Link to="/">
                      {' '}

                          <section className="loguito">
                            <h2 className='titulo-pag-responsive'>G R</h2>
                            <h2 className="titulo-pag">G E R M Á N </h2>
                            <h2 className="titulo-pag">R I E S C O</h2>{' '}
                          </section>

                      </Link>

                </div>
                <div className="header__content-menu">
                    <nav ref={navRef}>
                      <Link to="/obras">
                        <button className="menu" onClick={showNavBar}>
                          {' '}
                          OBRAS
                        </button>
                      </Link>
                      <Link to="/servicios">
                        <button className="menu" onClick={showNavBar}>
                          SERVICIOS
                        </button>
                      </Link>
                      <Link to="/estudio">
                        <button className="menu" onClick={showNavBar}>
                          ESTUDIO
                        </button>
                      </Link>
                      <Link to="/contacto">
                        <button className="menu" onClick={showNavBar}>
                        CONTACTO
                        </button>
                      </Link>
                    
                      <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <BsXLg />
                      </button>
                    </nav>
                    <div className="cart">
                        <button className="nav-btn" onClick={showNavBar}>
                        <VscListSelection />
                        </button>
                    </div>
                </div>
            </div>
      </header>
  )
}

export default Header