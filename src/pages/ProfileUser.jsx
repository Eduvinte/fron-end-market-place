import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContextApp } from '../contexts/AuthContextApp';
import {deleteProduct} from '../functions/functionsProducts';

function ProfileUser() {



  const { idUser, setProductAdd, productAdd } = useContext(AuthContextApp)

  const [products, setPorducts] = useState([])


  useEffect(()=>{

    if (idUser) {
      axios.get(`https://back-end-market-place-production.up.railway.app/${idUser}`)
        .then((response) => {
          console.log(response)
          setPorducts(response.data)
          if(productAdd){
            setProductAdd(false)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }

  }, [idUser, setProductAdd, productAdd])



  async function handleDeleteProduct(products_id){
   await deleteProduct(products_id)
   setProductAdd(true);
  }



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

      <Link className='addProductBtn' to={`/addProduct/${idUser}`}>Publicar producto</Link>
    {
      products.map((products) => (
        <Col key={products.id}>
        <div className='myProducts'>
          <img src={`https://back-end-market-place-production.up.railway.app/${products.photo}`} width={120} alt="flores" />
          <Link to={`/details/${products.id}`} className='addProductBtn'>Ver producto</Link>
          <Link to={`/editProduct/${products.id}`} className='addProductBtnEdit'>Editar Producto</Link>
          <Button variant='danger' onClick={() => handleDeleteProduct(products.id)}>Deletar producto</Button>
        </div>
      </Col>
      ))
    }
      

    </Container>
  )
}

export default ProfileUser