import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import '../styles.css'; 

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="hero-section">
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <h1 className="hero-heading">Your personal plant advisor</h1>
         </section>
      </header>
      <main className="main-content">
        <section className="container my-5">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto text-center">
              <h1>NEW PRODUCT</h1>
              <h2>Petite Petals, Grand Beauty</h2>
              <p>Discover the charm of our Petite Orchid—a tiny wonder that brings a burst of joy and sophistication to your cozy corner. Its blossoms are a celebration of nature's understated allure. Perfect for gifting, or simply to pamper yourself.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <img src="images/rose-pink.jpg" alt="Orchid" className="img-fluid" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
