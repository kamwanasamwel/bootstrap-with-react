import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { PizzaCard } from './Components/PizzaCards';
import { Confirmation } from './Components/Confirmation';
import pizzas from './data';

function App() {
  return (
    <div>
      <>
      <Confirmation />
      <Container>
        <Row>
          <p>Hello there</p>
        </Row>
      </Container>
      </>
    </div>
  );
}

export default App;
