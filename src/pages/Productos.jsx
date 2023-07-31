import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ButtonFavorit } from '../components/Button';
import axios from 'axios';

import { ButtonComponent } from '../components/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContextApp } from '../contexts/AuthContextApp';
function Productos() {


  const [category, setCategory] = useState('Rosas')
  const [minPrice, setMinPrice] = useState(1000)
  const [maxPrice, setMaxPrice] = useState(10000)
  const [data, setData] = useState([])


  useEffect(() => {
    const data = {
      category,
      minPrice,
      maxPrice
    }
    axios.post('http://localhost:3002/productsFilter', data)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
  }, [])

  async function handleFilter(e) {
    e.preventDefault()
    const data = {
      category,
      minPrice,
      maxPrice
    }
    await axios.post('https://back-end-market-place-production.up.railway.app/productsFilter', data)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
  }


  return (
    <Container>
      <Row>
        <Col className='market'>
          <span className='spanStyle'>Tienda</span>
        </Col>
      </Row>

      <Row className='containerProductosContente'>
        <Col className='categorias' lg='3'>
          <form onSubmit={handleFilter}>

            <span>Filtrar</span>
            <br />
            <br />
            <span className='categoriaFiFilter'>Categoria</span>

            <select value={category} onChange={(e) => setCategory(e.target.value)} className='selectOne'>
              <option value="Rosas">Rosas</option>
              <option value="Tulipanes">Tulipanes</option>
              <option value="Rayos de sol">Rayos de sol</option>
              <option value="Cravos">Cravos</option>
            </select>

            <span className='priceFilter'>Price</span>
            <br /><br />
            <span>Precio minimo</span>
            <select style={{ marginBottom: '5%' }} value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
              <option>1000</option>
              <option>10000</option>
            </select>

            <span>Precio maximo</span>
            <select style={{ marginBottom: '5%' }} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
              <option>10000</option>
              <option>100000</option>

            </select>

            <ButtonComponent
              value='Filtrar'
            />
          </form>

        </Col>

        <Col className='containerProductos'>


          {
            data.length === 0 ? (
              <>
                <div className='notFoundProduct'>
                  <h1>No se encontró ningúm producto</h1>
                </div>
              </>
            ) : (
              data.map((product) => (
                <Col className='product' key={product.id}>
                  <img src={`http://localhost:3002/${product.photo}`} alt="" width={200} height={200} />
                  <ButtonFavorit product={product} />
                  <Link to={`/details/${product.id}`} className='addProductBtn'>Ver producto</Link>
                </Col>
              ))
            )
          }


        </Col>

      </Row>

    </Container>
  )
}

export default Productos