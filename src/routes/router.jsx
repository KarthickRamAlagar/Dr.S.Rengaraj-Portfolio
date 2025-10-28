// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../Pages/Home";
import Bio from "../Pages/Bio";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import NotFound from "../Pages/NotFound";
import EducationSection from "@/Components/Education/EducationSection";
import ExperienceSection from "@/Components/Experience/ExperienceSection";
import Contact from "@/Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/Dr.Rengaraj/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Bio",
        element: <Bio />,
      },
      {
        path: "Education",
        element: (
          <ProtectedRoutes>
            <EducationSection />
          </ProtectedRoutes>
        ),
      },
      {
        path: "Experience",
        element: (
          <ProtectedRoutes>
            <ExperienceSection />
          </ProtectedRoutes>
        ),
      },
      {
        path: "Contact",
        element: (
          <ProtectedRoutes>
            <Contact />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
