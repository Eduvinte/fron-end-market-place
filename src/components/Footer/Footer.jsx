import React from 'react'
import logo from '../../images/Logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
  return (
    <div className='footer'>
        <Container>
            <Row>
                <Col>
                <img src={ logo } width={250} alt="logo" />
                </Col>
                <Col className='contactaFooter'>
                    <span>Contact ahora!</span>
                    <input type="text" placeholder='Mande su mensaje!' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer