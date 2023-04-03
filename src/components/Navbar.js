import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../img/logo.png'
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between p-2">
        <div>
          <a className="navbar-brand" href="#">
            <img src={logo} width="70px" alt=""></img>
          </a>
        </div>
        <button className="navbar-toggler btn-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item active">
              <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Habitaciones</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Sevicios</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Ubicación</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
              </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
