import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Community from "../Pages/Community/Community";
import ErrorPage from "../Pages/ErrorElement/ErrorPage";
import Register from "../Shared/Register/Register";
import Login from "../Shared/Login/Login";
import PrivateRoute from '../Route/PrivateRoute'
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
import AdminRoute from '../Route/AdminRoute';
import TrainerRoute from '../Route/TrainerRoute';
import AppliedTrainer from "../Pages/Dashboard/Admin/AppliedTrainer";
import Trainers from "../Pages/AllTrainer/Trainers";
import TrainerDetails from "../Pages/AllTrainer/TrainerDetails";
import BeATrainer from '../Pages/AllTrainer/BeATrainer';
import TrainerBookedPage from "../Pages/AllTrainer/TrainerBookedPage";
import Payment from "../Pages/Payment/Payment";
import ForumDetails from "../Pages/Community/ForumDetails";
import BookTrainer from "../Pages/Dashboard/User/BookTrainer";
import SignIn from "../Shared/Login/SignIn";
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
        element: <Trainers></Trainers>
      },
      {
        path: '/details/:id',
        element: <TrainerDetails></TrainerDetails>,
        loader: ({ params }) => fetch(` http://localhost:5000/trainers/${params.id}`)
      },
      {
        path: '/becomeGymTrainer',
        element: <PrivateRoute><BeATrainer></BeATrainer></PrivateRoute>
      },
      {
        path: '/allClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/community',
        element: <Community></Community>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/trainerBookedPage/:id',
        element: <PrivateRoute><TrainerBookedPage></TrainerBookedPage></PrivateRoute>,
        loader: ({ params }) => fetch(` http://localhost:5000/trainers/${params.id}`)
      },
      {
        path: '/forumDetails/:id',
        element: <PrivateRoute><ForumDetails></ForumDetails></PrivateRoute>,
        loader: ({ params }) => fetch(` http://localhost:5000/forum/${params.id}`)
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
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
        element: <AdminRoute><NewsLetter></NewsLetter></AdminRoute>
      },
      {
        path: 'allTrainer',
        element: <AdminRoute><AllTrainers></AllTrainers></AdminRoute>
      },
      {
        path: 'class',
        element: <AdminRoute><AddClasses></AddClasses></AdminRoute>
      },
      {
        path: 'balance',
        element: <AdminRoute><Balance></Balance></AdminRoute>
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
        path: 'forum',
        element: <AddNewForum></AddNewForum>
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
        element: <PrivateRoute><BookTrainer></BookTrainer></PrivateRoute>

      }
    ]
  }
]);
