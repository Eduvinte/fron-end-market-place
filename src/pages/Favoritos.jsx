import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Favoritos() {

  const [productsFavorit, setProductsFavorit] = useState([])

  useEffect(() => {
    // Toma el item del localStorage
    const favoritProducts = localStorage.getItem('favoritProducts')

    // Si existe 
    if (favoritProducts) {

      // Convierte en JSON
      const parseFavorit = JSON.parse(favoritProducts)

      // Setea el estado
      setProductsFavorit(parseFavorit)
    }
  }, [])

  function handleDelete(product_id){
    
    // Obtener la lista actual del local storage
    const favoritProductsDelete = JSON.parse(localStorage.getItem('favoritProducts'));

    // Encontrar el indice del producto que se debe eliminar
    const productIndex = favoritProductsDelete.findIndex((favoritProductsDelete) => favoritProductsDelete.id === product_id)

    if(productIndex !== -1){
      favoritProductsDelete.splice(productIndex, 1)
    }

    localStorage.setItem('favoritProducts', JSON.stringify(favoritProductsDelete))

    setProductsFavorit([...favoritProductsDelete]);

  }


  return (
    <Container>
      <Row>
        <Col className='market'>
          <span className='spanStyle'>Favoritos</span>
        </Col>
      </Row>

      <Row className='containerProductosContente'>
        {
          productsFavorit.map((products) => (
            <Col className='containerProductos' key={products.id}>
            <Col className='product'>
              <img src={`http://localhost:3002/${products.photo}`} width={200} height={200} alt={products.name} />
              <h1>{products.name}</h1>
              <p>{products.description}</p>
              <Button variant='danger' onClick={() => handleDelete(products.id)}>Quitar favorito</Button>
            </Col>
          </Col>
  
          ))
        }
    

      </Row>

    </Container>
  )
}

export default Favoritos