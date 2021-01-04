import React, { Component } from "react";
import linkedinDark from "../assets/linkedinDark.svg";
import mediumDark from "../assets/mediumDark.svg";
import dribbbleDark from "../assets/dribbbleDark.svg";

class Hero extends Component {
  render() {
    return (
      <div>
        {/* Hero Section */}
        <div className="h-auto max-w-5xl mx-auto">
          <div className=" pt-5 md:pt-0 md:my-0 md:justify-start md:flex ">
            <div className="text-center mx-4 mt-24 md:mt-32 md:mx-0 md:text-left md:justify-start">
              <div className="text-5xl font-bold md:font-bold text-gray-900 mx-2 mt-5 md:mt-5 md:text-6xl md:mx-0 ">UI/UX <span className="text-indigo-500">Designer.</span>
              </div>
              <div className="text-xl font-semibold text-indigo-500 mx-2 mt-3 md:mt-5 md:text-2xl md:mx-0 ">
                Hi! I'm Edgar Louis, a junior UI/UX Designer.
              </div>
              <div className="text-xl text-gray-900 mt-5 mx-2 md:max-w-2xl md:text-2xl md:mt-5 md:leading-8 md:mx-0">
                I'm thrive to learn in making usable, accessible, and desirable products. I love to help people bringing their ideas come into life by analyzing the root
                cause, defining the needs, solving the right problem, and
                designing for the best experience.
              </div>
              <div className="flex mt-10 mx-2 justify-center items-center mt-8 md:justify-start md:mt-10 md:mx-0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/edgarlouis/"
                >
                  <img
                    src={linkedinDark}
                    alt=""
                    className="opacity-75 md:mr-12 hover:opacity-100 hover:shadow-lg"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/edgarlouis"
                >
                  <img
                    src={dribbbleDark}
                    alt=""
                    className="opacity-75 mx-12 md:mx-0 md:mr-12 hover:opacity-100 hover:shadow-lg"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@louisedgar"
                >
                  <img
                    src={mediumDark}
                    alt=""
                    className="opacity-75 hover:opacity-100 hover:shadow-lg"
                  />
                </a>
              </div>
              <div className="mt-6">
            <a href="mailto:design@edgarlouis.com">
              <button className="bg-indigo-500 text-white text-lg font-semibold hover:bg-indigo-400 py-4 px-8 mt-8 rounded-lg md:w-auto md:py-4 md:px-4 rounded-lg md:mt-8 shadow-lg  bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
                Let's collaborate
              </button>
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
