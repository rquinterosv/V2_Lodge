import React from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import inst2 from '../img/inst2.jpg'

function CardSection() {
  return (
    <Container className='container-custom'>
      <Row className='row-custom'>

        <Col className='col-custom' md={4}>
          <Card className='card-custom'>
            <Card.Body>
              <Card.Title>Instalaciones</Card.Title>
            </Card.Body>
            <Carousel>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={inst2}
                  alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={inst2}
                  alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={inst2}
                  alt="Third slide"
                  />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Text>
                This is an example card with some placeholder text. You can add your own content here.
              </Card.Text>
              <Button variant="primary">Button 2</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className='col-custom' md={4}>
          <Card className='card-custom'>
            <Card.Body>
              <Card.Title>Restaurant</Card.Title>
            </Card.Body>
            <Carousel>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={inst2}
                  alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={inst2}
                  alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={inst2}
                  alt="Third slide"
                  />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Text>
                This is an example card with some placeholder text. You can add your own content here.
              </Card.Text>
              <Button variant="primary">Button 2</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col  className='col-custom' md={4}>
          <Card className='card-custom'>
            <Card.Body>
              <Card.Title>Entorno Natural</Card.Title>
            </Card.Body>
            <Carousel>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={inst2}
                  alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={inst2}
                  alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={inst2}
                  alt="Third slide"
                  />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Text>
                This is an example card with some placeholder text. You can add your own content here.
              </Card.Text>
              <Button variant="primary">Button 2</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardSection;
