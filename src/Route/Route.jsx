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
import NewsLetter from "../Pages/Dashboard/Admin/NewsLetter";
import AllTrainers from "../Pages/Dashboard/Admin/AllTrainers";
import AddClasses from "../Pages/Dashboard/Admin/AddClasses";
import Balance from "../Pages/Dashboard/Admin/Balance";
import ManageSlot from "../Pages/Dashboard/Trainer/ManageSlot";
import AddNewSlot from "../Pages/Dashboard/Trainer/AddNewSlot";
import AddNewForum from "../Pages/Dashboard/Trainer/AddNewForum";
import Activity from '../Pages/Dashboard/User/ActivityLogPage';
import ProfilePage from '../Pages/Dashboard/User/ProfilePage';
import Recommended from '../Pages/Dashboard/User/Recommended';
// import AdminRoute from '../Route/AdminRoute';
import TrainerRoute from '../Route/TrainerRoute';
import AppliedTrainer from "../Pages/Dashboard/Admin/AppliedTrainer";
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
        element: <BeATrainer></BeATrainer>
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
        path: 'appliedTrainer',
        element: <AppliedTrainer></AppliedTrainer>
      },
      {
        path: 'news',
        element: <NewsLetter></NewsLetter>
      },
      {
        path: 'allTrainer',
        element: <AllTrainers></AllTrainers>
      },
      {
        path: 'class',
        element: <AddClasses></AddClasses>
      },
      {
        path: 'balance',
        element:<Balance></Balance>
      },
      {
        path: 'ms',
        element: <TrainerRoute><ManageSlot></ManageSlot></TrainerRoute>
      },
      {
        path: 'ans',
        element: <TrainerRoute><AddNewSlot></AddNewSlot></TrainerRoute>
      },
      {
        path: 'anf',
        element: <TrainerRoute><AddNewForum></AddNewForum></TrainerRoute>
      },
      {
        path: 'activity',
        element: <PrivateRoute><Activity></Activity></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
      },
      {
        path: 'recommended',
        element: <PrivateRoute><Recommended></Recommended></PrivateRoute>

      }
    ]
  }
]);
