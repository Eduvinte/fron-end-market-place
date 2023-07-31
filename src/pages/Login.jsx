import React, { useEffect, useState } from 'react'
import { InputEmail } from '../components/Input/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonComponent } from '../components/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContextApp } from '../contexts/AuthContextApp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {

  const { infoUserSession, idUser, tokenExpired } = useContext(AuthContextApp)

  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

 



  async function handleLogin(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3002/login', { email, password })
      .then((response) => {
        // Passar o token pro contexto
        if (response) {
          const { userId, userName, token } = response.data
          const userInfo = {
            userId,
            userName,
            token
          }
          window.location.reload()
          infoUserSession({ userInfo })
          if(idUser){
            navigate(`/profile/${idUser}`);
          }
          window.location.reloade()
        } else {
          console.error('Error en la autenticación')
        }


      })
      .catch((error) => {
        console.error('Error en la autenticación', error)
      })
  }







  return (
    <>
      <div>
        <Container className='containerRegister'>
          <Row className='rowRegister'>
            <form onSubmit={handleLogin}>
              <Col className='columnRegister'>

                <InputEmail
                  placeholder='Digite su Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputEmail
                  placeholder='Digite su Contraseña'
                  value={password}
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonComponent
                  value={'Entrar'}
                />
                <span>Ya tienes una cuenta ? <Link to='/register'>Register</Link></span>
              </Col>
            </form>
          </Row>
        </Container>

      </div>
    </>

  )

}

export default Login

