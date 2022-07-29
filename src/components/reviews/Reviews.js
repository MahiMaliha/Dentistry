import React from 'react';

import useReviews from '../../hooks/useReviews';
import IndividualReview from '../individualreview/IndividualReview';

import './Reviews.css';
const reviews = 
[{"key":1,"name":"Anik Haque","Review":"Amazing service. i feel so good  from here.","Rating":"5","img":"https://i.ibb.co/VVnDxTJ/Screenshot-100.png"},{"key":2,"name":"Umme Kulsum","Review":"Soo good work.Keep it up and all the best for future.","Rating":"4.5","img":"https://i.ibb.co/yY955pP/Screenshot-96.png"},{"key":3,"name":"Mahin Haque","Review":"This is a very good doctor. i have a very good experience with this doctor.","Rating":"4","img":"https://i.ibb.co/VVnDxTJ/Screenshot-100.png"},{"key":4,"name":"Mahi Maliha","Review":"He is really amazing","Rating":"5","img":"https://i.ibb.co/yY955pP/Screenshot-96.png"},{"key":5,"name":"Md.Hakim","Review":"Best doctor ever","Rating":"4","img":"https://i.ibb.co/VVnDxTJ/Screenshot-100.png"},{"key":6,"name":"Abdullah Akash","Review":"All his treatment are very effective","Rating":"4.5","img":"https://i.ibb.co/VVnDxTJ/Screenshot-100.png"}]

const Reviews = () => {
    
    return (
        <div className='mt-5 mb-5'>
            <h1 className="text-center mb-5 fw-bold menu-heading">What Other Says About Us</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
                {
                     reviews.length === 0 ?
                     <img className="img-fluid w-25 rounded-3 mx-auto" src="https://trails.ca/wp-content/uploads/2020/10/loading-spinner.gif" alt="" />
                     :
                    reviews.map(review => <IndividualReview
                        key={review._id}
                        review={review}
                    ></IndividualReview>)
                }
                </div>
                
                </div>
            </div>
  </div>
    )}     


export default Reviews;