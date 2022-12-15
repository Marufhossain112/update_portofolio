import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MotoDetails.module.css";
const MotoDetails = () => {
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/#projects"}>Projects</Link>
                </li>
                <li>
                  <Link to={"/#about"}>About</Link>
                </li>
                <li>
                  <Link to={"/#contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center  hidden lg:flex lg:ml-10">
            <ul
              className={`${
                navbar ? "" : "hidden"
              } menu menu-horizontal p-0 space-x-3`}
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/#projects"}>Projects</Link>
              </li>
              <li>
                <Link to={"/#about"}>About</Link>
              </li>
              <li>
                <Link to={"/#contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* site details */}
      <div className="site-details max-w-7xl mx-auto">
        <div>
          <h2 className="text-center text-3xl mt-5 underline mb-4">
            Project Name: Moto Rangers
          </h2>
          {/* site pics */}
          <div>
            <p>
              <strong className="underline">Preview :</strong>
              <div className="flex project-images flex-col items-center justify-center h-[100%] space-y-10">
                <div className="shadow-lg">
                  <img
                    style={{ width: "567px", height: "400px" }}
                    src="https://i.ibb.co/hmJT5L3/Screenshot-from-2022-12-11-09-08-01.png"
                    alt=""
                  />
                </div>
                <div className="shadow-lg">
                  <img
                    style={{ width: "567px", height: "400px" }}
                    src="https://i.ibb.co/GdKL7Pp/Screenshot-from-2022-12-11-09-08-46.png"
                    alt=""
                  />
                </div>
                <div className="shadow-lg">
                  <img
                    style={{ width: "567px", height: "400px" }}
                    src="https://i.ibb.co/XjrN51Z/Screenshot-from-2022-12-11-09-10-23.png"
                    alt=""
                  />
                </div>
                <div className="shadow-lg">
                  <img
                    style={{ width: "567px", height: "400px" }}
                    src="https://i.ibb.co/R0rJTnY/Screenshot-from-2022-12-11-09-09-41.png"
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
                  <li>User can login and register</li>
                  <li>
                    Email-password and google authentication system implemented
                  </li>
                  <li>Product categories are shown on homepage</li>
                  <li>Seller can add a Product</li>
                  <li>Buyer can book order</li>
                  <li>
                    Admin can see all seller and buyer account and he can delete
                    any if he wants.
                  </li>
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
                    <a href="https://moto-rangers.web.app/">
                      <span className="underline">
                        https://moto-rangers.web.app/
                      </span>
                    </a>
                  </p>
                  <p>
                    <strong>Client Link: </strong>
                    <a href="https://github.com/Marufhossain112/moto-rangers">
                      <span className="underline">
                        https://github.com/Marufhossain112/moto-rangers
                      </span>
                    </a>
                  </p>
                  <p>
                    <strong>Server Link: </strong>
                    <a href="https://github.com/Marufhossain112/moto-rangers_server">
                      <span className="underline">
                        https://github.com/Marufhossain112/moto-rangers_server
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
export default MotoDetails;
