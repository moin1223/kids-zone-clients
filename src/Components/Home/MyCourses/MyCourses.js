import React, { useEffect, useState } from 'react';
import MySingleCourse from '../MySingleCourse/MySingleCourse';
import Sidebar from '../../Admin/Sidebar/Sidebar';

const MyCourses = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const [myCourses, setMyCourses] = useState([]);

    useEffect(() => {
        fetch(`https://still-eyrie-79056.herokuapp.com/Admission/${user.email}`)
            .then(res => res.json())
            .then(data => setMyCourses(data))
    },[user.email])

    return (
        <div className="container">
            
            <div className="row">
            <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                {
                myCourses.map(course => <MySingleCourse course={course}></MySingleCourse>)
                }
            </div>
        </div>
    );
};

export default MyCourses;