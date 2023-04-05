import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import logo from '../img/logo.png';
import logo1 from '../img/letras.png'
import '../App.css';

function Menu() {
  return (
      <nav className="navbar navbar-expand-lg">
        <div>
          <Link to="/" className="navbar-brand logo-mobile">
            <img src={logo} width="70px" alt="" />
          </Link>
          <Link to="/" className="navbar-brand logo-desktop">
            <img src={logo1} width="200px" alt="" />
          </Link>
        </div>
        <button
          className="navbar-toggler btn-custom"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/habitaciones" className="nav-link">
                Habitaciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/servicios" className="nav-link">
                Sevicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ubicacion" className="nav-link">
                Ubicación
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Menu;
