import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillHeartFill } from "react-icons/bs";
import { ButtonFavorit } from '../components/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    axios
    .get('https://back-end-market-place-production.up.railway.app/showProducts')
    .then((response) => {
      setProducts(response.data)
    })
    
    .catch((error) => {
      console.log(error)
    })
  }, [])


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
            {
              products.map((products_home) => (
                <Col className='container1' key={products_home.id} xs={6} sm={6} md={3}>
                <img src={`https://back-end-market-place-production.up.railway.app/${products_home.photo}`} alt={products_home.name} width={140} height={200}  />
                <ButtonFavorit product={products_home} />
                <h3>{products_home.name}</h3>
                <p>{products_home.description}</p>
                <Link to={`/details/${products_home.id}`} className='addProductBtn'>Ver producto</Link>
              </Col>
            ))
            }
          
          </Row>
        </Container>
      </div>
    </>



  )
}

export default Home