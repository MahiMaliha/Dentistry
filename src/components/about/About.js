import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './About.css'
const About = () => {
  return (
    <div className='banner'>
    <Container>
  <Row>
    <Col sm={12} md={6} lg={6}>
      <h2 className='mt-3'>Hi, I am Mahi Maliha</h2>
      <p>I am a Self-motivated, creative, and ambitious software developer and seeking a challenging career with a good organization that provides the opportunity.</p>
<p>A dedicated and hardworking individual with a Bachelor's degree in Computer Science. Being well aware of the challenges and demands of this ever-evolving sector, I am offering my efficient and diligent services to fulfill the requirements of the IT industry.  My Goal is to be a good full-stack developer. I am working hard with my course and doing my projects for the experience and also giving time in practice daily 9-12 hours. I hope i can make it by the blessing of Almighty and through my hardwork.I aim at keeping myself up-to-date with the on-going developments in this field. Therefore, through my growing knowledge as well as sharp focus, I intend to successfully achieve my career goals. Expert in React.js, Node.js, Express, MongoDB, Firebase.</p>
   
</Col>
    <Col sm={12} md={6} lg={6}>
      <img src='http://www.themarketingsage.com/wp-content/uploads/2015/08/about-me-leon-severan-we-buy-houses.jpg' className='img-fluid mt-5 mx-5'></img>
    </Col>
  </Row>
 
</Container>
    </div>
  );
};

export default About;
