import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-5 text-primary" href="/"><img width="30px" src={logo} alt=""/>Kids Zone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" aria-current="page" to="/MyCourses">My Courses</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" aria-current="page" to="/login"><button className="btn btn-primary">Login</button></Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" aria-current="page" to="/allAdmission"><button className="btn btn-success">Dashboard</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;