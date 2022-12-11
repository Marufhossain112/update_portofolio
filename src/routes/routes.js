import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import SubHome from "../Home/SubHome";
import Main from "../Main/Main";
import LearningDetails from "../Pages/ProjectDetails/LearningDetails";
import MotoDetails from "../Pages/ProjectDetails/MotoDetails";
import TravelDetails from "../Pages/ProjectDetails/TravelDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/motodetails",
        element: <MotoDetails></MotoDetails>,
      },
      {
        path: "/traveldetails",
        element: <TravelDetails></TravelDetails>,
      },
      {
        path: "/learningdetails",
        element: <LearningDetails></LearningDetails>,
      },
    ],
  },
  // {
  //   path: "/subhome",
  //   element: <SubHome></SubHome>,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Main></Main>,
  //     },

  //   ],
  // },
]);
