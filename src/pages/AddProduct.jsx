import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { ButtonComponent } from '../components/Button';
import { InputEmail } from '../components/Input';
import { ProductContextApp } from '../contexts/ProductsContextApp'
import { useContext } from 'react';
import axios from 'axios';

function AddProduct() {

    const [nameProduct, setNameProduct] = useState()
    const [descripcionProduct, setDescripcionProduct] = useState()
    const [telefonoProduct, setTelefonoProduct] = useState()
    const [valorProduct, setValorProduct] = useState()

    const { addProduct } = useContext(ProductContextApp)

    function handleAddProduct(e){
        e.preventDefault();
        axios
        .post('/addProduct', {})
        .then((response) => {
            // Passar la info del producto al estado global
        })
    }

  return (
    <div>
        <>
        <Row>
        <Col className='market'>
          <span className='spanStyle'>Publicar producto</span>
        </Col>
      </Row>
    <Container className='containerRegister'>
  
      <Row className='rowRegister'>
      <form onSubmit={handleAddProduct}>
        <Col className='columnRegister'>
  
          <InputEmail
            placeholder='Insira su name'
            value={nameProduct}
            type= 'texto'   
            onChange={(e) => setNameProduct(e.target.value)}
          />
          <InputEmail
            placeholder='Insira una descripción'
            valor={descripcionProduct}
            type= 'texto'   
          />
          <InputEmail
            placeholder='Insira su telefono'
            valor={telefonoProduct}
            type= 'texto'   
          />
          <InputEmail
            placeholder='Insira el valor'
            valor={valorProduct}
            type= 'texto'   
          />
          <InputEmail
            placeholder='Insira una foto'
            type= 'texto'   
          />
          <ButtonComponent
            value={'Publicar producto'}
          />
        </Col>
          </form>      
      </Row>
    </Container>
        </>

  </div>
  )
}

export default AddProduct