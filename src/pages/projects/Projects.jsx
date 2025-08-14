import { useState } from 'react';
import Button from '../../components/shared/Button';

function Projects() {
  const [tab, setTab] = useState('Website designs');
  return (
    <section className="relative top-15 px-[150px] pb-12">
      <section className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 py-12">
        <h1 className="text-5xl font-semibold text-secondary w-full">
          Lets have a look at my <span className="text-primary">Projects</span>
        </h1>
        <div className="flex items-center gap-6">
          {['Website designs', 'Landing Page’s', 'Dashboard Design', 'Mobile App'].map((item) => (
            <div key={item}>
              <Button
                cn={`border bg-transparent !text-black ${
                  item === tab ? '!bg-black !border-primary !text-white' : ''
                }`}
                text={item}
                onClick={() => {
                  setTab(item);
                }}
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          {/* <div className="w-full">{tab === 'Website designs' && <WebsiteDesigns />}</div> */}
          {/* <div className="w-full">{tab === 'Landing Page’s' && <LandingPages />}</div> */}
          {/* <div className="w-full">{tab === 'Dashboard Design' && <Dashboards />}</div> */}
          {/* <div className="w-full">{tab === 'Mobile App' && <MobileApps />}</div> */}
        </div>
      </section>
    </section>
  );
}

export default Projects;
