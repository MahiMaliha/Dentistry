import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './AboutDoctor.css'
const AboutDoctor = () => {
  return (
    <div className='banner'>
    <Container>
  <Row>
    <Col sm={12} md={6} lg={6}>
      <h2 className='mt-3'>Welcome to Prof. Dr Nasir Uddin</h2>
      <p>Prof. Dr. Nasir Uddin Obtained Master of Surgery in Oral and Maxillofacial Surgery degree from University of Dhaka, Bangladesh in 2010. He completed Bachelor of Dental Surgery (BDS) course from Dhaka Dental College in 1985. Obtaining the Fellowship award from Japan Dental Association in 1990 he got admission in Advanced Surgical Study Program in the Department of Oral and Maxillofacial Surgery at Osaka University</p>
<p>After completion of Bangladesh Civil Service (BCS) Examination he joined in Government service in 1995 and worked as a Dental Surgeon at  Upazilla Health Complex, Murad Nagar, Comilla and Upazilla Health Complex, Doulatpur, Manikganj. He joined as a lecturer in the Dept. of Oral and Maxillofacial Surgery ,</p>
    <button className='btn btn-primary text-white px-5 pe-5 pt-2 pb-2  mt-3'>Read More</button>
</Col>
    <Col sm={12} md={6} lg={6}>
      <img src='https://drnasiruddin.com/wp-content/uploads/2022/04/Dr-Nasir_uddin-464x415.png' className='img-fluid mt-2 '></img>
    </Col>
  </Row>
 
</Container>
    </div>
  );
};

export default AboutDoctor;
