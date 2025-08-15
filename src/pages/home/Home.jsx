import React from 'react';
import WhyHireUs from '../../components/home/WhyHireUs';
import Services from '../../components/home/Services';
import TechIconsGrid from '../../components/home/Technologies';

function Home() {
  return (
    <div className="pt-25">
      <WhyHireUs />
      <Services />
      <TechIconsGrid />
    </div>
  );
}

export default Home;
