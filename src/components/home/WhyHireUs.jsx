import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { MdDownloadForOffline } from 'react-icons/md';

function WhyHireUs() {
  return (
    <div className="grid grid-cols-12 px-[150px] pb-5 gap-5">
      <div className="col-span-12 lg:col-span-3 group w-full h-83 [perspective:1000px]">
        <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute w-full h-full bg-white shadow flex items-center justify-center [backface-visibility:hidden] rounded-lg border">
            <img src="/linkedin.png" alt="" />
          </div>
          <div className="p-4 absolute w-full h-full bg-white flex flex-col gap-1.5 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg border">
            <div className="flex w-full items-center justify-between">
              <div className="rounded-full flex items-center justify-center w-[60px] h-[60px] bg-primary">
                <img
                  className="w-full rounded-full h-full object-cover"
                  src="/IMG_0825 1.png"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center w-[50px] h-[50px]">
                <img className="w-full h-full object-cover" src="/pngwing.com (3) 1.png" alt="" />
              </div>
            </div>
            <p>Hammas Munir</p>
            <div className="flex gap-1 items-center text-xs text-[#A4A4A4] flex-wrap">
              <p>Director</p> |<p>Product Designer</p> | <p>UI/UX</p>
              <p>Front-End Developer</p> |<p>WordPress Expert</p>
            </div>
            <p className="text-xs text-[#454545]">
              I lead teams to create impactful, user-focused digital products using UI/UX design,
              front-end development, and WordPress. #ui/ux #front-end #wordpress #
              <span className="text-[#337BFF]">certificate!</span>
            </p>
            <div className="flex justify-end">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                <GoArrowUpRight size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3 group w-full h-83 [perspective:1000px]">
        <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute w-full h-full bg-white shadow flex items-center justify-center [backface-visibility:hidden] rounded-lg border">
            <div className="w-[90%]">
              <img src="/behance.png" alt="" />
            </div>
          </div>
          <div className="p-4 absolute w-full h-full bg-white flex flex-col gap-1.5 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg border">
            <div className="flex w-full items-center justify-between">
              <div className="rounded-full flex items-center justify-center w-[60px] h-[60px] bg-primary">
                <img
                  className="w-full rounded-full h-full object-cover"
                  src="IMG_0825 1.png"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center w-[50px] h-[50px]">
                <img className="w-full h-full object-cover" src="/Mask group.png" alt="" />
              </div>
            </div>
            <p>Hammas Munir</p>
            <div className="flex gap-1 items-center text-xs text-[#A4A4A4] flex-wrap">
              <p>Director</p> |<p>Product Designer</p> | <p>UI/UX</p>
            </div>
            <div className="w-full h-[120px]">
              <img className="w-full h-full object-cover" src="/image 24979.png" alt="" />
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                <GoArrowUpRight size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group transition duration-300 ease-in-out col-span-6 border shadow rounded-2xl p-6 flex flex-col justify-between">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-3xl font-bold">My Story</h1>
          <div className="inline-block text-4xl">
            <span className="group-hover:hidden transition duration-300 hover:scale-105 cursor-pointer">
              👀
            </span>
            <span className="hidden group-hover:inline transition duration-300">😊</span>
          </div>
        </div>
        <p className="text-[#555555E5] text-md">
          I hold a Bachelor's degree in design and bring over 5 years of experience in creating
          impactful digital products. My journey began in graphic design, but my passion for solving
          user problems led me into product and user experience design.
        </p>
        <p className="text-[#555555E5] text-md">
          Throughout my career, I’ve worked with multiple software houses and start-ups,
          collaborating with cross-functional teams and mentors. I've successfully delivered 50+
          projects, helping businesses turn ideas into user-friendly, functional solutions.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-9 flex flex-col gap-5">
        <h1 className="text-5xl font-semibold">
          Have an Awsome Project <br /> Idea? <span className="text-primary">Let’s Discuss</span>
        </h1>
        {/* <Input cn={'w-full'} /> */}
      </div>
      <div className="col-span-12 lg:col-span-3 relative bg-white border shadow rounded-2xl overflow-hidden group">
        <div className="pt-6 flex gap-6 flex-col items-center">
          <h1 className="text-3xl text-center font-bold">Fiver</h1>
          <div className="w-[200px]">
            <img className="w-full h-full" src="/173784 1.png" alt="" />
          </div>
        </div>
        <div
          className="absolute inset-0 bg-white flex flex-col gap-3 items-center text-lg font-semibold 
              opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-500 ease-in-out rounded-2xl py-5"
        >
          <p className="text-dark-text text-2xl">Hammas’s Resume</p>
          <p className="text-xl text-secondary-text">Product Design</p>
          <span>
            <MdDownloadForOffline fill="#4FBDD2" size={65} />
          </span>
          <span className="text-xl text-[#0077FF] underline cursor-pointer font-medium">View</span>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <img className="w-full h-full" src="/pic.png" alt="" />
      </div>
      <div className="col-span-12 lg:col-span-7 p-9 flex flex-col gap-5">
        <h3 className="text-5xl font-semibold">
          Why <span className="text-primary">Hire me</span> ?
        </h3>
        <p className="text-[#555555E5] text-md">
          With over 5 years of experience in UI/UX and product design, I bring creative thinking and
          strategic execution to every project. I focus on building user-centric, aesthetically
          pleasing, and high-performing designs that help businesses grow and stand out.
        </p>
        <div className="flex gap-3">
          <div>
            <p className="text-3xl font-bold">250+</p>
            <span className="text-secondary text-md">Project Completed</span>
          </div>
          <div>
            <p className="text-3xl font-bold">50+</p>
            <span className="text-secondary text-md">Satisfied Clients</span>
          </div>
        </div>
        <div>
          {/* <Button text={'Hire Now'} position={'right'} icon={<GoArrowUpRight size={25} />} /> */}
        </div>
      </div>
    </div>
  );
}

export default WhyHireUs;
