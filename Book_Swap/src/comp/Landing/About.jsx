import React from 'react';
import Testimonial from './Testimonial';

const About = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <img
              src="Book2.jpg"
              alt="Bookstore Illustration"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2>About Our Bookstore</h2>
          <p>
            Welcome to our cozy bookstore, where stories come alive, and adventures 
            await at every corner. Whether you are searching for a classic novel, a 
            children's favorite, or the latest bestseller, we've got you covered. 
            Our friendly staff is here to help you find the perfect read for any mood. 
            Visit us and become part of our book-loving community!
          </p>
          <button className="btn btn-success">Read More</button>
        </div>
      </div>
      <div className='mt-4 mb-4'>
      <Testimonial />
      </div>
    </section>
  );
};

export default About;
