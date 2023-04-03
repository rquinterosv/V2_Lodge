import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Habitaciones from './pages/Habitaciones';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/habitaciones" element={<Habitaciones />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
