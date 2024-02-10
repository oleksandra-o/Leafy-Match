import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Connect with us</h5>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }}>
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }}>
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      <p>&copy; Leafy Match - Your Plant Companion. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
