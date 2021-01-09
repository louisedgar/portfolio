import React, { Component } from "react";
import aqimos from "../assets/aqimos.png";
import formbuilder from "../assets/formbuilder.png";
import mantis from "../assets/mantis.png";
import co from "../assets/co.png";
import {Animated} from "react-animated-css";

export class Content extends Component {
  render() {
    return (
      <div>
        <Animated animationIn="fadeInUp" isVisible={true}>
        <div className="max-w-5xl mx-auto" id="work">
          {/* Mantis*/}
            <div className="md:text-left md:justify-start mt-16 md:mt-24 mb-0">
              <div className="flex flex-col flex-col-reverse md:flex-row md:flex-auto md:text-left md:justify-start">
                <div className="mx-4 mt-6 text-gray-900 font-light md:text-xl md:w-1/3 flex-initial md:text-left md:justify-start md:ml-0 md:mr-16">
                  <div className="font-semibold text-gray-500 text-sm">
                    UI Design - UX Design - Front-end
                  </div>
                  <div className="font-bold mt-2 text-2xl md:text-2xl hover:text-indigo-600">
                    <a href="https://medium.com/design-bootcamp/case-study-water-pressure-monitoring-web-app-21be037e0097" target="blank">
                    iGauge Logger
                     </a>
                  </div>
                  <div className="mt-2 text-gray-900">
                  iGauge Logger is more about water pressure and decision
                    making. It tracks the water pressure for pipelines that
                    spread across the city. The data is used
                    as a consideration to control and maintain the
                    city water supply. 
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mt-6 md:mx-0 md:w-2/3 flex-initial">
                  <img src={mantis} alt="" className="my-0 mx-auto rounded transform hover:-translate-y-2 hover:scale-102 transition duration-500 ease-in-out hover:shadow-2xl"></img>
                </div>
                </div>
              </div>
            
              {/* Formbuilder */}
              <div className=" justify-center mt-16 md:mt-32 mb-0 mx-auto">
                {/* <img src={co} alt="" className="my-0 mx-auto"></img> */}
              <div className="md:mx-auto md:flex md:flex-row md:flex-auto md:items-start">
                <div className="text-2xl font-semibold text-gray-900 mt-6 md:mx-0 md:w-2/3 flex-initial">
                  <img src={formbuilder} alt="" className="my-0 mx-auto rounded transform hover:-translate-y-2 hover:scale-102 transition duration-500 ease-in-out hover:shadow-2xl"></img>
                </div>
                <div className="mx-4 mt-6 text-gray-900 font-light md:text-xl md:w-1/3 md:ml-16 flex-initial">
                  <div className="font-semibold text-gray-500 text-sm">
                    UI Design - UX Design
                  </div>
                <div className="font-bold text-2xl md:text-2xl hover:text-indigo-600 mt-2">
                  <a href="https://medium.com/design-bootcamp/building-a-custom-form-builder-fb879ae53085" target="blank">
                    Formbuilder
                  </a>
                  </div>
                  <div className="mt-2 text-gray-900">
                    A formbuilding software for a organization internal use. The design system ensures the users to
                    generate a consistent form - for any necessity - which not
                    only provide a positive experience for the builder but also
                    for the preparer.
                  </div>
                  </div>
                </div>
            </div>

            {/* AQimos */}
              <div className="md:text-left md:justify-start mt-16 md:mt-32 mb-0">
              <div className="flex flex-col flex-col-reverse md:flex-row md:flex-auto md:text-left md:justify-start">
                <div className="mx-4 mt-6 text-gray-900 font-light md:text-xl md:w-1/3 flex-initial md:text-left md:justify-start md:ml-0 md:mr-16">
                  <div className="font-semibold text-gray-500 text-sm">
                    UI Design - UX Design - Front-end
                  </div>
                <div className="font-bold mt-2 text-2xl md:text-2xl hover:text-indigo-600">
                  <a href="https://louisedgar.medium.com/redesigning-aqimos-4f415ef6e39e" target="blank">
                    AQimos
                  </a>
                  </div>
                  <div className="mt-2 text-gray-900">
                  AQimos is a software that monitor the air
                  composition. The devices surronding a particular area sent
                  data accordingly by the back-end that provides API.
                  The data then is processed by the front-end which will be used
                  by the person in charge to measure the quality of the air. 
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mt-6 md:mx-0 md:w-2/3 flex-initial">
                  <img src={aqimos} alt="" className="my-0 mx-auto rounded transform hover:-translate-y-2 hover:scale-102 transition duration-500 ease-in-out hover:shadow-2xl"></img>
                </div>
                </div>
              </div>
          

            {/* Co. */}
              <div className=" justify-center mt-16 md:mt-32 mb-0 mx-auto">
              <div className="md:mx-auto md:flex md:flex-row md:flex-auto md:items-start">
                <div className="text-2xl font-semibold text-gray-900 mt-6 md:mx-0  md:w-2/3 flex-initial">
                  <img src={co} alt="" className="my-0 mx-auto rounded transform hover:-translate-y-2 hover:scale-102 transition duration-500 ease-in-out hover:shadow-2xl"></img>
                </div>
                <div className="mx-4 mt-6 text-gray-900 font-light md:text-xl  md:w-1/3 md:ml-16 flex-initial">
                  <div className="font-semibold text-gray-500 text-sm">
                    UI Design
                  </div>
                <div className="font-bold mt-2 text-2xl md:text-2xl hover:text-indigo-600">
                  <a href="https://louisedgar.medium.com/co-a-collaboration-messaging-platform-simplified-6ce26389345d" target="blank">
                    Co - a collaboration platform
                   </a>
                  </div>
                  <div className="mt-2 text-gray-900">
                    Co. is a web app that serve as collaboration tool. Users can
                    chat, create their own server and channel to make
                    collaboration with their peers easier.
                  </div>
                  </div>
                </div>
            </div>
          </div>
          </Animated>
          </div>
    );
  }
}

export default Content;
