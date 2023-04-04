import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import BookCard from '../components/BookCard';
import HeroSection from '../components/HeroSection';
import CardSection from '../components/CardSection';



function Home() {
  return (
    <><div>
      <HeroSection />
    </div>
    <div className='second-section'>
      <CardSection />
    </div></>
  );
}

export default Home;
