import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../images/pngwing 1.png'
import axios from 'axios';
function DetailsProduct() {

  axios
    .get('/detailsProduct/idProduct=')
    .then((response) => {

    })
    .catch((error) => {
      console.error(error)
    })

  return (
   <Container className='containerDetailsProduct'>
    <Row className='detailsProduct'>
      <Col>
        <img src={Logo} alt="logo" />
      </Col>
      <Col>
        <h1>Lirios del campo</h1><br />
        <h2>Descripción</h2>
        <p>Incluye maceta, 12 flores, 6 Lirios, 3 Silvestres</p><br />
        <span>Valor: 24.000$</span>
        <span>Información del vendedor</span>
        <hr />
        <span><h2>Contact:</h2> +56 9 2565-5445</span>
      </Col>
    </Row>
   </Container>
  )
}

export default DetailsProduct