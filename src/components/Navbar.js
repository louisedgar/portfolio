import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg bg-white border-gray-900 divide-gray-900 shadow-sm">
        <div className="container px-2 md:px-4 lg:px-16 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-gray-900"
              href="#"
            >
              Edgar<span className="font-medium text-gray-500">Louis</span>
            </a>
            <button
              className="text-gray-700 cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-gray-900"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <a
                        className="px-3 py-2 flex items-center text-md leading-snug text-gray-700 hover:opacity-75"
                        href="#work"
                        >
                            <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">Work</span>
                        </a>
                    </Link>
              </li>
                          <li className="nav-item">
                              <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                <a
                  className="px-3 py-2 flex items-center text-md leading-snug text-gray-700 hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className="ml-2 md:ml-6">Contact</span>
                                  </a>
                                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}