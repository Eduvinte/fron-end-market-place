import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import picture from '../images/pngwing 1.png'
import axios from 'axios';
function ProfileUser() {

    axios
      .get('/profile/idUser=')
      .then((response) => {
        
      })
      .catch((error) => {
        console.error(error)
      })

  return (
    <Container>
      <Row>
        <Col className='market'>
          <span className='spanStyle'>Mi Perfil</span>
        </Col>
      </Row>

      <Row className='containerProductosContente'>
        <Col className='market'>
          <span className='spanStyle'>Mis publicaciones</span>
        </Col>
      </Row>

      <Col>
        <Button variant='warning'>Publicar producto</Button>
        <div className='myProducts'>
          <img src={picture} width={120} alt="flores" />
          <Button variant='primary'>Ver Producto</Button>
          <Button variant='warning'>Editar Producto</Button>
          <Button variant='danger'>Deletar producto</Button>
        </div>
        <div className='myProducts'>
          <img src={picture} width={120} alt="flores" />
          <Button variant='primary'>Ver Producto</Button>
          <Button variant='warning'>Editar Producto</Button>
          <Button variant='danger'>Deletar producto</Button>
        </div>
      </Col>

    </Container>
  )
}

export default ProfileUser