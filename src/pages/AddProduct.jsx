import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { ButtonComponent } from '../components/Button';
import { InputEmail } from '../components/Input';
import { ProductContextApp } from '../contexts/ProductsContextApp'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';


import { AuthContextApp } from '../contexts/AuthContextApp';



function AddProduct() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [price, setPrice] = useState('')
  const [photo, setPhoto] = useState('')
  const [category, setCategory] = useState('Rosas')


  const { idUser, token, setProductAdd } = useContext(AuthContextApp)


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  async function handleAddProduct(e) {
    e.preventDefault();

    if (idUser && token) {

      try {

        const formData = new FormData();

        formData.append('name', name);
        formData.append('description', description);
        formData.append('phone', phone);
        formData.append('price', price);
        formData.append('photo', photo); // 'photo' should match the key used in the backend
        formData.append('idUser', idUser);
        formData.append('category', category);

        const headers = {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`  

        }

      await axios.post(`https://back-end-market-place-production.up.railway.app/addProduct/${idUser}`, formData, { headers })
        if(idUser){
          navigate(`/profile/${idUser}`)
          setProductAdd(true)
        }
        alert('Producto registrado con éxito')
      } catch (error) {
        console.error('Error al agregar producto:', error)
        alert('Ocurrió algún error')
      }

    }


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
            <form onSubmit={handleAddProduct} encType="multipart/form-data">
              <Col className='columnRegister'>

                <InputEmail
                  placeholder='Digite el titulo'
                  value={name}
                  type='texto'
                  onChange={(e) => setName(e.target.value)}
                />
                <InputEmail
                  placeholder='Digite una descripción'
                  valor={description}
                  type='texto'
                  onChange={(e) => setDescription(e.target.value)}
                />
                <InputEmail
                  placeholder='Digite su telefono'
                  valor={phone}
                  type='texto'
                  onChange={(e) => setPhone(e.target.value)}
                />
                <InputEmail
                  placeholder='Digite el valor'
                  valor={price}
                  type='texto'
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  type="file"
                  onChange={handleFileChange}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Rosas">Rosas</option>
                  <option value="Tulipanes">Tulipanes</option>
                  <option value="Rayos de sol">Rayos de sol</option>
                  <option value="Cravos">Cravos</option>
                </select>
                <ButtonComponent
                  className={'addProductBtn'}
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