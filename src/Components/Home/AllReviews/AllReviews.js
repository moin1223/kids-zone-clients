import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const AllReviews = () => {
    const [ reviews,setReviews] = useState([]);

    useEffect( () => {
        fetch('https://still-eyrie-79056.herokuapp.com/Reviews')
        .then(res => res.json())
        .then(data =>setReviews(data))
    },[])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR Testimonials</h5>
                <h2  className="mt-5" style={{color: '#C19655'}}>What Our Parents Says</h2>
                <p style={{color: '#14202A'}}>Adout kids Zone</p>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                     reviews.map(review =><Review key={review._id} review={review} />)
             }
            </div>
        </div>
        </section>
    );
};

export default AllReviews;