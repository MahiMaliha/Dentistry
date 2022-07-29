import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import IndividualReview from '../individualreview/IndividualReview';



import './HomeReviews.css';
const reviews =
[{"key":1,"name":"Anik Haque","Review":"Amazing service. i feel so good  from here.","Rating":"5","img":"https://i.ibb.co/VVnDxTJ/Screenshot-100.png"},{"key":2,"name":"Umme Kulsum","Review":"Soo good work.Keep it up and all the best for future.","Rating":"4.5","img":"https://i.ibb.co/yY955pP/Screenshot-96.png"},{"key":3,"name":"Mahin Haque","Review":"This is a very good doctor. i have a very good experience with this doctor.","Rating":"4","img":"https://i.ibb.co/VVnDxTJ/Screenshot-100.png"},{"key":4,"name":"Mahi Maliha","Review":"He is really amazing","Rating":"5","img":"https://i.ibb.co/yY955pP/Screenshot-96.png"},{"key":5,"name":"Md.Hakim","Review":"Best doctor ever","Rating":"4","img":"https://i.ibb.co/VVnDxTJ/Screenshot-100.png"},{"key":6,"name":"Abdullah Akash","Review":"All his treatment are very effective","Rating":"4.5","img":"https://i.ibb.co/VVnDxTJ/Screenshot-100.png"}]
const HomeReviews = () => {
    
    const navigate = useNavigate();
 // Handle Navigate Route:
 const handleRoute = () => {
    navigate('/reviews');
}
    return (
        <div className='mt-5 mb-5'>
            <h1 className="text-center mb-5 fw-bold menu-heading">What Other Says</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
                {
                    reviews.slice(0,3).map(review => <IndividualReview
                        key={review._id}
                        review={review}
                    ></IndividualReview>)
                }
                </div>
                <Button onClick={handleRoute} className='bg-primary px-5 pe-5 mt-2'>Show All</Button>
                </div>
            </div>
  </div>
    )}     


export default HomeReviews;