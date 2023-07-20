import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { ButtonComponent } from '../components/Button';
import { InputEmail } from '../components/Input';
import axios from 'axios';
function EditProduct() {

    axios 
      .put('/edit/product/idProduct=')
      .then((response) => {

      })
      .catch((error) => {
        console.error(error)
      })

  return (
    <>
    <Row>
    <Col className='market'>
      <span className='spanStyle'>Editar Producto</span>
    </Col>
  </Row>
<Container className='containerRegister'>

  <Row className='rowRegister'>
  <form >
    <Col className='columnRegister'>

      <InputEmail
        placeholder='Insira su name'
     
        type= 'texto'   
        
      />
      <InputEmail
        placeholder='Insira una descripción'
    
        type= 'texto'   
      />
      <InputEmail
        placeholder='Insira su telefono'
 
        type= 'texto'   
      />
      <InputEmail
        placeholder='Insira el valor'
   
        type= 'texto'   
      />
      <InputEmail
        placeholder='Insira una foto'
        type= 'texto'   
      />
      <ButtonComponent
        value={'Editar producto'}
      />
    </Col>
      </form>      
  </Row>
</Container>
    </>
  )
}

export default EditProduct