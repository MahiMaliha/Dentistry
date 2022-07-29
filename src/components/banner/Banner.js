import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
    <Container>
  <Row>
    <Col sm={12} md={6} lg={6}><h1 className='banner-title'>Build Your Teeth Treatment <span className='mx-5 fw-bold'>By Dr.Nasir Uddin</span></h1>
    <button className='btn btn-primary text-white px-5 pe-5 pt-2 pb-2 mx-5 mt-3'>Explore More</button>
</Col>
    <Col sm={12} md={6} lg={6}>
      <img src='https://img.freepik.com/free-vector/female-dentist-doing-dental-work-customers-medical-clinic_1150-50295.jpg' className='img-fluid mt-2 banner-image'></img>
    </Col>
  </Row>
 
</Container>
    </div>
  );
};

export default Banner;
