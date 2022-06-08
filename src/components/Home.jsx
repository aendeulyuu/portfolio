import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import React from 'react';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#CCD6F6]">
          Andrew Matthew Miranda
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0]">
          I'm an aspiring Full Stack Developer
        </h2>
        <p className="py-4 max-w-[700px] text-[#8892B0]">
          I'm a back-end developer specializing in C# and Node.JS. Currently, I
          am learning to be a front-end developer to fully utilize my skills and
          this portfolio demonstrates my learning progress.
        </p>
        <div>
          <Link to="personal-projects" smooth={true} duration={500}>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Personal Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
