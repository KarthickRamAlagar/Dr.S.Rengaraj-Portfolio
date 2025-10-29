import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Hero/Navbar";
import SignInRedirectHandler from "../Components/SignInRedirectHandler";

const AppLayout = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === "/Dr.S.Rengaraj-Portfolio/BioGraphy";

  return (
    <div className="bg-radial-dark text-white min-h-screen w-screen overflow-x-hidden flex flex-col">
      {/* <SignInRedirectHandler /> */}
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
