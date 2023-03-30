import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">My Hotel</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Rooms</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;