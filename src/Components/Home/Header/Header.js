import React from 'react';
import kid from "../../../images/momwithkid.png" 
import './Header.css';

const Header = () => {
    return (
      
            <main style={{height:'600px'}} className="row d-flex align-items-center header-container">
        <div className="col-md-4 offset-md-1">
            <p style={{color: '#3A4256'}}>We Care Your babys Study life <br/> Starts Here</p>
            <h1 className="text-info"><b>Start Study Life</b></h1>
            <h3 className="text-secondary">With kids Zone</h3>
            <button className="btn btn-warning p-2" style={{color:"White"}}>GET Started</button>
        </div>
        <div className="col-md-6">
            <img src={kid} alt="" className="img-fluid"/>
        </div>
    </main>
  
    );

     
};

export default Header;