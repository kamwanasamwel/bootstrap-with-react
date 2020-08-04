import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { PizzaCard } from './Components/PizzaCards';
import { Confirmation } from './Components/Confirmation';
import pizzas from './data';

function App() {
  const [ordered, setOrdered] = useState(false);

  function displayCofirmation(){
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  }
  return (
    <div>
      <Container>
        {ordered && <Confirmation toggle={setOrdered} />}
        <Row>
          {pizzas.map(data => (
            <Col xs={3} className="mb-5" key={'${data.id}'}>
              <PizzaCard data={data} setOrdered={displayCofirmation}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
