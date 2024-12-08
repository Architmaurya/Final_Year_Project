
import React from 'react';
import '../../App.css' 

function TeamShowcase() {
  const teamMembers = [
    {
      img: 'archit.jpg', 
      name: 'Archit Maurya',
      role: 'Front-End Developer',
      testimonial: 'I love building visually appealing and functional interfaces.',
    },
    {
      img: 'nis.jpg', 
      name: 'Niskarsh Mani Pandey',
      role: 'Backend developer',
      testimonial: "Building the foundation for powerful applications.",
    },
    {
      img: 'shrisp2.jpg', 
      name: 'Shristi Verma',
      role: 'Backend Developer',
      testimonial: 'Crafting seamless functionality is my passion—ensuring the unseen layers of the application work flawlessly.',
    },
    {
      img: 'shivis.jpg', 
      name: 'Shivanshi Sahu',
      role: 'Frontend Developer',
      testimonial: 'Transforming designs into interactive experiences.',
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 text-dark">Meet Our Team</h2>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card team-card h-100">
              <div className="card-img-wrapper">
                <img
                  src={member.img}
                  className="team-img rounded-circle"
                  alt={member.name}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-role">{member.role}</p>
                <p className="card-testimonial">"{member.testimonial}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamShowcase;
