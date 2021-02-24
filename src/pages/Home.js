import React from "react";
import Hero from "../assets/hero-img.png";
import Hands from "../assets/hands.png";
import Mantis from "../assets/project-mantis.png";
import Aqimos from "../assets/project-aqimos.png";
import Formbuilder from "../assets/project-formbuilder.png";
import Co from "../assets/project-co.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Digify from "../assets/Digify.png";
import Profile from "../assets/MOOC-Profile.png";
import AR from "../assets/AR.gif";
import Checkout from "../assets/Checkout.png";
import Sneakers from "../assets/Sneakers-App.gif";
import Nimble from "../assets/Nimble.png";
import Livestream from "../assets/Livestreaming-Web.png";
import Autoroom from "../assets/Autoroom.png";
import Move from "../assets/Move.png";
import ThreeD from "../assets/3d.png";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <header className="w-full px-2 md:px-12 xl:px-0 text-gray-700 bg-gradient-to-r from-indigo-700 to-blue-300 ">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-5xl md:px-3">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-white select-none">
                Edgar<span className="text-white">Louis</span>
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
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="mailto:hello@edgarlouis.com"
                className="md:inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 hidden md:visible"
              >
                Contact me
              </a>
            </span>
          </div>
        </div>
      </header>
      <section className="px-2 pt-14 pb-24 bg-gradient-to-r from-indigo-700 to-blue-300 md:px-4 md:px-12 xl:px-0 ">
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
                  I thrive in making usable, accessible, and desirable products
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

      {/* Process */}
      <div className="w-full bg-purple-50">
        <div className="container px-4 relative max-w-5xl bg-purple-50 pt-16 md:py-24 mx-auto md:px-12 xl:px-0">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="lg:col-start-2 md:pl-20" id="process">
              <h4 className="text-4xl leading-8 font-bold text-gray-900 dark:text-white tracking-tight sm:leading-9">
                Design process
              </h4>
              <p className="mt-6 text-lg font-semibold leading-6 mt-4 text-gray-800 dark:text-gray-300">
                The process that I used throughout the product development.
                Using design thinking and double diamond framework, several
                iterations are expected to meet the best end result.
              </p>
              <ul className="mt-16">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="10.5992"
                            cy="10.6532"
                            rx="8.59922"
                            ry="8.65324"
                            fill="white"
                          />
                          <path
                            opacity="0.4"
                            d="M20.6746 21.9553C20.3406 21.9444 20.023 21.807 19.7854 21.5705L17.749 19.1901C17.3124 18.7909 17.2767 18.1123 17.6689 17.6689C17.8525 17.4831 18.1022 17.3786 18.3626 17.3786C18.6229 17.3786 18.8726 17.4831 19.0562 17.6689L21.6173 19.7181C21.9862 20.0957 22.1 20.6562 21.9079 21.1492C21.7158 21.6422 21.2536 21.9754 20.728 22L20.6746 21.9553Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold">
                        Research
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300 font-medium">
                        Generating and validating ideas in the earliest
                        development process, that involves the stakeholders and
                        end-user.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M19.9926 18.9533H14.2983C13.7427 18.9533 13.2909 19.4123 13.2909 19.9766C13.2909 20.5421 13.7427 21 14.2983 21H19.9926C20.5481 21 21 20.5421 21 19.9766C21 19.4123 20.5481 18.9533 19.9926 18.9533Z"
                            fill="white"
                          />
                          <path
                            d="M10.309 6.90388L15.7049 11.264C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8345 7.72908 20.8452L4.23696 20.8882C4.05071 20.8904 3.88775 20.7614 3.84542 20.5765L3.05175 17.1258C2.91419 16.4916 3.05175 15.8358 3.45388 15.3306L9.88256 6.95548C9.98627 6.82111 10.1778 6.79746 10.309 6.90388Z"
                            fill="white"
                          />
                          <path
                            opacity="0.4"
                            d="M18.1206 8.66544L17.0804 9.96401C16.9756 10.0962 16.7872 10.1177 16.6571 10.0124C15.3925 8.98901 12.1544 6.36285 11.2559 5.63509C11.1247 5.52759 11.1067 5.33625 11.2125 5.20295L12.2157 3.95706C13.1258 2.78534 14.7131 2.67784 15.9936 3.69906L17.4645 4.87078C18.0677 5.34377 18.4698 5.96726 18.6074 6.62299C18.7661 7.3443 18.5968 8.0527 18.1206 8.66544Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold">
                        Design
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300 font-medium">
                        Making design solution based on the insight found in the
                        research phase. The design process ensure a close
                        collaboration with the team.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1528 5.55553C10.2037 5.65919 10.2373 5.77021 10.2524 5.88434L10.5308 10.0243L10.669 12.1051C10.6705 12.3191 10.704 12.5317 10.7687 12.736C10.9356 13.1326 11.3372 13.3846 11.7741 13.367L18.4313 12.9315C18.7196 12.9268 18.998 13.0346 19.2052 13.2313C19.3779 13.3952 19.4894 13.6096 19.5246 13.8402L19.5364 13.9802C19.2609 17.7949 16.4592 20.9767 12.6524 21.798C8.84555 22.6193 4.94186 20.8843 3.06071 17.5349C2.51839 16.5618 2.17965 15.4923 2.06438 14.389C2.01623 14.0624 1.99503 13.7325 2.00098 13.4025C1.99503 9.31273 4.90747 5.77696 8.98433 4.92457C9.47501 4.84816 9.95603 5.10792 10.1528 5.55553Z"
                            fill="white"
                          />
                          <path
                            opacity="0.4"
                            d="M12.87 2.00082C17.4299 2.11683 21.2623 5.39579 22 9.81229L21.993 9.84488L21.9728 9.89227L21.9756 10.0224C21.9652 10.1947 21.8986 10.3605 21.784 10.4945C21.6645 10.634 21.5013 10.729 21.3216 10.7659L21.212 10.7809L13.5312 11.2786C13.2757 11.3038 13.0213 11.2214 12.8314 11.052C12.673 10.9107 12.5718 10.7201 12.5432 10.5147L12.0277 2.84506C12.0187 2.81913 12.0187 2.79102 12.0277 2.76508C12.0347 2.55367 12.1278 2.35384 12.2861 2.21023C12.4443 2.06662 12.6547 1.9912 12.87 2.00082Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold">
                        Test
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300 font-medium">
                        Testing the protoype to ensure that the solution is
                        robust enough to be usable, desirable, and accessible.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z"
                            fill="white"
                          />
                          <path
                            opacity="0.4"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.01052 16.8078C2.81852 16.8078 2.62652 16.7348 2.48052 16.5878C2.18752 16.2948 2.18752 15.8208 2.48052 15.5278L3.84552 14.1618C4.13852 13.8698 4.61352 13.8698 4.90652 14.1618C5.19852 14.4548 5.19852 14.9298 4.90652 15.2228L3.54052 16.5878C3.39452 16.7348 3.20252 16.8078 3.01052 16.8078ZM6.77172 18.0002C6.57972 18.0002 6.38772 17.9272 6.24172 17.7802C5.94872 17.4872 5.94872 17.0132 6.24172 16.7202L7.60672 15.3542C7.89972 15.0622 8.37472 15.0622 8.66772 15.3542C8.95972 15.6472 8.95972 16.1222 8.66772 16.4152L7.30172 17.7802C7.15572 17.9272 6.96372 18.0002 6.77172 18.0002ZM7.02542 21.5682C7.17142 21.7152 7.36342 21.7882 7.55542 21.7882C7.74742 21.7882 7.93942 21.7152 8.08542 21.5682L9.45142 20.2032C9.74342 19.9102 9.74342 19.4352 9.45142 19.1422C9.15842 18.8502 8.68342 18.8502 8.39042 19.1422L7.02542 20.5082C6.73242 20.8012 6.73242 21.2752 7.02542 21.5682Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold">
                        Deliver
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300 font-medium">
                        Delivering the solution to the engineering team and
                        continuously being involved in maintaining the product.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="-mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
              <img
                src={Hands}
                alt="illustration"
                className="relative mx-auto rounded w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Works */}
      <div className="container pt-16 md:pt-12 relative max-w-5xl h-full bg-white dark:bg-gray-800 md:mt-12 mx-auto ">
        <div className="max-w-md" id="works">
          <h4 className="text-4xl leading-8 font-bold text-gray-900 dark:text-white tracking-tight sm:leading-9 px-4 md:px-12 xl:px-0">
            Recent projects
          </h4>
          <p className="mt-6 text-lg font-semibold leading-6 mt-4 text-gray-800 dark:text-gray-300 px-4 md:px-12 xl:px-0">
            These are some projects that I've been succesfully completed for my
            clients. You can read fully the breakdown of the design process in
            the study case published at Bootcamp - one of the UX largest
            publication at Medium.
          </p>
        </div>

        <div className="flex flex-wrap overflow-hidden pt-16 pb-16 md:pt-24 md:pb-12 lg:-mx-5">
          <div className="w-full overflow-hidden lg:my-5 lg:px-5 lg:w-1/2 md:transform md:translate-y-12">
            {/* <!-- Column Content --> */}

            <img
              src={Mantis}
              className="md:px-4 md:px-12 xl:px-0 md:rounded-lg"
              alt=""
            ></img>

            <div className="mt-8 mb-10 max-w-xs">
              <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold px-4 md:px-12 xl:px-0">
                iGauge Logger
              </h5>

              <p className="text-base font-medium leading-6 mt-4 text-gray-500 dark:text-gray-300 px-4 md:px-12 xl:px-0">
                iGauge Logger is more about water pressure and decision making.
                It tracks the water pressure for pipelines that spread across
                the city. The data is used as a consideration to control and
                maintain the city water supply.
              </p>
              <div className="mt-4">
                <a
                  href="https://bootcamp.uxdesign.cc/case-study-water-pressure-monitoring-web-app-21be037e0097?gi=fbd5f8e56b0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-medium leading-6 text-indigo-600 hover:text-indigo-300 px-4 md:px-12 xl:px-0">
                    Read case study
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden mt-12 md:mt-0 lg:my-5 lg:px-5 lg:w-1/2 md:transform md:-translate-y-28">
            {/* <!-- Column Content --> */}

            <img
              src={Formbuilder}
              className="md:px-4 md:px-12 xl:px-0 md:rounded-lg"
              alt=""
            ></img>

            <div className="mt-8 mb-10 max-w-xs">
              <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold px-4 md:px-12 xl:px-0">
                Formbuilder
              </h5>

              <p className="text-base font-medium leading-6 mt-4 text-gray-500 dark:text-gray-300 px-4 md:px-12 xl:px-0">
                A formbuilding software for a organization internal use. The
                design system ensures the users to generate a consistent form -
                for any necessity - which not only provide a positive experience
                for the builder but also for the preparer.
              </p>
              <div className="mt-4">
                <a
                  href="https://bootcamp.uxdesign.cc/building-a-custom-form-builder-fb879ae53085"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-medium leading-6 text-indigo-600 hover:text-indigo-300 px-4 md:px-12 xl:px-0">
                    Read case study
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden mt-12 md:mt-0 lg:my-5 lg:px-5 lg:w-1/2 md:transform md:translate-y-12">
            {/* <!-- Column Content --> */}

            <img
              src={Aqimos}
              className="md:px-4 md:px-12 xl:px-0 md:rounded-lg"
              alt=""
            ></img>

            <div className="mt-8 mb-10 max-w-xs">
              <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold px-4 md:px-12 xl:px-0">
                AQimos
              </h5>

              <p className="text-base font-medium leading-6 mt-4 text-gray-500 dark:text-gray-300 px-4 md:px-12 xl:px-0">
                AQimos is a software that monitor the air composition. The
                devices surronding a particular area sent data accordingly by
                the back-end that provides API. The data then is processed by
                the front-end which will be used by the person in charge to
                measure the quality of the air.
              </p>
              <div className="mt-4">
                <a
                  href="https://louisedgar.medium.com/redesigning-aqimos-4f415ef6e39e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-medium leading-6 text-indigo-600 hover:text-indigo-300 px-4 md:px-12  xl:px-0">
                    Read case study
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden mt-12 md:mt-0 lg:my-5 lg:px-5 lg:w-1/2 md:transform md:-translate-y-28">
            {/* <!-- Column Content --> */}

            <img
              src={Co}
              className="md:px-12 xl:px-0 md:rounded-lg"
              alt=""
            ></img>

            <div className="mt-8 max-w-xs">
              <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold px-4 md:px-12 xl:px-0">
                Co
              </h5>

              <p className="text-base font-medium leading-6 mt-4 text-gray-500 dark:text-gray-300 px-4 md:px-12 xl:px-0">
                Co. is a web app that serve as collaboration tool. Users can
                chat, create their own server and channel to make collaboration
                with their peers easier.
              </p>
              <div className="mt-4">
                <a
                  href="https://louisedgar.medium.com/co-a-collaboration-messaging-platform-simplified-6ce26389345d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-medium leading-6 text-indigo-600 hover:text-indigo-300 px-4 md:px-12 xl:px-0">
                    Read case study
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Works */}

      <div className="w-full bg-white p-12 border-t-2 border-gray-100">

        <div className="max-w-5xl mx-auto mb-12 md:mb-24">

          <div className="header flex items-end justify-between mb-6">
            <div className="title">
              <p className="text-base font-bold text-gray-400 mb-4">
                UI CONCEPTS
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="overflow-hidden shadow-lg rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Digify}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Profile}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Nimble}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg m-auto">
              <div className="w-full block h-full">
                <img alt="" src={AR} className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="overflow-hidden shadow-lg rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Sneakers}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Checkout}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Livestream}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img
                  alt=""
                  src={Autoroom}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg  m-auto">
              <div className="w-full block h-full">
                <img alt="" src={Move} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full bg-indigo-600">
        <div className="container max-w-5xl bg-indigo-600 overflow-hidden relative mx-auto ">
          <div
            className="text-start w-full px-4 md:px-12 xl:px-0 md:w-1/2 py-12 lg:py-20 z-20"
            id="about"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Say hi and let's collaborate!</span>
              <span className="block text-white">Get in touch.</span>
            </h2>
            <p className="text-xl mt-4 text-indigo-200">
              Hi! I'm Ed - currently working as a freelance UI/UX designer. If
              you have any idea for apps, and have a passion in solving problems
              and make a good impact, don't hesitate to contact me.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <a href="mailto:hello@edgarlouis.com">
                  <button
                    type="button"
                    className="py-4 px-6 text-white items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out"
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
            EdgarLouis
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
