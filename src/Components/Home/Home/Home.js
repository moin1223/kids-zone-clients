import React from 'react';
import Header from '../Header/Header';
import AllCourse from '../AllCourse/AllCourse';
import AllReviews from '../AllReviews/AllReviews';
import Event from '../Event/Event'




const Home = () => {
    return (
        <>
            <Header></Header>
            <AllCourse></AllCourse>
            <AllReviews></AllReviews>
           <div className="mb-5">
           <Event></Event>
           </div>
           
         
            
        </>


    );
};

export default Home;