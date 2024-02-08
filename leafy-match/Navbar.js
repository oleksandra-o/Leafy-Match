
// In Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      {/* Bootstrap navbar*/}
      
    <div class="container">
        <a class="navbar-brand" href="#">LEAFY MATCH</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="signin.html"><i class="fas fa-user"></i> Sign In</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="cart.html"><i class="fas fa-shopping-cart"></i> Cart</a>
                </li>
            </ul>
        </div>
    </div>

    </nav>
  );
};

export default Navbar;

