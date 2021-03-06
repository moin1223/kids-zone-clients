import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddCourse = () => {
    
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('CourseName', info.CourseName);
        formData.append('price', info.price);

        fetch('https://still-eyrie-79056.herokuapp.com/addCourse', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

     
  
    return (
        <section className="container-fluid row">
            <div className="col-md-4">
            <Sidebar></Sidebar>
            </div>
        
        <div className="col-md-8 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Course</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">CourseName</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="CourseName" placeholder="CourseName" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">price</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
       
    );
};

export default AddCourse;