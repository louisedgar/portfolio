import React, { Component } from "react";
import linkedinDark from "../assets/linkedinDark.svg";
import mediumDark from "../assets/mediumDark.svg";
import dribbbleDark from "../assets/dribbbleDark.svg";
import {Animated} from "react-animated-css";

class Hero extends Component {
  render() {
    return (<Animated animationIn="fadeIn" isVisible={true}>
      <div className="md:bg-hero-img md:bg-cover md:bg-no-repeat md:bg-right md:pb-24 h-auto px-2 md:px-10 lg:px-16">
        {/* Hero Section */}
        
        <div className="max-w-6xl mx-auto">
          <div className="pt-5 md:pt-0 md:my-0 md:justify-start md:flex ">
            <div className="mt-6 md:mt-16 md:text-left md:justify-start">
              <Animated animationIn="fadeInUp" isVisible={true}>
              <div className="text-6xl leading-tight font-bold md:font-bold text-black mx-2 mt-5 md:mt-8 md:text-6xl md:mx-0 ">UI/UX <span className="text-black">Designer</span>
                </div>
              </Animated>
              <Animated animationIn="fadeInUp" isVisible={true}>
              <div className="text-xl text-gray-700 mt-5 mx-2 md:max-w-lg md:text-2xl md:mt-5 md:leading-8 md:mx-0">
                I thrive in making usable, accessible, and desirable products - by analyzing the root
                cause, defining the needs, solving the right problem, and
                designing for the best experience.
              </div>
              <div className="flex mt-10 mx-2 items-center mt-8 md:justify-start md:mt-10 md:mx-0">
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
                  <button className="bg-primary text-white text-lg font-semibold hover:opacity-75 py-4 px-8 mt-4 mx-2 rounded-lg md:mx-0 md:w-auto md:py-4 md:px-4 rounded-lg md:mt-8 shadow-lg">
                    Let's collaborate
                  </button>
                </a>
              </div>
           </Animated>
            </div>
          </div>
          </div>
          
      </div>
      </Animated>
    );
  }
}

export default Hero;
