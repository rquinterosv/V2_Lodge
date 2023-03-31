import React from 'react';
import '../App.css';

function HeroSection() {
  return (
    <section className='HeroSection'>
      <div className="jumbotron">
        <h1 className="display-4">Bienvenidos</h1>
        <h3>Lodge las Cascadas</h3>
        <button class="btn btn-lg custom-btn" type="button">Reservas</button>
      </div>
    </section>
  );
}

export default HeroSection;