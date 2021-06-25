import React from 'react';
import photo1 from '../../../images/photo1.jpg'
import photo2 from '../../../images/photo2.jpg'
import photo3 from '../../../images/photo3.jpg'
import photo4 from '../../../images/photo4.jpg'
import photo5 from '../../../images/photo5.jpg'
import photo6 from '../../../images/photo6.jpg'



const Event = () => {
    return (
        <container className="mt-4">
            <div className="text-center mt-5">
                <h1>Our Photo album</h1>

            </div>
            <div className="row mx-5 px-5 mt-5">
                <div className="col-md-4">
                    <img style={{ height: "300px", width: "300px" }} src={photo1} class="card-img rounded" alt="..." />

                </div>
                <div className="col-md-4">
                    <img style={{ height: "300px", width: "300px" }} src={photo2} class="card-img rounded" alt="..." />

                </div>
                <div className="col-md-4">
                    <img style={{ height: "300px", width: "300px" }} src={photo3} class="card-img rounded" alt="..." />
                </div>


            </div>
            <div className="row mx-5 px-5 mt-5">
                <div className="col-md-4">
                    <img style={{ height: "300px", width: "300px" }} src={photo4} class="card-img" alt="..." />

                </div>
                <div className="col-md-4">
                    <img style={{ height: "300px", width: "300px" }} src={photo5} class="card-img" alt="..." />

                </div>
                <div className="col-md-4">
                    <img style={{ height: "300px", width: "300px" }} src={photo6} class="card-img" alt="..." />
                </div>

            </div>


        </container>
    );
};

export default Event;