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
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate()
  const { setRegisterGlobal } = useContext(AuthContextApp)

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
function handleRegister(e){
  e.preventDefault();

  axios
    .post('https://back-end-market-place-production.up.railway.app/register', { name, email, password })
    .then((response) => {
      // Passar a resposta do servidor ao contexto
      console.log("Registro existoso")
      navigate('/login')
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
              placeholder='Digite su nombre'
              value = {name}
              type= 'texto'
              onChange={(e) => setName(e.target.value)}
            />
          
            <InputEmail
              placeholder='Digite su email'
              value = {email}
              type= 'texto'
              onChange={(e) => setEmail(e.target.value)}
            />
          
            <InputEmail
              placeholder='Digite su contraseña'
              value = {password}
              type= 'password'
              onChange={(e) => setPassword(e.target.value)}
            />
          
            <ButtonComponent
              value={'Registrar'}
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
