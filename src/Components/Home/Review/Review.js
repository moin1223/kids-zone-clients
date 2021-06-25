import React from 'react';

const Review = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    const review = props.review;
    const {Name,Description} = review;
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={user.img} alt="" />
            <h5 className="mt-3 mb-3">{review.Name}</h5>
            <p className="text-secondary">{review.Description}</p>
        </div>
    );
};

export default Review;
