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
        <div className="h-auto ">
          <div className="lg:container pt-12 md:pt-0 md:flex flex-wrap">
            <div className="left-section md:ml-12 md:mt-12">
              <img src={image} alt="" />
            </div>
            <div className="right-section text-center mx-3 md:ml-6 md:text-left">
              <div className=" text-3xl font-extrabold text-gray-800 mt-3 md:mt-40 md:text-4xl">
                Define. Decide. <span className="text-indigo-500">Design.</span>
              </div>
              <div className="max-w-lg text-gray-900 mt-3 md:mt-4">
                Hi there, I'm Edgar Louis and that's how I work. Bringing your
                ideas into life by analyzing the root cause, defining the users'
                need, solving the right problem, and designing the best
                experience.
              </div>
              <div className="flex mt-8 justify-center items-center md:justify-start md:mt-8 ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/edgarlouis/"
                >
                  <img
                    src={linkedinDark}
                    alt=""
                    className=" md:mr-8 hover:opacity-50"
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
                    className="mx-16  md:mx-0 md:mr-8 hover:opacity-50"
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
                    className="md:mr-8 hover:opacity-50"
                  />
                </a>
              </div>
              <a href="mailto:louisedgar@ymail.com">
                <button className="bg-indigo-500 text-white font-semibold hover:bg-indigo-300 w-full py-4 px-3 mt-8 md:w-48 md:py-4 md:px-3 rounded-lg md:mt-12 shadow-lg">
                  Let's collaborate!
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <Content />
        </div>

        {/* Footer Section */}
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Hero;
