import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Favoritos() {
  return (
    <Container>
      <Row>
        <Col className='market'>
          <span className='spanStyle'>Favoritos</span>
        </Col>
      </Row>

      <Row className='containerProductosContente'>
    
        <Col className='containerProductos'>
          <Col className='product'>
            <div className='imgProducto'>
            </div>
            <Button variant='danger'>Quitar favorito</Button>
          </Col>
          <Col className='product'>
            <div className='imgProducto'></div>
            <Button variant='danger'>Quitar favorito</Button>
          </Col>
          <Col className='product'>
            <div className='imgProducto'></div>
            <Button variant='danger'>Quitar favorito</Button>
          </Col>
          <Col className='product'>
            <div className='imgProducto'>
            </div>
            <Button variant='danger'>Quitar favorito</Button>
          </Col>
          <Col className='product'>
            <div className='imgProducto'></div>
            <Button variant='danger'>Quitar favorito</Button>
          </Col>
          <Col className='product'>
            <div className='imgProducto'></div>
            <Button variant='danger'>Quitar favorito</Button>
          </Col>
          <Col className='product'>
            <div className='imgProducto'></div>
            <Button variant='danger'>Quitar favorito</Button>
          </Col>
          <Col className='product'>
            <div className='imgProducto'></div>
            <Button variant='danger'>Quitar favorito</Button>
          </Col>
        </Col>
        

      </Row>

    </Container>
  )
}

export default Favoritos