import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import ErrorPage from "../Pages/ErrorElement/ErrorPage";
import PrivateRoute from '../Route/PrivateRoute'
import Demo from "../Layout/Demo";
import NewsLetter from "../Pages/Dashboard/Admin/NewsLetter";
import AllTrainers from "../Pages/Dashboard/Admin/AllTrainers";
import AddClasses from "../Pages/Dashboard/Admin/AddClasses";
import Activity from '../Pages/Dashboard/User/ActivityLogPage';
import ProfilePage from '../Pages/Dashboard/User/ProfilePage';
import AdminRoute from '../Route/AdminRoute';
import AppliedTrainer from "../Pages/Dashboard/Admin/AppliedTrainer";
import Trainers from "../Pages/AllTrainer/Trainers";
// import TrainerDetails from "../Pages/AllTrainer/TrainerDetails";
import BeATrainer from '../Pages/AllTrainer/BeATrainer';
import TrainerBookedPage from "../Pages/AllTrainer/TrainerBookedPage";
import BookTrainer from "../Pages/Dashboard/User/BookTrainer";
import SignIn from "../Shared/Login/SignIn";
import ClassDetails from "../components/ClassDetails";
import TrainerDetail from "../components/TrainerDetail";
import ReviewYourBooking from "../components/ReviewYourBooking";
import Blogs from "../Pages/Blog/Blogs";
import AddNewBlog from "../Pages/Dashboard/Trainer/AddNewBlog";
import BookedClasses from "../Pages/Dashboard/Trainer/BookedClasses";
import MyProfile from "../Pages/Dashboard/Trainer/MyProfile";
import AddReview from "../Pages/Dashboard/User/AddReview";
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
        path: '/reviewBooking',
        element: <ReviewYourBooking />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/getSingleClass/:id',
        element: <PrivateRoute><ClassDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/getClass/${params.id}`)

      },
      {
        path: '/getTrainer/:id',
        element: <TrainerDetail />,
        loader: ({ params }) => fetch(`http://localhost:5000/getTrainer/${params.id}`)
      },
      {
        path: '/allTrainer',
        element: <Trainers></Trainers>
      },
      {
        path: '/details/:id',
        element: <TrainerDetail></TrainerDetail>,
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
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/trainerBookedPage/:id',
        element: <PrivateRoute><TrainerBookedPage></TrainerBookedPage></PrivateRoute>,
        loader: ({ params }) => fetch(` http://localhost:5000/trainers/${params.id}`)
      }
    ]
  },
  {
    path: 'demo',
    element: <PrivateRoute><Demo></Demo></PrivateRoute>,
    children: [
      {
        index: true,
        element: <AdminRoute><AllTrainers></AllTrainers></AdminRoute>
      },
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
        path: 'manageClasses',
        element: <BookedClasses></BookedClasses>
      },
      {
        path: 'addNewBlog',
        element: <AddNewBlog></AddNewBlog>
      },
      {
        path: 'myProfile',
        element: <MyProfile />
      },
      {
        path: 'addReview',
        element: <AddReview />
      },
      {
        path: 'activity',
        element: <PrivateRoute><Activity></Activity></PrivateRoute>
      },
      {
        index: true,
        element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
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
