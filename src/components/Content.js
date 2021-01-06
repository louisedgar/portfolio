import React, { Component } from "react";
import aqimos from "../assets/aqimos.png";
import formbuilder from "../assets/formbuilder.png";
import mantis from "../assets/mantis.png";
import co from "../assets/co.png";
import { Link } from "react-router-dom";



export class Content extends Component {
  render() {
    return (
        <div>
        <div className="max-w-5xl mx-auto ">
          {/* Mantis*/}
            <div className="md:text-left md:justify-start mt-24 md:mt-32 mb-0">
              <div className="flex flex-col flex-col-reverse md:flex-row md:flex-auto md:text-left md:justify-start">
                <div className="mx-6 mt-6 text-lg text-gray-900 font-light md:text-xl md:w-1/3 flex-initial md:text-left md:justify-start md:ml-0 md:mr-16">
                  <div className="font-semibold text-gray-600 text-sm">
                    UI Design - UX Design - Front-end
                  </div>
                  <div className="font-bold mt-2 md:text-2xl hover:text-indigo-600">
                    <a href="https://medium.com/design-bootcamp/case-study-water-pressure-monitoring-web-app-21be037e0097" target="blank">
                    iGauge Logger
                     </a>
                  </div>
                  <div className="mt-2 text-gray-700">
                  iGauge Logger is more about water pressure and decision
                    making. It keeps track of water pressure for pipelines that
                    spread across the city. The data is used by the stakeholders
                    as a decision making consideration to control and maintain the
                    city water supply. 
                  </div>
                  
                  <div>
                    <a href="https://medium.com/design-bootcamp/case-study-water-pressure-monitoring-web-app-21be037e0097" target="blank">
                      <button className="bg-white border-indigo-500 text-gray-900 text-base font-semibold hover:bg-indigo-500 py-4 px-8 mt-8 rounded-lg md:w-auto md:py-4 md:px-4 rounded-lg md:mt-8 shadow-md bg-white hover:text-white">
                        Read case study
                      </button>
                    </a>
                  </div>


                </div>
                <div className="text-2xl font-semibold text-gray-900 mt-6 md:mx-0 md:w-2/3 flex-initial">
                  <img src={mantis} alt="" className="my-0 mx-auto rounded transform hover:-translate-y-2 hover:scale-102 transition duration-500 ease-in-out hover:shadow-2xl"></img>
                </div>
                </div>
              </div>

              {/* Formbuilder */}
              <div className=" justify-center mt-24 md:mt-32 mb-0 mx-auto">
                {/* <img src={co} alt="" className="my-0 mx-auto"></img> */}
              <div className="md:mx-auto md:flex md:flex-row md:flex-auto md:items-start">
                <div className="text-2xl font-semibold text-gray-900 mt-6 md:mx-0 md:w-2/3 flex-initial">
                  <img src={formbuilder} alt="" className="my-0 mx-auto rounded transform hover:-translate-y-2 hover:scale-102 transition duration-500 ease-in-out hover:shadow-2xl"></img>
                </div>
                <div className="mx-6 mt-6 text-lg text-gray-900 font-light md:text-xl md:w-1/3 md:ml-16 flex-initial">
                  <div className="font-semibold text-gray-600 text-sm">
                    UI Design - UX Design
                  </div>
                <div className="font-bold text-xl md:text-2xl hover:text-indigo-600 mt-2">
                  <a href="https://medium.com/design-bootcamp/building-a-custom-form-builder-fb879ae53085" target="blank">
                    Formbuilder
                  </a>
                  </div>
                  <div className="mt-2 text-gray-700">
                    A formbuilding software for a organization internal use. I'm
                    responsible to create a system that ensure the users to
                    generate a consistent form - for any necessity - which not
                    only provide a positive experience for the builder but also
                    for the preparer.
                  </div>
                  
                  <div>
                    <a href="https://medium.com/design-bootcamp/building-a-custom-form-builder-fb879ae53085" target="blank">
                      <button className="bg-white border-indigo-500 text-gray-900 text-base font-semibold hover:bg-indigo-500 py-4 px-8 mt-8 rounded-lg md:w-auto md:py-4 md:px-4 rounded-lg md:mt-8 shadow-md bg-white hover:text-white">
                        Read case study
                      </button>
                    </a>
                  </div>

                  </div>
                </div>
            </div>

            {/* AQimos */}
              <div className="md:text-left md:justify-start mt-24 md:mt-32 mb-0">
              <div className="flex flex-col flex-col-reverse md:flex-row md:flex-auto md:text-left md:justify-start">
                <div className="mx-6 mt-6 text-lg text-gray-900 font-light md:text-xl md:w-1/3 flex-initial md:text-left md:justify-start md:ml-0 md:mr-16">
                  <div className="font-semibold text-gray-600 text-sm">
                    UI Design - UX Design - Front-end
                  </div>
                <div className="font-bold mt-2 text-xl md:text-2xl hover:text-indigo-600">
                  <a href="https://louisedgar.medium.com/redesigning-aqimos-4f415ef6e39e" target="blank">
                    AQimos
                  </a>
                  </div>
                  <div className="mt-2 text-gray-700">
                  AQimos is a software that monitor and track the air
                  composition. The devices surronding a particular area sent
                  data accordingly by the back-end that provides API.
                  The data then is processed by the front-end which will be used
                  by the person in charge to measure the quality of the air. 
                  </div>
                  
                  <div>
                    <a href="https://louisedgar.medium.com/redesigning-aqimos-4f415ef6e39e" target="blank">
                      <button className="bg-white border-indigo-500 text-gray-900 text-base font-semibold hover:bg-indigo-500 py-4 px-8 mt-8 rounded-lg md:w-auto md:py-4 md:px-4 rounded-lg md:mt-8 shadow-md bg-white hover:text-white">
                        Read case study
                      </button>
                    </a>
                  </div>


                </div>
                <div className="text-2xl font-semibold text-gray-900 mt-6 md:mx-0 md:w-2/3 flex-initial">
                  <img src={aqimos} alt="" className="my-0 mx-auto rounded transform hover:-translate-y-2 hover:scale-102 transition duration-500 ease-in-out hover:shadow-2xl"></img>
                </div>
                </div>
              </div>
          

            {/* Co. */}
              <div className=" justify-center mt-24 md:mt-32 mb-0 mx-auto">
              <div className="md:mx-auto md:flex md:flex-row md:flex-auto md:items-start">
                <div className="text-2xl font-semibold text-gray-900 mt-6 md:mx-0  md:w-2/3 flex-initial">
                  <img src={co} alt="" className="my-0 mx-auto rounded transform hover:-translate-y-2 hover:scale-102 transition duration-500 ease-in-out hover:shadow-2xl"></img>
                </div>
                <div className="mx-6 mt-6 text-lg text-gray-900 font-light md:text-xl  md:w-1/3 md:ml-16 flex-initial">
                  <div className="font-semibold text-gray-600 text-sm">
                    UI Design
                  </div>
                <div className="font-bold mt-2 text-xl md:text-2xl hover:text-indigo-600">
                  <a href="https://louisedgar.medium.com/co-a-collaboration-messaging-platform-simplified-6ce26389345d" target="blank">
                    Co - a collaboration platform
                   </a>
                  </div>
                  <div className="mt-2 text-gray-700">
                    Co. is a web app that serve as collaboration tool. Users can
                    chat, create their own server and channel to make
                    collaboration with their peers easier.
                  </div>
                  
                  <div>
                    <a href="https://louisedgar.medium.com/co-a-collaboration-messaging-platform-simplified-6ce26389345d" target="blank">
                      <button className="bg-white border-indigo-500 text-gray-900 text-base font-semibold hover:bg-indigo-500 py-4 px-8 mt-8 rounded-lg md:w-auto md:py-4 md:px-4 rounded-lg md:mt-8 shadow-md bg-white hover:text-white">
                        Read case study
                      </button>
                    </a>
                  </div>
                  
                  </div>
                </div>
            </div>
          
            

            {/* AQimos */}
            {/* <div className=" justify-center mt-24 mb-0 mx-auto">
              <img src={aqimos} alt="" className="my-0 mx-auto"></img>
              <div className="md:max-w-4xl md:mx-auto md:flex md:flex-row md:flex-auto md:mt-4 md:items-start">
                <div className="mx-6 text-2xl font-semibold text-gray-900 mt-6 md:mx-0 md:mt-4 md:w-2/4 flex-initial">
                  AQimos
                </div>
                <div className="mx-6 mt-2 md:mt-4 text-lg text-gray-900 font-light md:text-xl md:w-2/4 md:mx-0 flex-initial">
                  AQimos is a software that monitor and track the air
                  composition. The devices surronding a particular area sent
                  data - regarding the wind, landscape, and air composition -
                  and arranged accordingly by the back-end that provides API.
                  The data then is processed by the front-end which will be used
                  by the person in charge to measure the quality of the air.
                  <div className="underline mt-3 text-1xl text-indigo-500 font-normal hover:text-indigo-800">
                    <Link to="/aqimos"><a href="/aqimos" >Read more</a></Link>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Formbuilder */}
            {/* <div className="justify-center mt-24 mb-0 mx-auto">
              <img src={formbuilder} alt="" className="my-0 mx-auto"></img>
              <div className="md:max-w-4xl md:mx-auto md:flex md:flex-row md:flex-auto md:mt-4 items-start">
                <div className="mx-6 text-2xl text-gray-900 font-semibold mt-6 md:mx-0 md:mt-4 md:w-2/4 flex-initial">
                  Formbuilder
                </div>
                <div className="mx-6 mt-2 md:mt-4 text-lg text-gray-900 font-light md:text-xl md:w-2/4 md:mx-0 flex-initial">
                  A formbuilding software for a corporate internal use. We are
                  responsible to create a system that ensure the users to
                  generate a consistent form - for any necessity - which not
                  only provide a positive experience for the builder but also
                  for the preparer.
                  <div className="underline mt-3 text-1xl text-indigo-500 font-normal hover:text-indigo-800">
                    <Link to="/formbuilder"><a href="/formbuilder">Read more </a></Link>
                  </div>
                </div>
              </div>
            </div> */}

            {/* iGauge Logger */}
            {/* <div className="justify-center mt-24 mb-0 mx-auto">
              <img src={mantis} alt="" className="my-0 mx-auto"></img>
              <div className="md:max-w-4xl md:mx-auto md:flex md:flex-row md:flex-auto md:mt-4 items-start">
                <div className="mx-6 text-2xl text-gray-900 font-semibold mt-6 md:mt-4 md:mx-0 md:w-2/4 flex-initial">
                  iGauge Logger
                </div>
                <div className="mx-6 mt-2 md:mt-4 text-lg text-gray-900 font-light md:text-xl md:w-2/4 md:mx-0 flex-initial">
                  iGauge Logger is more about water pressure and decision
                  making. It keeps track of water pressure for pipelines that
                  spread across the city. The data is used by the stakeholders
                  as a decision making consideration to control and maintain the
                  city water supply. Our work is to create an interface that
                  assist the stakeholders to make decision based on the
                  prioritized data being presented.
                  <div className="underline mt-3 text-1xl text-indigo-500 font-normal hover:text-indigo-800">
                    <Link to="/mantis"><a href="/mantis">Read more</a></Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
       
      
    );
  }
}

export default Content;
