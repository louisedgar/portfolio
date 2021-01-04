import React, { Component } from "react";
import dribbbleWhite from "../assets/dribbbleWhite.svg";
import linkedinWhite from "../assets/linkedinWhite.svg";
import mediumWhite from "../assets/mediumWhite.svg";
export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-900 text-white mt-24 pb-10 text-center md:mt-40 w-full">
          <div className="text-1xl font-thin pt-12 md:text-2xl">
            Get in touch
          </div>
          <div className="text-3xl font-bold mt-4 md:text-4xl md:mt-3">
            Say hi & collaborate
          </div>
          <div className="font-normal text-lg mx-6 mt-8 md:w-2/4 md:text-xl md:mx-auto md:mt-8">
            Currently working as a freelance UX/UI Designer, and in my spare time, I enjoy writing and sharing about design, technology, and stories. If you have an idea for web and app, passionate in giving a
            good impact, and try to solve problems, don't hesitate to contact
            me.
          </div>

          <div className="mx-3 mt-8">
            <a href="mailto:design@edgarlouis.com">
              <button className="bg-indigo-500 text-white text-lg font-semibold hover:bg-indigo-400 py-4 px-8 mt-8 rounded-lg md:w-auto md:py-4 md:px-4 rounded-lg md:mt-8 shadow-lg  bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
                design@edgarlouis.com
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
            <small>&#169; 2021 Designed & coded by Edgar Louis</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
