import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillHeartFill } from "react-icons/bs";
import axios from 'axios';

function Home() {

  axios
    .get('/productos')
    .then((response) => {

    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
      <Container fluid className='banner'>
        <Container>
          <Row>
            <Col className='textBanner'>
              <h1>Somos la tienda con los precios</h1>
              <p>Más bajos del mercado</p>
              <span>Publicado tu producto</span>
            </Col>
            <Col>

            </Col>
          </Row>
        </Container>
      </Container>

      <div className='titleContent'>
        <h2>Más vendidos</h2>
        <Container className='containerFloresHome'>
          <Row>
            <Col className='container1'>
              <div className='fotoFloresHome'></div>
              <BsFillHeartFill style={{ fontSize: '24px', marginBottom: '25px'}}/> 
              <h3>Tulipanes Rosas</h3>
              <p>Descripción corta sobre esta flor o planta</p>
            </Col>
            <Col className='container1'>
              <div className='fotoFloresHome'></div>
              <BsFillHeartFill style={{ fontSize: '24px', marginBottom: '25px'}}/> 
              <h3>Tulipanes Rosas</h3>
              <p>Descripción corta sobre esta flor o planta</p>
            </Col>
            <Col className='container1'>
              <div className='fotoFloresHome'></div>
              <BsFillHeartFill style={{ fontSize: '24px', marginBottom: '25px'}}/> 
              <h3>Tulipanes Rosas</h3>
              <p>Descripción corta sobre esta flor o planta</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>



  )
}

export default Home