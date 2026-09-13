import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Edu_Exp from "../pages/edu_exp";
import SingleProject from "../pages/single-project";
import Projects from "../pages/projects";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/education_experience",
                element: <Edu_Exp />
            },
            {
                path: "/single-project",
                element: <SingleProject />
            },
            {
                path: "/projects",
                element: <Projects />
            },
        ]
    }
])