import React from 'react';
import './Home.css'; // Import the CSS file for the component

const Home = () => {
  return (
    <div className="home-container"> {/* Apply a CSS class to the container */}
      <h1>Welcome to the Home Page</h1>
      <p>
        This is the home page of our website. Here, you can find useful information about our products and services.
      </p>
      <h2>Our Services</h2>
      <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Digital Marketing</li>
      </ul>
      <p>
        We are dedicated to providing high-quality solutions to our clients and helping them achieve their business goals.
        Whether you need a new website, a mobile app, or assistance with your online marketing strategy, we've got you covered.
      </p>
      <p>Feel free to explore our website and contact us for any inquiries or project requests.</p>
    </div>
  );
};

export default Home;
