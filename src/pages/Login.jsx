import React, { useState } from 'react'
import {InputEmail} from '../components/Input/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonComponent } from '../components/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContextApp } from '../contexts/AuthContextApp'
import axios from 'axios'
function Login() {

  const { setEmailGlobal } = useContext(AuthContextApp)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault();
    axios
    .post('/login', {email})
    .then((response) => {
      // Passar o token pro contexto

    })
    .catch((error) => {
      console.error('Error en la autenticación', error)
    })

    setEmailGlobal({email})
  }
  return (
    <div>
      <Container className='containerRegister'>
        <Row className='rowRegister'>
          <form onSubmit={handleLogin}>
            <Col className='columnRegister'>
         
            <InputEmail
                placeholder='Insira su Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputEmail
                placeholder='Insira su password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ButtonComponent
                value={'Enviar mensaje'}
              />
              <span>Ya tienes una cuenta ? <Link to='/register'>Register</Link></span>
            </Col>
          </form>
        </Row>
      </Container>

    </div>
  )
}

export default Login