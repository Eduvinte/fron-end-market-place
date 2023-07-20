import React, { useState } from 'react';
import {InputEmail} from '../components/Input';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonComponent } from '../components/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContextApp } from '../contexts/AuthContextApp';

function Register() {

  const { setRegisterGlobal } = useContext(AuthContextApp)

const [nameRegister, setName] = useState('')
const [emailRegister, setEmail] = useState('')
const [passwordRegister, setPassword] = useState('')

function handleRegister(e){
  e.preventDefault();

  axios
    .post('/register', { nameRegister, emailRegister, passwordRegister })
    .then((response) => {
      // Passar a resposta do servidor ao contexto
    })
    .catch((error)=>{
      console.error('Erro ao registrar', error)
    })
}

  return (
    <div>
      <Container className='containerRegister'>
        <Row className='rowRegister'>
        <form onSubmit={handleRegister}>
          <Col className='columnRegister'>
    
            <InputEmail
              placeholder='Insira su name'
              value = {nameRegister}
              type= 'texto'
              onChange={(e) => setName(e.target.value)}
            />
          
            <InputEmail
              placeholder='Insira su email'
              value = {emailRegister}
              type= 'texto'
              onChange={(e) => setEmail(e.target.value)}
            />
          
            <InputEmail
              placeholder='Insira su password'
              value = {passwordRegister}
              type= 'texto'
              onChange={(e) => setPassword(e.target.value)}
            />
          
            <ButtonComponent
              value={'Enviar mensaje'}
            />
            <span>Ya tienes una cuenta ? <Link to='/login'>Login</Link></span>
          </Col>
            </form>      
        </Row>
      </Container>

    </div>
  );
}

export default Register;
