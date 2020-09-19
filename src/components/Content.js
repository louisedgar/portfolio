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
          <div className="w-11/12 justify-center mt-20 md:mt-12 mb-0 mx-auto">
            <img src={aqimos} alt="" className="my-0 mx-auto"></img>
            <div className="md:flex md:flex-row md:flex-auto  md:mt-4 md:mx-20 md:items-start">
              <div className="text-2xl font-semibold text-gray-900 mt-6 md:mt-4 md:w-2/4 flex-initial">
                Aqimos
              </div>
              <div className="mt-4 text-gray-900 md:w-2/4 flex-initial">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren.
                <div className="mt-3 text-1xl text-indigo-500">
                  <a href="#">
                    Read more <i className="fas fa-angle-right"></i>
                  </a>
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren.
                <div className="mt-3 text-1xl text-indigo-500">
                  <a href="#">
                    Read more <i className="fas fa-angle-right"></i>
                  </a>
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren.
                <div className="mt-3 text-1xl text-indigo-500">
                  <a href="#">
                    Read more <i className="fas fa-angle-right"></i>
                  </a>
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
