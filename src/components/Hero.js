import React, { Component } from "react";
import image from "../assets/image.png";
import linkedinDark from "../assets/linkedinDark.svg";
import mediumDark from "../assets/mediumDark.svg";
import dribbbleDark from "../assets/dribbbleDark.svg";
import Content from "./Content";
import Footer from "./Footer";

class Hero extends Component {
  render() {
    return (
      <div>
        {/* Hero Section */}
        <div className="h-auto">
          <div className="lg:container pt-5 md:pt-0 md:my-0 md:mx-auto md:flex flex-wrap md:justify-center">
            <div className="right-section text-center mx-2 mt-24 md:mt-0 md:mx-32 md:text-center md:text-left">
              <div className="text-xl font-semibold text-gray-800 mx-2 mt-3 md:mt-24 md:text-2xl ">
                Hi, I'm Edgar Louis
              </div>
              <div className=" text-3xl font-bold mx-auto md:font-extrabold text-gray-800 mx-2 mt-12 md:mt-10 md:ml-6 md:text-5xl md:tracking-wide">
                "Define. Decide.{" "}
                <span className="text-indigo-500">Design."</span>
              </div>
              <div className="mx-2 text-lg text-gray-900 mt-10  md:max-w-2xl md:text-2xl md:mt-12 md:tracking-normal ">
                I help you bring your ideas into life by analyzing the root
                cause, defining the needs, solving the right problem, and
                designing for the best experience.
              </div>
              <div className="flex mt-10 justify-center mx-2 items-center mt-10 md:justify-center md:mt-12 ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/edgarlouis/"
                >
                  <img
                    src={linkedinDark}
                    alt=""
                    className="md:mr-12 hover:opacity-50"
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
                    className="mx-16  md:mx-0 md:mr-12 hover:opacity-50"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@louisedgar"
                >
                  <img src={mediumDark} alt="" className="hover:opacity-50" />
                </a>
              </div>
              <a href="mailto:louisedgar@ymail.com">
                <button className="bg-indigo-500 text-white font-semibold mx-2 hover:bg-indigo-400 py-4 px-8 mt-12 md:w-48 md:py-4 md:px-3 rounded-lg md:mt-12 shadow-lg">
                  Let's collaborate
                </button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <Content />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Hero;
