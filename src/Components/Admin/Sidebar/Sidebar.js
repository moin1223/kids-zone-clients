
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://still-eyrie-79056.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    },[user.email])
    
    return (

        <div className="m-5 p-5">
           {  isAdmin && <>
                <Link to="/addAdmin"><h3>AddAdmin</h3></Link>
                <Link to='/allAdmission'><h3>Admissions</h3></Link>
                <Link to="/addCourse"><h3>Add Course</h3></Link>
             </>
            }
            
            
            <Link to="/addReview"><h3>Add Review</h3></Link>
            <Link to="/MyCourses"><h3>MyCourses</h3></Link>
            
            
        </div>

    );
};

export default Sidebar;