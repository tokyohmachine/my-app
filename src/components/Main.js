import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Importe o Link do React Router Dom


function Main() {
    return (
        <Container fluid style={{ backgroundColor: '#495E57', height: '600px' }}>
            <Row>
                <Col style={{ marginLeft: '30px', marginRight: '30px' , marginTop: '8%'}}>
                    <h1>Little Lemon</h1>
                    <h2 className='submain'>São Paulo</h2>
                    <p >Localizado no coração de São Paulo, o Little Lemon oferece uma experiência gastronômica 
                        única com um toque de sofisticação. Nosso cardápio é cuidadosamente elaborado com 
                        ingredientes frescos e de alta qualidade, trazendo pratos inovadores e tradicionais. 
                        A atmosfera acolhedora e o serviço impecável tornam cada visita memorável. Venha 
                        desfrutar de uma refeição excepcional e descubra por que somos uma joia na cidade.
                    </p>
                <Link to="/bookingpage">
                    <Button  style={{ marginTop: '30px', fontWeight: '700', backgroundColor: '#F4CE14', color: '#000', border: '#F4CE14'}}>
                    Reserve a table
                    </Button>
                </Link>
                </Col>

                <Col className='heroSection'>
                    {/* image */}
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
