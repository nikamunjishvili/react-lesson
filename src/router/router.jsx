import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import EditProfile from "../pages/EditProfile";
import AboutOurCompany from "../pages/AboutOurCompany";
import PapeNotFound from "../pages/404";
import ProtectedRoutes from "../components/ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <App />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
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
  {
    path: "/profile-edit",
    element: <EditProfile />,
  },
  {
    path: "*",
    element: <PapeNotFound />,
  },
]);
