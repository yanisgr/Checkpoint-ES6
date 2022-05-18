import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { Nav,Navbar,Form,Button,Container,Row,Col, Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
        <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
        <img src="images/fake-logo-1.png" alt="fake" width="150" height="50" />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <br/>
    <Container className="about mt-5" id="about">
      <Row>
        <h1 className="text-center">About us</h1>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <p className="text-center">
            Sit duis ut dolor sit excepteur laborum est labore eu magna pariatur
            amet quis. Lorem ad exercitation aliquip aliquip nulla sit irure sit
            amet cupidatat cupidatat eu. Aliqua pariatur ex deserunt veniam
            adipisicing velit. Culpa aute nostrud irure ut incididunt do id
            anim. Labore qui proident exercitation incididunt ex. Dolore Lorem
            cillum adipisicing dolor eu eiusmod proident sunt dolore laboris.
            Adipisicing pariatur incididunt est excepteur.
          </p>
        </Col>
      </Row>
    </Container>
    <Card >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          envoyer
        </Button>
      </Form>
      </Card>
      <br/>
      <footer className="text-center">
    
       <span> Vous etes les bienvenues</span>
    </footer>
    </div>
  );
}

export default App;
