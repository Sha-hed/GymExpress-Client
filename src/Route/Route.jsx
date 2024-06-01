import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllTrainer from "../Pages/AllTrainer/AllTrainer";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Community from "../Pages/Community/Community";
import ErrorPage from "../Pages/ErrorElement/ErrorPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
          {
            path: '/',
            element:<Home></Home>
          },
          {
            path: '/allTrainer',
            element: <AllTrainer></AllTrainer>
          },
          {
            path: '/allClasses',
            element: <AllClasses></AllClasses>
          },
          {
            path: 'community',
            element:<Community></Community>
          }
            
        ]
    },
]);
