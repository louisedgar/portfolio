import React, { Component } from "react";
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
        <div className="h-auto max-w-5xl mx-auto ">
          <div className=" pt-5 md:pt-0 md:my-0 md:justify-start md:flex ">
            <div className="right-section text-center mx-2 mt-24 md:mt-0 md:mx-0 md:text-left md:justify-start">
              <div className="text-xl font-semibold text-gray-900 mx-2 mt-3 md:mt-40 md:text-2xl md:mx-0 ">
                Hi, I'm Edgar Louis -
              </div>
              <div className=" text-3xl font-bold mx-auto md:font-bold text-gray-900 mx-2 mt-8 md:mt-5 md:text-5xl md:mx-0 ">
                Define. Decide. <span className="text-indigo-500">Design.</span>
              </div>
              <div className="text-lg font-normal text-gray-900 mt-8 md:max-w-2xl md:text-xl md:mt-5 md:leading-6 md:mx-0">
                I help you bring your ideas into life by analyzing the root
                cause, defining the needs, solving the right problem, and
                designing for the best experience.
              </div>
              <div className="flex mt-10 justify-center mx-2 items-center mt-10 md:justify-start md:mt-8 md:mx-0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/edgarlouis/"
                >
                  <img
                    src={linkedinDark}
                    alt=""
                    className="opacity-75 md:mr-12 hover:opacity-100"
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
                    className="opacity-75 mx-16 md:mx-0 md:mr-12 hover:opacity-100"
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
                    className="opacity-75 hover:opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto ">
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
