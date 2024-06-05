import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Community from "../Pages/Community/Community";
import ErrorPage from "../Pages/ErrorElement/ErrorPage";
import Register from "../Shared/Register/Register";
import Login from "../Shared/Login/Login";
import PrivateRoute from '../Route/PrivateRoute'
import BeATrainer from "../Pages/AllTrainer/BeATrainer";
import Demo from "../Layout/Demo";
import Alltrainer from "../Pages/Dashboard/Admin/AppliedTrainer";
import NewsLetter from "../Pages/Dashboard/Admin/NewsLetter";
import AllTrainers from "../Pages/Dashboard/Admin/AllTrainers";
import AddClasses from "../Pages/Dashboard/Admin/AddClasses";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allTrainer',
        element:<BeATrainer></BeATrainer>
      },
      {
        path: '/allClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/community',
        element: <PrivateRoute><Community></Community></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: 'demo',
    element: <Demo></Demo>,
    children: [
      {
          path: 'at',
          element: <Alltrainer></Alltrainer>
      },
      {
        path: 'news',
        element: <NewsLetter></NewsLetter>
      },
      {
        path: 'allT',
        element: <AllTrainers></AllTrainers>
      },
      {
        path: 'class',
        element: <AddClasses></AddClasses>
      }
    ]
  }
]);
