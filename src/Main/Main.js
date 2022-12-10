import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="banner">
      <div className="h-[100%]  flex flex-col items-center justify-center">
        <h2 className="text-5xl text-rose-300">Welcome</h2>
        <h3>
          <span className="text-3xl">I am</span> Maruf Hossain
        </h3>
        <h4 className="text-2xl">I am a Web Developer</h4>
        <a
          rel="noreferrer"
          href="https://drive.google.com/file/d/10FnCfG0kBfDpxA6-xdrDpFTteuKgUYjJ/view?usp=sharing"
          target={"_blank"}
        >
          <button className="btn btn-outline mt-2 text-white">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Main;
