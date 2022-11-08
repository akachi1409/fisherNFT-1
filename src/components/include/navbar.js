import React, { useState } from 'react';

import "../../assets/css/include/navbar.css";

function Navbar(props) {
  return (
    <div>
      <div class="container position-relative">
        <nav class="navbar navbar-expand-lg" >
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse p-1 p-lg-0" id="navigation">
            <ul class="navbar-nav ms-lg-auto">
              <li class="nav-item me-lg-4">
                  <a class="nav-link nav-font" href="index.html">Home</a>
              </li>
              <li class="nav-item me-lg-4">
                  <a class="nav-link nav-font" href="features.html">MEET THE CREATOR</a>
              </li>
              <li class="nav-item me-lg-4">
                  <a class="nav-link nav-font" href="about.html">ABOUT US</a>
              </li>
              <li class="nav-item me-lg-4">
                  <a class="nav-link nav-font" href="contact.html">MERCH</a>
              </li>
              <li class="nav-item me-0">
                  <a class="nav-link nav-font" href="signup.html">SCHOOLIES PRANK</a>
              </li>  
              <li class="nav-item me-0">
                  <a class="nav-link nav-font" href="signup.html">FIELDTRIP TO NERVANAVERSE</a>
              </li>              
            </ul>
          </div>
        </nav>   
      </div>
    </div>
  );
}

export default Navbar;