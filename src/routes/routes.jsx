import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Projects from "../pages/projects/projects"
import Contact from "../pages/contact/contact";
const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "projects",
      element: <Projects/>
    },
    {
      path: "contact",
      element: <Contact/>
    },
  ]);

export default Router;