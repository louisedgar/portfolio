import React, { Component } from "react";
import aqimos from "../assets/aqimos.png";
import formbuilder from "../assets/formbuilder.png";
import mantis from "../assets/mantis.png";

export class Content extends Component {
  render() {
    return (
      <div>
        <div>
          {/* AQimos */}
          <div className="w-11/12 justify-center mt-32 md:mt-12 mb-0 mx-auto">
            <img src={aqimos} alt="" className="my-0 mx-auto"></img>
            <div className="md:flex md:flex-row md:flex-auto  md:mt-4 md:mx-20 md:items-start">
              <div className="text-2xl font-semibold text-gray-900 mt-6 md:mt-4 md:w-2/4 flex-initial">
                Aqimos
              </div>
              <div className="mt-4 text-gray-900 md:w-2/4 flex-initial">
                Aqimos is a software that monitor and track the air composition.
                The devices surronding a particular area sent data - regarding
                the wind, landscape, and air composition - and arranged
                accordingly by the back-end that provides API. The data then is
                processed by the front-end which will be used by the person in
                charge to measure the quality of the air. Our work is to present
                the complex data while ensuring the simplicity and easiness of
                use.
                <div className="mt-3 text-1xl text-indigo-500 hover:text-indigo-800">
                  <a href="#">Read more {">"} </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formbuilder */}
          <div className="w-11/12 justify-center mt-16 mb-0 mx-auto">
            <img src={formbuilder} alt="" className="my-0 mx-auto"></img>
            <div className="md:flex md:flex-row md:flex-auto md:mt-4 md:mx-20 items-start">
              <div className="text-2xl text-gray-900 font-semibold mt-6 md:mt-4 md:w-2/4 flex-initial">
                Formbuilder
              </div>
              <div className="mt-4 text-gray-900 md:w-2/4 flex-initial">
                A formbuilding software for a corporate internal use. We are
                responsible to create a system that ensure the users to generate
                a consistent form - for any necessity - which not only provide a
                positive experience for the builder but also for the preparer.
                <div className="mt-3 text-1xl text-indigo-500 hover:text-indigo-800">
                  <a href="#">Read more {">"} </a>
                </div>
              </div>
            </div>
          </div>

          {/* iGauge Logger */}
          <div className="w-11/12 justify-center mt-16 mb-0 mx-auto">
            <img src={mantis} alt="" className="my-0 mx-auto"></img>
            <div className="md:flex md:flex-row md:flex-auto md:mt-4 md:mx-20 items-start">
              <div className="text-2xl text-gray-900 font-semibold mt-6 md:mt-4 md:w-2/4 flex-initial">
                iGauge Logger
              </div>
              <div className="mt-4 text-gray-900 md:w-2/4 flex-initial">
                iGauge Logger is more about water pressure and decision making.
                It keeps track of water pressure for pipelines that spread
                across the city. The data is used by the stakeholders as a
                decision making consideration to control and maintain the city
                water supply. Our work is to create an interface that assist the
                stakeholders to make decision based on the prioritized data
                being presented.
                <div className="mt-3 text-1xl text-indigo-500 hover:text-indigo-800">
                  <a href="#">Read more {">"} </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
