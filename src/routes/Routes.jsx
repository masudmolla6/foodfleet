import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Details from "../pages/Details/Details";
import Review from "../pages/Review/Review";
import Services from "../pages/Services/Services";
import MyReview from "../pages/MyReview/MyReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/services", element: <Services></Services> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/login", element: <Login></Login> },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/menu/${params.id}`);
        },
      },
      {
        path: "reviews/:id",
        element: <Review></Review>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/menu/${params.id}`);
        },
      },
      {
        path: "/myreview", element:<MyReview></MyReview>
      },
    ],
  },
]);


export default router;