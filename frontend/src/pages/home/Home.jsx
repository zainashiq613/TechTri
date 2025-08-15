import React from 'react';
import WhyHireUs from '../../components/home/WhyHireUs';
import Services from '../../components/home/Services';
// import TechIconsGrid from '../../components/home/Technologies';

function Home() {
  return (
    <div className="pt-25">
      <section className="hero">
        <div className="hero-content reveal">
          <h2 className="main-heading">Welcome to Tech Hierarchy</h2>
          <p className="sub-heading">Pakistan's largest cybersecurity community!</p>
          <p className="description">
            We are a vibrant student community passionate about fostering collaboration and
            equipping fellow students with opportunities to stay updated on the latest tech trends.
            With a focus on cybersecurity and exploring its vast potential, we aim to empower
            students across Pakistan to shape a secure digital future together.
          </p>
        </div>
        <div className="image-gallery reveal" style={{ transitionDelay: '200ms' }}>
          <div className="image-container">
            <video
              src="hero-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Tech Hierarchy Community Animation"
            ></video>
          </div>
        </div>
      </section>
      <WhyHireUs />
      <Services />
    </div>
  );
}

export default Home;
