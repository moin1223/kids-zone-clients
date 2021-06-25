import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {

    const course = props.course;
    const {_id,CourseName} = course;
    console.log(props.course)
    const imageStyle = { height: '150px', width: '150px' }

 

    return (
       
        <div className="col-md-3 p-3  col-lg-3 col-sm-12 course mx-5" >
           
            <Card style={{ width: '18rem' }}>
            <Link to={`/admitCourse/${_id}`}>
           
            <Card.Body>
            <Card.Img style={imageStyle} variant="top"src={`data:image/png;base64,${course?.image?.img}`}/>
            
          
                <Card.Title className="course text-decoration-none">{CourseName}</Card.Title>
                
            </Card.Body>

            </Link>
        </Card>

       </div>
      

        
    );
};

export default Course;

