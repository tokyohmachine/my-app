import React, { useState } from 'react';
import { Form, Button, Col, Row, Nav } from 'react-bootstrap';

function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
        table: '',
    });

    const [availableTimes, setAvailableTimes] = useState([]); 
    const [activeTab, setActiveTab] = useState('informationDetails');
    const [selectedTable, setSelectedTable] = useState('');

    const updateAvailableTimes = (selectedDate) => {
        // lógica para atualizar horários disponíveis
        const times = ['12:00', '13:00', '14:00', '15:00']; // Exemplo de horários
        const filteredTimes = times.filter(time => {
            return true; // Supondo que todos os horários estão disponíveis por enquanto
        });
        setAvailableTimes(filteredTimes);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'date') {
            updateAvailableTimes(value); // Atualiza horários disponíveis quando a data mudar
        }
    
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleTableSelect = (table) => {
        setSelectedTable(table);
        setFormData({
            ...formData,
            table: table
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation details submitted: ", formData);
    };

    const handleContinue = () => {
        console.log("Form data before continue: ", formData);
        setActiveTab('payReservation');
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '50px' }}>
            <Nav fill variant="tabs" defaultActiveKey="informationDetails" style={{ marginBottom: '20px' }}>
                <Nav.Item id="navLink_Booking">
                    <Nav.Link eventKey="informationDetails" onClick={() => setActiveTab('informationDetails')}>Information Details</Nav.Link>
                </Nav.Item>
                <Nav.Item id="navLink_PayReservation">
                    <Nav.Link eventKey="payReservation" onClick={() => setActiveTab('payReservation')}>Pay Reservation</Nav.Link>
                </Nav.Item>
            </Nav>

            {activeTab === 'informationDetails' && (
                <>
                    <Row className="mb-3">
                        <h5 style={{ marginBottom: '20px', marginTop: '40px'}}>1. Select Table</h5>
                        {[...Array(8)].map((_, index) => {
                            const tableId = `T${index + 1}`;
                            return (
                                <Col key={tableId} xs={3} className="text-center" style={{ marginBottom: '10px'}}>
                                    <div
                                        onClick={() => handleTableSelect(tableId)}
                                        style={{
                                            cursor: 'pointer',
                                            width: '50px',
                                            height: '50px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '5px',
                                            backgroundColor: selectedTable === tableId ? '#F4CE14' : '#ccc',
                                            border: selectedTable === tableId ? '2px solid #000' : '1px solid #999',
                                            color: '#000',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {tableId}
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                    
                    <Form>
                        <h5 style={{ marginBottom: '20px', marginTop: '40px', }}>2. Fill out the form</h5>
                        <Form.Group as={Row} className="mb-3" controlId="formFullName">
                            <Form.Label column sm="3">Full Name</Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                    type="text" 
                                    name="fullName" 
                                    value={formData.fullName} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPhoneNumber">
                            <Form.Label column sm="3">Phone Number</Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                    type="tel" 
                                    name="phoneNumber" 
                                    value={formData.phoneNumber} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formDate">
                            <Form.Label column sm="3">Date</Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                    type="date" 
                                    name="date" 
                                    value={formData.date} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formTime">
                            <Form.Label column sm="3">Time</Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                    as="select" 
                                    name="time" 
                                    value={formData.time} 
                                    onChange={handleChange} 
                                    required 
                                >
                                    <option value="">Select a time...</option>
                                    {availableTimes.map((time, index) => (
                                        <option key={index} value={time}>{time}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3" controlId="formGuests">
                            <Form.Label column sm="3">Number of Guests</Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                    type="number" 
                                    name="guests" 
                                    value={formData.guests} 
                                    onChange={handleChange} 
                                    min="1" 
                                    required 
                                />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3" controlId="formOccasion">
                            <Form.Label column sm="3">Occasion</Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                    as="select" 
                                    name="occasion" 
                                    value={formData.occasion} 
                                    onChange={handleChange} 
                                >
                                    <option value="">Select...</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Col xs={12} className="text-center mt-3">
                            <Button  
                                type="button" 
                                onClick={handleContinue} 
                                style={{ backgroundColor: '#F4CE14', border: '#F4CE14', color: '#000', 
                                    fontWeight: '700', width: '300px', marginTop: '20px', marginBottom:'10%'}}
                            >
                                Continue to Pay
                            </Button>
                        </Col>
                    </Form>
                </>
            )}

            {activeTab === 'payReservation' && (
                <div>
                    <h5 style={{ marginBottom: '20px', marginTop: '40px', }}>Reservation Summary</h5>
                    <div>
                        <p  style={{ color: '#000'}}><strong>Name:</strong> {formData.fullName}</p>
                        <p  style={{ color: '#000'}}><strong>Phone:</strong> {formData.phoneNumber}</p>
                        <p  style={{ color: '#000'}}><strong>Date:</strong> {formData.date}</p>
                        <p  style={{ color: '#000'}}><strong>Time:</strong> {formData.time}</p>
                        <p  style={{ color: '#000'}}><strong>Guests:</strong> {formData.guests}</p>
                        <p  style={{ color: '#000'}}><strong>Table:</strong> {formData.table}</p>
                    </div>
                    
                    <h5 style={{ marginBottom: '20px', marginTop: '40px', }}>Payment Details</h5>
                    <p  style={{ color: '#000'}}><strong>Subtotal:</strong> $100.00</p>
                    <p  style={{ color: '#000'}}><strong>Total:</strong> $100.00</p>

                    <p style={{ fontSize: '12px', color: '#000'}}>
                        In case of cancellation, please read our 
                        <a href="/cancellation-policy" target="_blank">cancellation policy</a>.
                    </p>

                    <Col xs={12} className="text-center mt-3">
                        <Button 
                            type="submit" 
                            onClick={handleSubmit} 
                            style={{ backgroundColor: '#F4CE14', border:'#F4CE14', color: '#000', 
                                fontWeight: '700', width: '300px', marginTop: '20px', marginBottom:'10%'}}
                        >
                            Submit Reservation
                        </Button>
                    </Col>
                </div>
            )}
        </div>
    );
}

export default BookingForm;
