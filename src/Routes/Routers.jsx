import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRouters from "./PrivateRouters";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "news/:id",
        element: (
          <PrivateRouters>
            <NewsDetails></NewsDetails>
          </PrivateRouters>
        ),
        loader: ()=> fetch('/news.json')
      },
    ],
  },
]);

export default router
