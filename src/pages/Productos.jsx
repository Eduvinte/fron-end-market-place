import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BsFillHeartFill } from "react-icons/bs";
function Productos() {

  axios
    .get('/productosFilter/?cat=/?price=')
    .then((response) => {

    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <Container>
      <Row>
        <Col className='market'>
          <span className='spanStyle'>Tienda</span>
        </Col>
      </Row>

      <Row className='containerProductosContente'>
        <Col className='categorias' lg='3'>
          <span>Filtrar</span>
          <span className='categoriaFiFilter'>Categoria</span>
          <select>
            <option>Tulipanes</option>
            <option>Rosas</option>
          </select>
          <span className='priceFilter'>Price</span>
          <select>
            <option>20.000$ - 40.000$</option>
            <option>40.000$ - 60.000$</option>
          </select>
        </Col>

        <Col className='containerProductos'>

          <Col className='product'>
            <div className='imgProducto'>
            </div>
            <BsFillHeartFill style={{ fontSize: '24px', marginBottom: '25px' }} />
            <Button variant='warning'>Ver producto</Button>
          </Col>
          <Col className='product'>
            <div className='imgProducto'></div>
            <BsFillHeartFill style={{ fontSize: '24px', marginBottom: '25px' }} />
            <Button variant='warning'>Ver producto</Button>
          </Col>
          <Col className='product'>
            <div className='imgProducto'></div>
            <BsFillHeartFill style={{ fontSize: '24px', marginBottom: '25px' }} />
            <Button variant='warning'>Ver producto</Button>
          </Col>
        </Col>

      </Row>

    </Container>
  )
}

export default Productos