import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ProcessPayment from '../Home/ProcessPayment/ProcessPayment';

const AdmitCourse= () => {

    const { id } = useParams();
    const history = useHistory();
    const [course, setCourse] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));
    const [AdmissionData, setAdmissionData] = useState({
        userName: user.name,
        email: user.email,
    })

    const handleDateChange = (e) => {
        const newAdmissionData = { ...admissionData };
        newAdmissionData.date = e.target.value;
        setAdmissionData(newAdmissionData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registrationData.date) {
            // console.log('ready for submit')
            fetch('https://still-eyrie-79056.herokuapp.com/addRegistration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registrationData)
            })
                .then(res => res.json())
                .then(data => {
                    alert('Your registration is successfully done')
                    history.replace('/');
                })
        }
        else {
            alert('Please select date')
        }
    }

    useEffect(() => {
        fetch(`https://still-eyrie-79056.herokuapp.com/course/${id}`)
            .then(res => res.json())
            .then(data => {
                setCourse(data);
                const newAdmissionData = { ...admissionData }
                newAdmissionData.courseName = data.CourseName
                newAdmissionData.coursePrise = data.price
                newAdmissionData.img = data.image
                setAdmissionData(newAdmissionData)
            })
    }, [])

    return (
       <div className="row">

       <div className="col-md-6">
            <div className="container">
            <div className="d-flex justify-content-center">
                <form className="form-control m-5" onSubmit=''>
                    <h3>Admit Your Course</h3>
                    <input type="text" name="userName" placeholder="userName" value={user.name} /> <br /><br />
                    <input type="text" name="courseName" placeholder="courseNam" value={course.CourseName} /> <br /><br />
                    {/* <textarea cols="100" rows="5" type="text" name="description" value={event.description} placeholder="Description" /> <br /><br /> */}
                    <input type="date" onChange={handleDateChange} name="date" /> <br /><br />
                    <button className="btn btn-primary">Enroll</button>
                </form>
            </div>
        </div>

       </div>


       <div  className="col-md-6">
        <h1>Please Pay For me</h1>
      <ProcessPayment></ProcessPayment>

       </div>



       </div>
    );
};

export default AdmitCourse;