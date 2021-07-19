import React from "react";
import Hero from "../assets/hero-img.png";
import Hands from "../assets/3d-1.png";
import Mantis from "../assets/project-mantis.png";
import Aqimos from "../assets/project-aqimos.png";
import Formbuilder from "../assets/project-formbuilder.png";
import Co from "../assets/Co.png";
import { Link } from "react-scroll";
import Digify from "../assets/Digify.png";
import Profile from "../assets/MOOC-Profile.png";
import AR from "../assets/AR.gif";
import Checkout from "../assets/Checkout.png";
import Sneakers from "../assets/Sneakers-App.gif";
import Livestream from "../assets/Livestreaming-Web.png";
import Aqimosgif from "../assets/Aqimos.gif";
import Train from "../assets/Train.png";
import ThreeD from "../assets/3d.png";
import CheckoutImg from "../assets/checkout.jpg";
import Duo from "../assets/Duo.png";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <header className="w-full px-2 md:px-12 xl:px-0 text-gray-700 bg-gradient-to-r from-indigo-700 to-blue-500 ">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-5xl md:px-3">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-white select-none">
                edgar<span className="text-white">louis</span>
              </span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-white">
              <Link
                activeClass="active"
                to="process"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="md:mr-5 font-medium leading-6 text-gray-100 hover:text-gray-900 cursor-pointer">
                  Process
                </span>
              </Link>
              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="mr-5 ml-5 md:mr-5 md:ml-0 font-medium leading-6 text-gray-100 hover:text-gray-900 cursor-pointer">
                  Works
                </span>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="md:mr-5 font-medium leading-6 text-gray-100 hover:text-gray-900 cursor-pointer">
                  About
                </span>
              </Link>
            </nav>
          </div>
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <span className="inline-flex">
              <a
                href="mailto:hello@edgarlouis.com"
                className="md:inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-indigo-800 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent rounded-full hover:bg-indigo-800 hover:text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 hidden md:visible shadow-xl"
              >
                Contact me
              </a>
            </span>
          </div>
        </div>
      </header>
      <section className="px-2 pt-14 pb-24 bg-gradient-to-r from-indigo-700 to-blue-500 md:px-4 md:px-12 xl:px-0 ">
        <div className="container max-w-5xl items-center px-2 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl break-words font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline text-blue-200">
                    UI/UX Design {""}
                  </span>
                  <span className="block break-words text-white xl:inline">
                    for your product {""}
                  </span>
                  <span className="block break-words text-white xl:inline">
                    best experience. {""}
                  </span>
                </h1>
                <p className="mx-auto text-base text-indigo-200 font-medium sm:max-w-md lg:text-xl md:max-w-3xl">
                  I thrive on making usable, accessible, and desirable products
                  - by analyzing the root cause, defining the needs, solving the
                  right problem, and designing for the best experience.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl transform scale-125">
                <img src={Hero} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Works */}
      <div className="container relative max-w-5xl bg-white mx-auto mt-10 lg:mt-24 ">
        <div className="flex flex-wrap overflow-hidden lg:-mx-5">
          <div
            className="w-full overflow-hidden  md:absolute h-full lg:my-5 pb-10 lg:px-5 lg:w-1/2 z-0"
            id="works"
          >
            {/* <!-- Column Content --> */}
            <div className="mt-10 md:mt-8 max-w-md lg:transform lg:translate-y-8 order-1 md:order-none">
              <h4 className="text-4xl leading-8 font-bold text-gray-900 tracking-tight sm:leading-9 px-4 md:px-12 xl:px-0 ">
                Recent projects
              </h4>

              <p className="mt-6 text-lg font-medium mt-4 text-gray-900  px-4 md:px-12 xl:px-0">
                These are some projects that I've been successfully completed.
                You can read fully the breakdown of the design process in the
                study case published at{" "}
                <a
                  href="https://bootcamp.uxdesign.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900 text-bold"
                >
                  Bootcamp
                </a>{" "}
                - one of the UX largest publications at Medium.
              </p>
              <div className="mt-10 px-4 md:px-12 xl:px-0">
                <a
                  href="mailto:hello@edgarlouis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="py-4 px-6 text-white items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out rounded-full shadow-xl"
                  >
                    Contact for projects
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden lg:my-5 lg:px-5 lg:w-1/2 mt-8 lg:mt-96 z-10 order-3 md:order-none">
            {/* <!-- Column Content --> */}
            <a
              href="https://bootcamp.uxdesign.cc/case-study-water-pressure-monitoring-web-app-21be037e0097?gi=fbd5f8e56b0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Mantis}
                className="md:px-4 md:px-12 md:mt-32 xl:px-0 md:rounded-lg shadow-xl"
                alt=""
              ></img>
            </a>

            <div className="mt-8 mb-10 md:max-w-xs">
              <h5 className="text-xl leading-6 text-gray-900 font-bold px-4 md:px-12 xl:px-0">
                iGauge Logger
              </h5>

              <p className="text-lg mt-4 text-gray-900 px-4 md:px-12 xl:px-0">
                iGauge Logger is about water pressure and decision-making. It
                tracks the water pressure for pipelines that spread across the
                city. The data are used as a consideration to control and
                maintain the city water supply.
              </p>
              <div className="mt-4">
                <a
                  href="https://bootcamp.uxdesign.cc/case-study-water-pressure-monitoring-web-app-21be037e0097?gi=fbd5f8e56b0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-medium leading-6 text-indigo-600 hover:text-indigo-900 px-4 md:px-12 xl:px-0">
                    Read case study
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden lg:my-5 lg:px-5 lg:w-1/2 mt-12 lg:mt-0 order-2 md:order-none">
            {/* <!-- Column Content --> */}
            <a
              href="https://bootcamp.uxdesign.cc/case-study-revamping-a-language-learning-app-bdc41f0f3109"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Duo}
                className="md:px-4 md:px-12 xl:px-0 md:rounded-lg shadow-xl"
                alt=""
              ></img>
            </a>

            <div className="mt-8 mb-10 md:max-w-xs">
              <h5 className="text-xl leading-6 text-gray-900 font-bold px-4 md:px-12 xl:px-0">
                Revamping Duolingo
              </h5>

              <p className="text-lg mt-4 text-gray-900 px-4 md:px-12 xl:px-0">
                As the demand for language based eduacation platform is
                increased, we tried to listen to what the Duolingo users' needs
                and pain points, and did a revamp for it.
              </p>
              <div className="mt-4">
                <a
                  href="https://bootcamp.uxdesign.cc/case-study-revamping-a-language-learning-app-bdc41f0f3109"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-medium leading-6 text-indigo-600 hover:text-indigo-900 px-4 md:px-12 xl:px-0">
                    Read case study
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden  mt-8 lg:mt-32 lg:my-5 lg:px-5 lg:w-1/2 order-5 md:order-none  z-10">
            {/* <!-- Column Content --> */}
            <a
              href="https://louisedgar.medium.com/redesigning-aqimos-4f415ef6e39e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Aqimos}
                className="md:px-4 md:px-12 xl:px-0 md:rounded-lg shadow-xl"
                alt=""
              ></img>
            </a>

            <div className="mt-8 mb-10 md:max-w-xs">
              <h5 className="text-xl leading-6 text-gray-900 font-bold px-4 md:px-12 xl:px-0">
                AQimos
              </h5>

              <p className="text-lg mt-4 text-gray-900 px-4 md:px-12 xl:px-0">
                AQimos is a software that monitors air composition. The devices
                surrounding a particular area sent data accordingly by the
                back-end that provides API. The data then are processed by the
                front-end which will be used by the person in charge to measure
                the quality of the air.
              </p>
              <div className="mt-4">
                <a
                  href="https://louisedgar.medium.com/redesigning-aqimos-4f415ef6e39e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-medium leading-6 text-indigo-600 hover:text-indigo-900 px-4 md:px-12 xl:px-0">
                    Read case study
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden mt-8 lg:my-5 lg:px-5 lg:w-1/2 lg:mt-0 lg:transform lg:-translate-y-96 order-4 md:order-none">
            {/* <!-- Column Content --> */}
            <a
              href="https://bootcamp.uxdesign.cc/building-a-custom-form-builder-fb879ae53085"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Formbuilder}
                className="md:px-4 md:px-12 xl:px-0 md:rounded-lg shadow-xl"
                alt=""
              ></img>
            </a>

            <div className="mt-8 mb-10 md:max-w-xs">
              <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold px-4 md:px-12 xl:px-0">
                Formbuilder
              </h5>

              <p className="text-lg mt-4 text-gray-900 px-4 md:px-12 xl:px-0">
                A form building software for an organization's internal use. The
                design system ensures the users generate a consistent form - for
                any necessity - which not only provides a positive experience
                for the builder but also for the Preparer.
              </p>
              <div className="mt-4">
                <a
                  href="https://bootcamp.uxdesign.cc/building-a-custom-form-builder-fb879ae53085"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-medium leading-6 text-indigo-600 hover:text-indigo-900 px-4 md:px-12 xl:px-0">
                    Read case study
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {Other case studies} */}
      <div className="bg-gray-50 mt-12 md:mt-10 md:mb-10">
        <div className="container relative max-w-5xl bg-white mx-auto pt-10 md:pt-16 md:pb-10 pb-4 text-gray-900 bg-gray-50">
          <div className="header flex items-end justify-between content-center mb-4">
            <div className="title px-4 md:px-12 xl:px-0">
              <p className="text-base font-bold text-gray-400 mb-4">
                OTHER WORKS
              </p>
            </div>
          </div>
          <div className="flex grid grid-cols-2 pb-10 gap-x-10 gap-y-16">
            <div className="flex flex-col items-start col-span-2 md:col-span-1 space-y-3 px-4 md:px-12 xl:px-0">
              <a
                href="https://louisedgar.medium.com/co-a-collaboration-messaging-platform-simplified-6ce26389345d"
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-xl max-h-full"
                  src={Co}
                  alt="Co-apps-interface"
                />
              </a>
              <div className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>Case Study</span>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                <a
                  href="https://louisedgar.medium.com/co-a-collaboration-messaging-platform-simplified-6ce26389345d"
                  className="block hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Co. - a collaboration platform
                </a>
              </h2>
              <p className="text-base text-gray-900">
                Co. is a web app that serves as a collaboration tool. Users can
                chat, create their own server and channel to make collaboration
                with their peers easier.
              </p>
              <p className="pt-2 text-xs font-medium">
                <span className="mr-1">December 1, 2020</span> ·{" "}
                <span className="mx-1 text-gray-600">3 min. read</span>
              </p>
            </div>

            <div className="flex flex-col items-start  col-span-2 md:col-span-1 space-y-3  px-4 md:px-12 xl:px-0">
              <a
                href="https://louisedgar.medium.com/designing-a-minimal-checkout-page-327710b1d836"
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-xl max-h-full"
                  src={CheckoutImg}
                  alt='By <a href="https://unsplash.com/@yakimadesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jordan Rowland</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
                />
              </a>
              <div className="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>Article</span>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                <a
                  href="https://louisedgar.medium.com/designing-a-minimal-checkout-page-327710b1d836"
                  className="block hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A less overwhelming checkout page
                </a>
              </h2>
              <p className="text-base text-gray-900">
                The checkout page can be overwhelming. This is how I clean it.
              </p>
              <p className="pt-2 text-xs font-medium">
                <span className="mr-1">July 27, 2020</span> ·{" "}
                <span className="mx-1 text-gray-600">4 min. read</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Process */}
      <div className="w-full bg-white mt-16">
        <div className="container px-4 relative max-w-5xl bg-white mx-auto md:px-12 xl:px-0 ">
          <div className="grid lg:grid-flow-row-dense lg:grid-cols-3 lg:gap-12 lg:items-center ">
            <div
              className="order-last lg:col-start-2 lg:col-span-2 md:pl-20"
              id="process"
            >
              <h4 className="text-4xl  font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                The process that I use throughout the product development.
              </h4>
              <p className="mt-6 text-lg font-medium leading-6 mt-4 text-gray-900 ">
                Using design thinking and double diamond framework, several
                iterations are expected to meet the best end result.
              </p>
              <ul className="mt-10 lg:grid lg:grid-cols-2 lg:gap-10">
                <li>
                  <div>
                    <div>
                      <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold">
                        Research
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-900 ">
                        Generating and validating ideas in the earliest
                        development process, which involves the interview of
                        stakeholders and end-user, to decide the project
                        requirements.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div>
                      <h5 className="text-xl leading-6 text-gray-900  font-bold mt-8 lg:mt-0">
                        Design
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-900 ">
                        Making design solutions based on the insight found in
                        the research phase. The design process ensures close
                        collaboration with the team.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div>
                      <h5 className="text-xl leading-6 text-gray-900  font-bold mt-8 lg:mt-0">
                        Test
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-900 ">
                        Testing the prototype to ensure that the solution is
                        robust enough to be usable, desirable, and accessible.
                        Marking any pain point from the users to make
                        improvements to the given design.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div>
                      <h5 className="text-xl leading-6 text-gray-900  font-bold mt-8 lg:mt-0">
                        Deliver
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-900 ">
                        Delivering the solution to the engineering team and
                        continuously being involved in maintaining the product
                        quality.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order first -mx-4 pb-10 pt-0 md:py-0 md:-mx-12 relative lg:mt-0 lg:col-start-1 lg:col-span-1">
              <img
                src={Hands}
                alt="illustration"
                className="relative mx-auto rounded w-auto"
              />
            </div>
          </div>

          <div className=" leading-7 text-gray-900 bg-white my-16 md:my-32">
            <div className="max-w-5xl mx-auto border-solid ">
              <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
                <div className="box-border flex-1 text-center border-solid sm:text-left">
                  <h2 className="m-0 text-3xl font-extrabold sm:text-4xl leading-tight tracking-tight text-left text-gray-900 border-0 border-gray-200">
                    Have an idea in mind?
                  </h2>
                  <p className="mt-4 text-xl text-left text-gray-900 sm:text-2xl border-0 border-gray-200 ">
                    I will help you by providing the best design solution.
                  </p>
                </div>
                <div className="mt-10">
                  <a
                    href="mailto:hello@edgarlouis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full py-4 px-6 text-white items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out rounded-full shadow-xl"
                    >
                      Contact me
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Related Works */}
      <div className="w-full bg-white p-4 pt-10 md:pt-12 border-t-2 border-gray-100">
        <div className="max-w-5xl mx-auto mb-12 md:mb-24">
          <div className="header flex items-end justify-between mb-6">
            <div className="title">
              <p className="text-base font-bold text-gray-400 mb-4">
                UI EXPLORATIONS
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="overflow-hidden shadow-xl rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Train}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-xl rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Digify}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-xl rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Aqimosgif}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-xl rounded-lg m-auto">
              <div className="w-full block h-full">
                <img alt="" src={AR} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="overflow-hidden shadow-xl rounded-lg m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Profile}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden shadow-xl rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Sneakers}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden shadow-xl rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Checkout}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-xl rounded-lg m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Livestream}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="header text-center mt-16 lg:mt-24">
            <div className="title align-middle ">
              <a
                href="https://dribbble.com/edgarlouis"
                className="text-gray-400 rounded-full hover:text-gray-500 transform hover:bg-gray-100 px-4 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg md:text-xl font-semibold text-pink-500 inline-block align-middle ">
                  <i className="fab fa-dribbble-square text-lg md:text-2xl" />{" "}
                  Discover more on Dribbble{" "}
                  <i className="fas fa-angle-right text-base transform hover:translate-x-6" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="w-full bg-gradient-to-r from-indigo-700 to-blue-500">
        <div className="container max-w-5xl bg-transparent overflow-hidden relative mx-auto ">
          <div
            className="text-start w-full px-4 md:px-12 xl:px-0 md:w-1/2 py-12 lg:py-40 z-20"
            id="about"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Say hi and let's collaborate!</span>
              <span className="block text-white">Get in touch.</span>
            </h2>
            <p className="text-xl mt-4 text-indigo-200">
              Hi! I'm Ed - currently working as a freelance UI/UX designer. If
              you have any ideas for apps and have a passion for solving
              problems and make a good impact, don't hesitate to contact me.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md">
                <a href="mailto:hello@edgarlouis.com">
                  <button
                    type="button"
                    className="py-4 px-6 text-white items-center justify-center px-5 py-3 text-lg leading-6 font-bold rounded-full bg-indigo-400 hover:bg-indigo-800 focus:outline-none  transition duration-150 ease-in-out shadow-xl"
                  >
                    hello@edgarlouis.com
                  </button>
                </a>
              </div>
            </div>
          </div>
          <img
            src={ThreeD}
            className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0 transform scale-75"
            alt=""
          />
        </div>
      </div>
      {/* Footer */}
      <footer className="text-gray-200 bg-gray-800 body-font">
        <div className="container flex flex-col items-center py-8 mx-auto max-w-5xl sm:flex-row px-0 md:px-12 xl:px-0">
          <a
            href="/"
            className="text-xl font-black leading-none text-white select-none logo"
          >
            edgarlouis
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
            &copy; 2021 - Created by Edgar Louis
          </p>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://www.linkedin.com/in/edgarlouis/"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Linkedin</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://dribbble.com/edgarlouis"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Dribbble</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://louisedgar.medium.com/"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Medium</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
