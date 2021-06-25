import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Course from '../Home/Course/Course';
import ProcessPayment from '../Home/ProcessPayment/ProcessPayment';

const AdmitCourse= () => {
    const { id } = useParams();
    const history = useHistory();
    // console.log(id)
    const user = JSON.parse(localStorage.getItem('user'));
    const [course,setCourse]=useState({})
    const [admissionData,setAdmissionData] = useState({
        userName: user.name,
        email:user.email
    })


 
    const handleDateChange = (e) => {
        const newAdmissionData = { ...admissionData };
        newAdmissionData.date = e.target.value;
        setAdmissionData(newAdmissionData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(admissionData)
      if(admissionData.date){
        fetch('https://still-eyrie-79056.herokuapp.com/addAdmission', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admissionData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

      }
      else{
          alert('please select date')
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
    },[])
        
    


    return (
       <div className="row">

       <div className="col-md-6">
            <div className="container">
            <div className="d-flex justify-content-center">
                <form className="form-control m-5" onSubmit={handleSubmit}>
                    <h3>Admit Your Course</h3>
                    <input type="text" name="userName" placeholder="userName" value={user.name}/> <br /><br />
                    <input type="text" name="courseName" placeholder="courseNam" value={course.CourseName} /> <br /><br />
                    <input type="text" name="price" placeholder="price" value={course.price} /> <br /><br />
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