import React from 'react';
import './style.css'; 

export default function Review(review) {
    return(
        <div className='testimonial'>
            <div className='reviewPersonBlock'>
                <img src={review.review.image} alt={review.review.image} className='reviewPerson'/>
            </div>
            <div className='reviewInfo'>
                <h2>{review.review.name}</h2>
                <h3>{review.review.profession}</h3>
                <hr className='reviewLine'/>
                <p>{review.review.review}</p>
            </div>
        </div>
    );
}