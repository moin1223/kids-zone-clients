import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const AllCourse = () => {

    const [courses,setCourses] = useState([]);

    useEffect( () => {
        fetch('https://still-eyrie-79056.herokuapp.com/courses')
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[])

   
    return (
        <>
        <div className="text-center mt-5">
        <h5 style={{color: '#1CC7C1'}}>OUR Program</h5>
        <h3 className="mt-5" style={{color: '#C19655'}}>We Offer An Exclusive</h3>
            <p style={{color: '#14202A'}}>program for kids</p>
         </div>
        <div className="d-flex justify-content-centers row">
           
         
            {
                     courses.map(course =><Course key={course._id} course={course} />)
             }
        </div>
        </>
    );
};

export default AllCourse;