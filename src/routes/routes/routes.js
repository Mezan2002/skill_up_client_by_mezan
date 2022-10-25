import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Main from "../../layout/Main/Main";

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
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>error page</h1>,
  },
]);
