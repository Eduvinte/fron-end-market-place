import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../images/pngwing 1.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function DetailsProduct() {

  const { product_id } = useParams()
  const [product, setProduct] = useState([])

  axios
    .get(`https://back-end-market-place-production.up.railway.app/${product_id}`)
    .then((response) => {
      setProduct(response.data)
    })
    .catch((error) => {
      console.error(error)
    })

  return (
    <Container className='containerDetailsProduct'>
      <Row className='detailsProduct'>
        {
          product.map((product) => (
            <>
              <Col key={product.id}>
                <img src={`https://back-end-market-place-production.up.railway.app/${product.photo}`} alt="logo" />
              </Col>
              <Col>
                <h1>{product.name}</h1><br />
              
                <h2>Descripción</h2>
                <p>{product.description}</p>
                
                <span>Valor:</span>
                <h2>${product.price}</h2>
                <h6>Información del vendedor:</h6>
                
                <span><h2>Contact:</h2>{product.phone}</span>
              </Col>
            </>
          ))
        }

      </Row>
    </Container>
  )
}

export default DetailsProduct