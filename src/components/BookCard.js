import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function BookCard () {
  return (
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
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select a Room
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Single Room</a>
                <a className="dropdown-item" href="#">Double Room</a>
                <a className="dropdown-item" href="#">Deluxe Room</a>
            </div>
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
        </div>
    </div>
  );
}

export default BookCard;