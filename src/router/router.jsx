import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import EditProfile from "../pages/EditProfile";
import AboutOurCompany from "../pages/AboutOurCompany";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },{
    path: "/about:200",
    element: <AboutOurCompany />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/:id",
    element: <EditProfile />,
  },
]);
