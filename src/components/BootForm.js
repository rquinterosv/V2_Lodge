import React from 'react';
import { Form, Button } from 'react-bootstrap';

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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BootstrapForm;
