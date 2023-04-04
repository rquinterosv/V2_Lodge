import React from 'react';
import '../App.css';
import { Link, NavLink, Route } from 'react-router-dom';
import logo from '../img/logo.png';
import logo1 from '../img/letras.png'


function HeroSection() {
  return (
    <section className='HeroSection'>
      <div className="jumbotron">
        <h1 className="display-4" style={{ color: '#047c94' }}>Bienvenidos</h1>
        <Link to="/" className="navbar-brand logo-desktop">
          <img src={logo1} width="35%" alt="" />
        </Link>
        <button className="btn btn-lg custom-btn" type="button">Reservas</button>
      </div>
    </section>
  );
}

export default HeroSection;
