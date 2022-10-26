import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/Courses/Courses";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Page404 from "../../components/Page404/Page404";
import PurchasePage from "../../components/PurchasePage/PurchasePage";
import Register from "../../components/Register/Register";
import SelectedCourse from "../../components/SelectedCourse/SelectedCourse";
import Main from "../../layout/Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => {
          return fetch("https://skill-up-server-by-mezan.vercel.app/courses");
        },
      },
      {
        path: "/courses/:id",
        element: <SelectedCourse></SelectedCourse>,
        loader: ({ params }) => {
          return fetch(
            `https://skill-up-server-by-mezan.vercel.app/courses/${params.id}`
          );
        },
      },
      {
        path: "/purchase/:id",
        element: <PurchasePage></PurchasePage>,
        loader: ({ params }) => {
          return fetch(
            `https://skill-up-server-by-mezan.vercel.app/courses/${params.id}`
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);
