import React from "react";
import imgProfile from '../../images/perfil-cv-2.jpg';
import './header.css';

const Header = () =>
{
  return (
    <header className="header__wrapper">
      <div className="header__content-wrapper">
        <div className='header__text-wrapper'>
          <h1 className='header__h1'>Hi!</h1>
          <h2 className='header__h2'>I'm</h2>
          <h3 className='header__h3'>Marco</h3>
          <h4 className="header__text-developer">Frontend Developer</h4>
        </div>
        <div className="header__img-wrapper">
          <img src={imgProfile} alt="Img Perfil Marco" />
        </div>
      </div>
    </header>
  )
}

export { Header };