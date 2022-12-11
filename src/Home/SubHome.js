import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const SubHome = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default SubHome;
