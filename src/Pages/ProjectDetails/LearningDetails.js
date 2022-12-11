import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LearningDetails.module.css";
const LearningDetails = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      {/* navbar */}
      <div>
        <div className={`${navbar ? " nav-hide" : "navbar"} bg-black`}>
          <div className="navbar-start lg:hidden ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center  hidden lg:flex lg:ml-10">
            <ul className="menu menu-horizontal p-0 space-x-3">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/#projects"}>Projects</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* site details */}
      <div className="site-details max-w-7xl mx-auto">
        <div>
          <h2 className="text-center text-3xl mt-5 underline mb-4">
            Project Name: Learning Hub
          </h2>
          {/* site pics */}
          <div>
            <p>
              <strong className="underline">Preview :</strong>
              <div className="flex project-images flex-col items-center justify-center h-[100%] space-y-10">
                <div className="shadow-lg">
                  <img
                    style={{ width: "567px", height: "400px" }}
                    src="https://i.ibb.co/9Hz2PZf/Screenshot-from-2022-12-11-09-24-45.png"
                    alt=""
                  />
                </div>
                <div className="shadow-lg">
                  <img
                    style={{ width: "567px", height: "400px" }}
                    src="https://i.ibb.co/PY7D0ML/Screenshot-from-2022-12-11-09-25-22.png"
                    alt=""
                  />
                </div>
                <div className="shadow-lg">
                  <img
                    style={{ width: "567px", height: "400px" }}
                    src="https://i.ibb.co/Z2HDtNF/Screenshot-from-2022-12-11-09-25-50.png"
                    alt=""
                  />
                </div>
                <div className="shadow-lg">
                  <img
                    style={{ width: "567px", height: "400px" }}
                    src="https://i.ibb.co/R3tYDVs/Screenshot-from-2022-12-11-09-27-03.png"
                    alt=""
                  />
                </div>
              </div>
            </p>
          </div>
          {/* features */}
          <div className="mt-10">
            <p>
              <strong className="underline">Features :</strong>

              <div className="flex justify-center">
                <ul style={{ listStyle: "square" }}>
                  <li>That site has some options like Blog,Courses,FAQ</li>
                  <li>
                    When user clicks on Courses , it will redirect to a new page
                  </li>
                  <li>
                    When user clicks on any card or on the sidebar options , it
                    will go detail page.
                  </li>
                  <li>From detail page user can checkout any item</li>
                  <li>User can login and register</li>
                </ul>
              </div>
              {/* </div> */}
            </p>
          </div>
          {/* Links */}
          <div className="mt-10 mb-20">
            <p>
              <strong className="underline">Explore :</strong>

              <div className="flex justify-center mr-20">
                <div>
                  <p>
                    <strong>Live Link: </strong>
                    <a href="https://auth-router-context-3dfed.web.app/">
                      <span className="underline">
                        https://auth-router-context-3dfed.web.app/
                      </span>
                    </a>
                  </p>
                  <p>
                    <strong>Client Link: </strong>
                    <a href="https://github.com/Marufhossain112/learning-platform-client">
                      <span className="underline">
                        https://github.com/Marufhossain112/learning-platform-client
                      </span>
                    </a>
                  </p>
                  <p>
                    <strong>Server Link: </strong>
                    <a href="https://github.com/Marufhossain112/learning-platform-server">
                      <span className="underline">
                        https://github.com/Marufhossain112/learning-platform-server
                      </span>
                    </a>
                  </p>
                </div>
              </div>
              {/* </div> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LearningDetails;
