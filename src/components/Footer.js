import React, { Component } from "react";
import dribbbleWhite from "../assets/dribbbleWhite.svg";
import linkedinWhite from "../assets/linkedinWhite.svg";
import mediumWhite from "../assets/mediumWhite.svg";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-900 text-white mt-24 pb-24 text-center md:mt-32">
          <div className="text-1xl font-thin pt-12">Get in touch</div>
          <div className="text-2xl font-semibold mt-6 md:text-4xl md:mt-4">
            Say hi and let's collaborate
          </div>
          <div className="font-thin mx-4 mt-8 md:w-4/12 md:mx-auto md:mt-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </div>
          <div className="mx-3 mt-8">
            <a href="mailto:louisedgar@ymail.com">
              <button className="bg-indigo-500 text-white font-semibold hover:bg-indigo-300 w-full py-4 px-3 mt-8 rounded-lg md:w-48 md:py-4 md:px-3 rounded-lg md:mt-8">
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
                className="hover:opacity-50"
              ></img>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/edgarlouis"
            >
              <img
                src={dribbbleWhite}
                className="mx-12 hover:opacity-50"
                alt=""
              ></img>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@louisedgar"
            >
              <img src={mediumWhite} alt="" className="hover:opacity-50"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
