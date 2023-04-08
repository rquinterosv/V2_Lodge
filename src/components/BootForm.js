import React from 'react';
import { Card, Form, Button, Dropdown, InputGroup } from 'react-bootstrap';
import BookCard from './BookCard';

function BootstrapForm() {
  return (
    <Form>
      <Form.Group className='d-flex'>
        <div>
         <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="First Name"/>
        </div>
        <div>
         <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </div>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="checkIn">
        <Form.Label>Check-in date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group controlId="checkOut">
        <Form.Label>Check-out date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group controlId="checkOut">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
            Select a Room
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Single Room</Dropdown.Item>
            <Dropdown.Item>Double Room</Dropdown.Item>
            <Dropdown.Item>Deluxe Room</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BootstrapForm;
