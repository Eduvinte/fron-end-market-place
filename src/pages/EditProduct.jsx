import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { ButtonComponent } from '../components/Button';
import { InputEmail } from '../components/Input';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function EditProduct() {

  const { id_product } = useParams()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [price, setPrice] = useState()
  const [photo, setPhoto] = useState('')
  const [category, setCategory] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  async function handleEdit(e){
    e.preventDefault();
    try {

      const formData = new FormData()

      formData.append('name', name)
      formData.append('description', description)
      formData.append('phone', phone)
      formData.append('pridce', price)
      formData.append('photo', photo)
      formData.append('category', category)

      const header = {
        'Content-Type': 'multipart/form-data',
      }

      await axios
      .put(`http://localhost:3002/editProducts/${id_product}`, formData, { header })

      alert('Producto editado con exíto')
    } catch (error) {
      console.error('Error al editar este product')
    }
  
  }

  

  return (
    <>
      <Row>
        <Col className='market'>
          <span className='spanStyle'>Editar Producto</span>
        </Col>
      </Row>
      <Container className='containerRegister'>

        <Row className='rowRegister'>
          <form onSubmit={handleEdit} >
            <Col className='columnRegister'>

              <InputEmail
               onChange={(e) => setName(e.target.value)}
               value={name}
                placeholder='Digite el titulo'
                type='texto'
              />
              <InputEmail
               onChange={(e) => setDescription(e.target.value)}
               value={description}
                placeholder='Digite una descripción'
                type='texto'
              />
              <InputEmail
               onChange={(e) => setPhone(e.target.value)}
               value={phone}
                placeholder='Digite el telefono'
                type='texto'
              />
              <InputEmail
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder='Digite el valor'
                type='texto'
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