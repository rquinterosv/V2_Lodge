import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
  return (
    <div className="bg-gray-100 h-screen">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My Hotel</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Welcome to My Hotel</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ipsum vel ullamcorper hendrerit, lacus sapien iaculis velit, ut consectetur nisi erat sed libero.</p>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Book Now</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="checkIn">Check-in date</label>
                    <input type="date" className="form-control" id="checkIn" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="checkOut">Check-out date</label>
                    <input type="date" className="form-control" id="checkOut" />
                  </div>
                  <button type="submit" className="btn btn-primary">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
