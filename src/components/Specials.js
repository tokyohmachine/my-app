import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Specials() {
    return (
        <Container  fluid style={{ backgroundColor: '#fff', height: '600px'}}>
            <Row style={{ marginLeft: '30px', marginRight: '30px', marginTop: '5%'}}>
                <div className="d-flex align-items-center justify-content-between">
                    <h2>Specials</h2>
                    <Button className="ml-3" style={{ width: '9.375rem', fontWeight: '700', backgroundColor: '#F4CE14', color: '#000', border: '#F4CE14' }}>
                        Online Menu
                    </Button>
                </div>
            </Row>
            <Row className="d-flex justify-content-center" style={{ marginLeft: '60px', marginRight: '60px', marginTop: '5%', paddingBottom: '3%'}}>
                <Col xs={3} className="d-flex justify-content-center">
                    <Card style={{ width: '20rem', height: '30rem'}}>
                    <Card.Img variant="top" src="/images/sebastian-pandelache-dwilNQajTh0-unsplash.jpg" />
                    <Card.Body style={{ backgroundColor: '#D9D9D9'}}>
                        <Card.Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                        color: '#000', fontWeight: '700', fontFamily: 'markeziText'}}>
                            <span>Greek Salad</span>
                            <span>$12.99</span>
                        </Card.Title>
                        <Card.Text style={{ color: '#000' }}>
                        A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell 
                        pepper, red onion, olives, and feta cheese. 
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '50px' }}>
                            <Button style={{ border: '#59742D', fontWeight: '700', backgroundColor: '#59742D', color: '#FFF' }}>
                                Order delivery
                            </Button>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs={3} className="d-flex justify-content-center">
                    <Card style={{ width: '20rem', height: '30rem'}}>
                    <Card.Img variant="top" src="/images/cole-patrick-4u2OJ9bEsbI-unsplash.jpg" />
                    <Card.Body style={{ backgroundColor: '#D9D9D9'}}>
                        <Card.Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                        color: '#000', fontWeight: '700', fontFamily: 'markeziText'}}>
                            <span>Kale Salad</span>
                            <span>$12.99</span>
                        </Card.Title>
                        <Card.Text style={{ color: '#000' }}>
                            Made with fresh, hearty kale, Parmesan cheese, toasted almonds, dried cranberries, and a 
                        lemon balsamic dressing.
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '50px' }}>
                        <Button style={{ 
                            border: '#59742D', 
                            fontWeight: '700', 
                            backgroundColor: '#59742D', 
                            color: '#FFF'
                            }}>
                            Order delivery
                        </Button>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs={3} className="d-flex justify-content-center">
                <Card style={{ width: '20rem', height: '30rem'}}>
                    <Card.Img variant="top" src="/images/brooke-lark-jUPOXXRNdcA-unsplash.jpg" />
                    <Card.Body style={{ backgroundColor: '#D9D9D9'}}>
                        <Card.Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                            fontWeight: '700', fontFamily: 'markeziText', color: "#000"}}>
                            <span>Cobb Salad</span>
                            <span>$12.99</span>
                        </Card.Title>
                        <Card.Text style={{ color: "#000" }}>
                            Savor the classic Cobb Salad, a delightful mix of grilled chicken, bacon, 
                            avocado, and blue cheese atop crisp lettuce.
                        </Card.Text>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '50px' }}>
                        <Button style={{ 
                            border: '#59742D', 
                            fontWeight: '700', 
                            backgroundColor: '#59742D', 
                            color: '#FFF'
                            }}>
                            Order delivery
                        </Button>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Specials;
