import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
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
        path: "/traveldetails",
        element: <TravelDetails></TravelDetails>,
      },
      {
        path: "/learningdetails",
        element: <LearningDetails></LearningDetails>,
      },
    ],
  },
  {
    path: "/motodetails",
    element: <MotoDetails></MotoDetails>,
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
