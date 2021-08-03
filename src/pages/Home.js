import React from "react";
import Mantis from "../assets/project-mantis.png";
import Aqimos from "../assets/project-aqimos.png";
import Formbuilder from "../assets/project-formbuilder.png";
import Co from "../assets/Co.png";
import { Link } from "react-scroll";
import Digify from "../assets/Digify.png";
import Profile from "../assets/MOOC-Profile.png";
import AR from "../assets/AR.gif";
import Sneakers from "../assets/Sneakers-App.gif";
import Aqimosgif from "../assets/Aqimos.gif";
import Autoroom from "../assets/Autoroom.png";
import CheckoutImg from "../assets/checkout.jpg";
import Logo from "../assets/logo-white.svg";
import Research from "../assets/research.svg";
import Design from "../assets/design.svg";
import Test from "../assets/test.svg";
import Deliver from "../assets/deliver.svg";
import Duo from "../assets/duolingo.png";

export default function Home() {
  return (
    <div className="overflow-hidden font-body">
      {/* Hero */}
      <header className="w-full px-2 md:px-12 xl:px-0 text-white border-b border-opacity-50 border-white absolute">
        <div className="container flex flex-row lg:content-center lg:items-center lg:justify-between lg:py-5 mx-auto md:flex-row max-w-5xl md:px-3">
          <div className="relative flex flex-row">
            <a
              href="/"
              className="flex items-center mb-5 mt-4 px-2 lg:px-0 lg:mt-0 font-medium lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <img src={Logo} alt=""></img>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base space-x-8 md:mb-0 md:pl-8 lg:ml-36 xl:ml-64 invisible lg:visible absolute lg:relative">
              <Link
                activeClass="active"
                to="process"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="md:mr-5 font-medium leading-6 text-white hover:text-opacity-50 cursor-pointer ">
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
                <span className="mr-5 ml-5 md:mr-5 md:ml-0 font-medium leading-6 text-white hover:text-opacity-50 cursor-pointer">
                  Works
                </span>
              </Link>
              <Link
                activeClass="active"
                to="other-works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="mr-5 ml-5 md:mr-5 md:ml-0 font-medium leading-6 text-white hover:text-opacity-50 cursor-pointer">
                  Other works
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
                <span className="md:mr-5 font-medium leading-6 text-white hover:text-opacity-50 cursor-pointer">
                  About
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <section className="pt-36 pb-24 lg:pt-48 lg:pb-48 bg-hero-image bg-auto lg:bg-cover lg:bg-center bg-no-repeat h-full xl:px-0 text-left">
        <div className="container max-w-5xl items-center px-4 mx-auto lg:px-20 xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 ">
              <div className="w-full lg:pb-6 space-y-6 lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-10  lg:pr-0 pb-0">
                <div className="break-words font-extrabold leading-normal lg:leading-snug xl:leading-snug text-white text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Improving your digital product’s{" "}
                  <span className="text-primary">user experience</span>
                </div>
                <div className="inline-flex items-center justify-end w-auto">
                  <span className="inline-flex mt-8">
                    <a
                      href="mailto:hello@edgarlouis.com"
                      className="justify-center w-full py-4 px-6 font-bold leading-6 whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-xl text-white bg-primary hover:opacity-75 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 text-lg md:text-base"
                    >
                      Contact me
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Approach */}
      <div className="container relative max-w-5xl mx-auto bg-white text-center mt-16 lg:mt-20 border-b-2 pb-16 lg:pb-0 lg:border-none">
        <div className="flex flex-col" id="process">
          <span className="text-3xl lg:text-4xl font-extrabold text-dark">
            My Approach
          </span>
          <div className="flex flex-col lg:flex-row justify-between gap-10 mt-8 lg:mt-16 px-12 lg:px-20 xl:px-0 text-dark">
            <div className="text-center">
              <img src={Research} alt="" className="mx-auto"></img>
              <div className="text-lg font-extrabold mt-4">Research</div>
              <div className="font-semibold mt-2">
                Find out the root problems and talk to the users
              </div>
            </div>
            <div className="text-center">
              <img src={Design} alt="" className="mx-auto"></img>
              <div className="text-lg font-extrabold mt-4">Design</div>
              <div className="font-semibold mt-2">
                Sketch out the product to align the user needs
              </div>
            </div>
            <div className="text-center">
              <img src={Test} alt="" className="mx-auto"></img>
              <div className="text-lg font-extrabold mt-4">Test</div>
              <div className="font-semibold mt-2">
                Validate the assumptions and iterate
              </div>
            </div>
            <div className="text-center">
              <img src={Deliver} alt="" className="mx-auto"></img>
              <div className="text-lg font-extrabold mt-4">Deliver</div>
              <div className="font-semibold mt-2">
                Hand off the solution to the developers
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Works */}
      <div className="container relative max-w-5xl bg-white mx-auto mt-16 lg:mt-32 ">
        <div className="flex flex-wrap overflow-hidden lg:-mx-5">
          <div
            className="w-full overflow-hidden  md:absolute h-full lg:my-5 pb-10 lg:px-5 lg:w-1/2 z-0"
            id="works"
          >
            {/* <!-- Column Content --> */}
            <div className=" max-w-md order-1 md:order-none">
              <div className="text-3xl lg:text-4xl leading-8 font-extrabold text-dark sm:leading-9 px-4 lg:pl-20 xl:px-0 ">
                Case studies
              </div>
              <p className="mt-6 text-xl leading-8 text-dark font-medium mt-4 px-4 lg:pl-20 xl:px-0">
                These are some projects that I've been successfully completed.
                You can read fully the breakdown of the design process in the
                study case published at{" "}
                <a
                  href="https://bootcamp.uxdesign.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-dark font-semibold"
                >
                  Bootcamp
                </a>{" "}
                - one of the largest UX publications at Medium.
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 mt-8 lg:mt-64 lg:transform lg:translate-y-32 z-10 order-3 md:order-none">
            {/* <!-- Column Content --> */}
            <a
              href="https://bootcamp.uxdesign.cc/case-study-water-pressure-monitoring-web-app-21be037e0097?gi=fbd5f8e56b0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Mantis}
                className="px-4 lg:pl-24 lg:pr-10 xl:pl-5 xl:pr-10"
                alt=""
              ></img>
            </a>

            <div className="mt-8 mb-10">
              <h5 className="text-2xl leading-6 text-dark font-extrabold px-4 lg:pl-24 lg:pr-10 xl:pl-5 xl:pr-10">
                iGauge Logger
              </h5>

              <p className="text-xl leading-8 mt-4 text-dark font-medium px-4 lg:pl-24 lg:pr-10 xl:pl-5 xl:pr-10">
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
                  <span className="inline-flex items-end justify-center text-base font-extrabold leading-6 text-primary hover:text-dark px-4 lg:pl-24 lg:pr-10 xl:pl-5 xl:pr-10">
                    Read case study
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
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 mt-8 lg:mt-0 order-2 md:order-none">
            {/* <!-- Column Content --> */}
            <a
              href="https://bootcamp.uxdesign.cc/case-study-revamping-a-language-learning-app-bdc41f0f3109"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Duo}
                className="px-4 lg:pr-24 lg:pl-10 xl:pr-5 xl:pl-10"
                alt=""
              ></img>
            </a>

            <div className="mt-8 mb-10">
              <h5 className="text-2xl leading-6 text-dark font-extrabold px-4 lg:pr-24 lg:pl-10 xl:pr-5 xl:pl-10">
                Revamping Duolingo
              </h5>

              <p className="text-xl leading-8 mt-4 text-dark font-medium px-4 lg:pr-24 lg:pl-10 xl:pr-5 xl:pl-10">
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
                  <span className="inline-flex items-end justify-center text-base font-extrabold leading-6 text-primary hover:text-dark px-4 lg:pr-24 lg:pl-10 xl:pr-5 xl:pl-10">
                    Read case study
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
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden mt-8 lg:mt-48 lg:w-1/2 order-5 md:order-none z-10">
            {/* <!-- Column Content --> */}
            <a
              href="https://louisedgar.medium.com/redesigning-aqimos-4f415ef6e39e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Aqimos}
                className="px-4 lg:pl-24 lg:pr-10 xl:pl-5 xl:pr-10"
                alt=""
              ></img>
            </a>

            <div className="mt-8 mb-10">
              <h5 className="text-2xl leading-6 text-dark font-extrabold px-4 lg:pl-24 lg:pl-10 xl:pl-5 xl:pr-10">
                AQimos
              </h5>

              <p className="text-xl leading-8 mt-4 text-dark font-medium px-4 lg:pl-24 lg:pr-10 xl:pl-5 xl:pr-10">
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
                  <span className="inline-flex items-end justify-center text-base font-extrabold leading-6 text-primary hover:text-dark px-4 lg:pl-24 lg:pr-10 xl:pl-5 xl:pr-10">
                    Read case study
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
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden mt-8 lg:w-1/2 lg:mt-48 lg:transform lg:-translate-y-96 order-4 md:order-none">
            {/* <!-- Column Content --> */}
            <a
              href="https://bootcamp.uxdesign.cc/building-a-custom-form-builder-fb879ae53085"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Formbuilder}
                className="px-4 lg:pr-24 lg:pl-10 xl:pr-5 xl:pl-10"
                alt=""
              ></img>
            </a>

            <div className="mt-8 mb-10">
              <h5 className="text-2xl leading-6 text-dark font-extrabold px-4 lg:pr-24 lg:pl-10 xl:pr-5 xl:pl-10">
                Formbuilder
              </h5>

              <p className="text-xl leading-8 mt-4 text-dark font-medium px-4 lg:pr-24 lg:pl-10 xl:pr-5 xl:pl-10">
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
                  <span className="inline-flex items-end justify-center text-base font-extrabold leading-6 text-primary hover:text-dark px-4 lg:pr-24 lg:pl-10 xl:pr-5 xl:pl-10">
                    Read case study
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
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="max-w-5xl bg-bg-cta bg-cover bg-center bg-no-repeat h-full rounded-xl mx-4 lg:mx-20 xl:mx-auto">
        <div className="leading-7 text-white my-16 md:mt-10 md:mb-24 px-8 py-16 lg:px-24 xl:py-24">
          <div className="max-w-5xl mx-auto border-solid">
            <div className="flex flex-col items-center leading-7 text-white border-0 border-gray-200 lg:items-center lg:flex-row">
              <div className="box-border flex-1 text-center border-solid sm:text-left">
                <h2 className="m-0 text-3xl font-extrabold sm:text-4xl leading-tight tracking-tight text-center lg:text-left text-white border-0 border-gray-200">
                  Have an idea in mind?
                </h2>
                <p className="mt-4 text-xl text-center lg:text-left text-white sm:text-2xl border-0 border-gray-200 ">
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
                    className="w-full py-4 px-6 border border-transparent text-base leading-6 font-bold text-primary bg-white hover:opacity-75 transition duration-150 ease-in-out rounded-xl"
                  >
                    Contact me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {Other case studies} */}
      <div className="bg-gray-50 mt-12 lg:mt-10 lg:mb-10">
        <div className="container relative max-w-5xl mx-auto pt-10 lg:pt-16 lg:pb-10 pb-4 text-dark bg-gray-50">
          <div className="header flex items-end justify-between content-center mb-4">
            <div className="title px-4 lg:px-20 xl:px-0" id="other-works">
              <p className="text-xl lg:text-2xl font-extrabold text-dark mb-4">
                Other works
              </p>
            </div>
          </div>
          <div className="flex grid grid-cols-2 pb-10 lg:gap-x-4 xl:gap-x-10 gap-y-16">
            <div className="flex flex-col items-start col-span-2 md:col-span-1 space-y-3 px-4 lg:pl-20 xl:px-0">
              <a
                href="https://louisedgar.medium.com/co-a-collaboration-messaging-platform-simplified-6ce26389345d"
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-full"
                  src={Co}
                  alt="Co-apps-interface"
                />
              </a>
              <div className="bg-primary flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-semibold uppercase text-white inline-block">
                <span>Design</span>
              </div>
              <h2 className="text-lg font-extrabold text-dark sm:text-xl md:text-2xl">
                <a
                  href="https://louisedgar.medium.com/co-a-collaboration-messaging-platform-simplified-6ce26389345d"
                  className="block hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Co. - a collaboration platform
                </a>
              </h2>
              <p className="text-lg text-dark font-medium">
                Co. is a web app that serves as a collaboration tool. Users can
                chat, create their own server and channel to make collaboration
                with their peers easier.
              </p>
              <p className="pt-2 text-xs font-medium">
                <span className="mr-1">December 1, 2020</span> ·{" "}
                <span className="mx-1 text-dark">3 min. read</span>
              </p>
            </div>

            <div className="flex flex-col items-start  col-span-2 md:col-span-1 space-y-3  px-4 lg:pr-20 xl:px-0">
              <a
                href="https://louisedgar.medium.com/designing-a-minimal-checkout-page-327710b1d836"
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-full"
                  src={CheckoutImg}
                  alt='By <a href="https://unsplash.com/@yakimadesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jordan Rowland</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
                />
              </a>
              <div className="bg-primary flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-semibold uppercase text-white inline-block">
                <span>Design</span>
              </div>
              <h2 className="text-lg font-extrabold text-dark sm:text-xl md:text-2xl">
                <a
                  href="https://louisedgar.medium.com/designing-a-minimal-checkout-page-327710b1d836"
                  className="block hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A less overwhelming checkout page
                </a>
              </h2>
              <p className="text-lg font-medium text-dark">
                The checkout page can be overwhelming. This is how I clean it.
              </p>
              <p className="pt-2 text-xs font-medium">
                <span className="mr-1">July 27, 2020</span> ·{" "}
                <span className="mx-1 text-dark">4 min. read</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Works */}
      <div className="w-full bg-white p-4 pt-16 lg:pt-16">
        <div className="max-w-5xl mx-auto mb-12 lg:mb-24 lg:mx-16 xl:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="overflow-hidden rounded-lg m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Digify}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Aqimosgif}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-lg m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Profile}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-lg m-auto">
              <div className="w-full block h-full">
                <img alt="" src={AR} className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="overflow-hidden rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Sneakers}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Autoroom}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="header text-center mt-16 lg:mt-24">
            <div className="title align-middle ">
              <a
                href="https://dribbble.com/edgarlouis"
                className="text-dark rounded-full hover:text-gray-500 transform hover:bg-gray-100 px-4 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg md:text-xl font-semibold text-pink inline-block align-middle items-center">
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
      <div className="bg-bg-footer bg-auto lg:bg-cover lg:bg-center bg-no-repeat">
        <div className="container max-w-5xl bg-transparent overflow-hidden relative lg:mx-16 xl:mx-auto ">
          <div
            className="text-left max-w-md px-4 pt-10 pb-16 lg:py-20 xl:px-0 xl:pt-16 xl:pb-32 z-20"
            id="about"
          >
            <span className="block mt-4 text-3xl leading-normal lg:text-4xl font-extrabold text-white xl:leading-normal">
              Say hi and let's collaborate!
            </span>

            <p className="text-xl mt-4 leading-8 text-white font-medium ">
              Hi! I'm Ed, currently working as a freelance UI/UX designer. If
              you have any ideas for apps and have a passion for solving
              problems and make a good impact, don't hesitate to contact me.
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-white bg-accent body-font">
        <div className="container flex flex-col lg:items-center py-10 lg:py-16 mx-auto max-w-xl text-left lg:text-center px-4 xl:px-0">
          <div className="block mt-4 text-3xl leading-normal lg:text-4xl font-extrabold text-white xl:leading-normal">
            Get in touch. You can also find me on my social media here.
          </div>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md">
              <a href="mailto:hello@edgarlouis.com">
                <button
                  type="button"
                  className="py-4 px-6 text-primary items-center justify-center leading-6 font-bold rounded-xl bg-white hover:opacity-75 focus:outline-none  transition duration-150 ease-in-out"
                >
                  hello@edgarlouis.com
                </button>
              </a>
            </div>
          </div>
          <div>
            <span className="block text-left lg:inline-flex lg:justify-center my-16 space-y-4 lg:space-x-16 sm:justify-start">
              <a
                href="https://www.linkedin.com/in/edgarlouis/"
                className="text-white hover:text-opacity-50 inline-flex items-end justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                <span className="text-white hover:text-opacity-50 ml-4">
                  linkedin.com/in/edgarlouis
                </span>
              </a>
              <a
                href="https://dribbble.com/edgarlouis"
                className="text-white hover:text-opacity-50 inline-flex items-end justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                <span className="text-white hover:text-opacity-50 ml-4">
                  dribbble.com/edgarlouis
                </span>
              </a>
              <a
                href="https://louisedgar.medium.com/"
                className="text-white hover:text-opacity-50 inline-flex items-end justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                <span className="text-white hover:text-opacity-50 ml-4">
                  louisedgar.medium.com
                </span>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
