import React from 'react';
import Tetris from '../assets/tetris.png';
import WeatherApp from '../assets/weather-app.png';

const PersonalProjects = () => {
  /* eslint-disable no-alert, no-console */
  return (
    <div
      name="personal-projects"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Personal Projects
          </p>
          <p className="py-6">
            \\ Check out some of my recent personal projects that I learned from
            various tutorials on the Internet.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${WeatherApp})` }}
          >
            <div className="opacity-0 group-hover:opacity-100 group-hover:duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <div>
                <a
                  href="https://aendeulyuu.github.io/weather-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/aendeulyuu/weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${Tetris})` }}
          >
            <div className="opacity-0 group-hover:opacity-100 group-hover:duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tetris
              </span>
              <div>
                <a
                  href="https://aendeulyuu.github.io/tetris/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/aendeulyuu/tetris"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
