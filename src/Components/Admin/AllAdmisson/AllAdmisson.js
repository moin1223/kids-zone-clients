import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import SingleAdmission from '../SingleAdmission/SingleAdmission ';

const AllAdmisson = () => {

    const [admissions, setAdmissions] = useState([]);

    useEffect(() => {
        fetch(`https://still-eyrie-79056.herokuapp.com/Admissions`)
            .then(res => res.json())
            .then(data =>  setAdmissions(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h3 className="m-5 text-center">All AllAdmisson</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Couse Name</th>
                                <th>AllAdmisson Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               admissions.map(add => <SingleAdmission add={add}></SingleAdmission >)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllAdmisson;