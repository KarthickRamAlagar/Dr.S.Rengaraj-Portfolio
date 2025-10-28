// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Bio from "../pages/Bio";
import ProtectedRoutes from "../components/ProtectedRoutes";
import NotFound from "../pages/NotFound";
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
        path: "BioGraphy",
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
  // 🔥 Global catch-all route for unmatched paths
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
