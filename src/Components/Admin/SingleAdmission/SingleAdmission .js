import React from 'react';
import { useHistory } from 'react-router';

const SingleAdmission = (props) => {

    const add = props.add;
    const { _id, userName, courseName, date,email, img,coursePrise } = add;
    const history = useHistory();


    const handleDelete = () => {
        fetch(`https://still-eyrie-79056.herokuapp.com/deleteAdmission/${_id}`, {
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