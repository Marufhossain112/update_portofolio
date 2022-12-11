import React, { useState } from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
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
      <div>
        <img
          style={{ width: "100%", height: "90vh" }}
          src="https://i.ibb.co/Z6rLvB9/neon-style-coming-soon-glowing-background-design-1017-25516.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blogs;
