import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import HeroSection from './HeroSection';



function LandingPage() {
  return (
    <div className="bg-gray-100 h-screen">
        <Navbar />
        <HeroSection />

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Welcome to My Hotel</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ipsum vel ullamcorper hendrerit, lacus sapien iaculis velit, ut consectetur nisi erat sed libero.</p>
          </div>
          <div className="col-md-4">
            <BookCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
