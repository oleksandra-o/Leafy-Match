import React from 'react';
import Navbar from './Navbar'; 
import '../styles.css'; 

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Welcome to Leafy Match!</h1>
            <p>Discover the perfect plant companion with us. Our journey began with a passion for indoor gardening, aiming to make plant care easy and enjoyable for everyone.</p>
          </div>
          <div className="col-md-6">
            {/*  path to image  */}
            <img src={process.env.PUBLIC_URL + '/images/PeaceLily.jpg'} alt="About Us" className="img-fluid" />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default About;
