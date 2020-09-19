import React, { Component } from "react";
import dribbbleWhite from "../assets/dribbbleWhite.svg";
import linkedinWhite from "../assets/linkedinWhite.svg";
import mediumWhite from "../assets/mediumWhite.svg";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-900 text-white mt-24 pb-10 text-center md:mt-32">
          <div className="text-1xl font-thin pt-12 md:text-2xl">
            Get in touch
          </div>
          <div className="text-2xl font-bold mt-6 md:text-5xl md:mt-4">
            Say hi and let's collaborate
          </div>
          <div className="font-normal text-lg mx-4 mt-8 md:w-2/5 md:mx-auto md:mt-8">
            Currently working as a freelance UX/UI Designer, I'm a
            strive-to-learn person with a passion in technology, design and
            writing. If you have an idea for web and app, passionate in giving a
            good impact, and try to solve problems, don't hesitate to contact
            me.
          </div>

          <div className="mx-3 mt-8">
            <a href="mailto:louisedgar@ymail.com">
              <button className="bg-indigo-500 text-white font-semibold hover:bg-indigo-300 w-full py-4 px-3 mt-8 rounded-lg md:w-48 md:py-4 md:px-3 rounded-lg md:mt-8 shadow-lg">
                Contact me
              </button>
            </a>
          </div>
          <div className="flex flex-row mt-20 justify-center items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/edgarlouis/"
            >
              <img
                src={linkedinWhite}
                alt=""
                className="opacity-75  hover:opacity-100"
              ></img>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/edgarlouis"
            >
              <img
                src={dribbbleWhite}
                className="mx-12 opacity-75  hover:opacity-100"
                alt=""
              ></img>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@louisedgar"
            >
              <img
                src={mediumWhite}
                alt=""
                className="opacity-75 hover:opacity-100"
              ></img>
            </a>
          </div>
          <div className="mt-8 opacity-75 mx-16">
            <small>
              &#169; 2020 All right reserved - Designed & Coded by Edgar Louis
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
