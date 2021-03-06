import React from 'react';
import { useHistory } from 'react-router';

const SingleAdmission = (props) => {

    const add = props.add;
    const { _id, userName, courseName, date,email} = add;
    const history = useHistory();


    const handleDelete = () => {
        fetch(`http://localhost:5000/deleteAdmission/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            alert('Your registration is successfully deleted');
            history.replace('/');
        });
    }

    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{courseName}</td>
            <td>{date}</td>
            <td><button onClick={handleDelete} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default SingleAdmission;