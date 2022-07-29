import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

import './CheckOut.css';
const CheckOut = () => {
    const [user] = useAuthState(auth);
    const { serviceId} = useParams();
    const [service,setService] = useState({});
    useEffect(()=>{
        const url =`http://localhost:3000/service/${serviceId}`
fetch('url')
.then(res=>res.json())
.then(data=>setService(data))

    },[])
    const handleOnSubmit = () => {
        alert('thank you for the booking.');
    }
    return (
        <div>
            <h2 className='text-center mt-3'>Welcome to the details service of : {serviceId}</h2>
           

            <Container className='details-bg'>
  <Row>
    <Col sm={12} md={12} lg={12}>
    <Form onSubmit={handleOnSubmit} className=''>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" defaultValue={user?.email} required/>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="name@example.com" defaultValue={user?.displayName} required/>
    <br></br>
    <Form.Control type="password" placeholder="enter password" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <button className='btn btn-primary text-white'>Checkout</button>
</Form>

    </Col>
   
  </Row>
  
</Container>

        </div>
    );
};

export default CheckOut;