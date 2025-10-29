// import { useUser } from "@clerk/clerk-react";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoutes = ({ children }) => {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const { pathname } = useLocation();

//   if (!isLoaded) return null;
//   if (!isSignedIn) return <Navigate to="/Dr.Rengaraj/?sign-in=true" replace />;

//   // Optional: role-based redirect
//   if (user && !user.unsafeMetadata?.role && pathname !== "/Dr.Rengaraj/") {
//     return <Navigate to="/Dr.Rengaraj/" />;
//   }

//   return children;
// };

// export default ProtectedRoutes;

import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { pathname } = useLocation();

  if (!isLoaded) return null;
  if (!isSignedIn)
    return <Navigate to="/Dr.S.Rengaraj-Portfolio/?sign-in=true" replace />;

  if (
    user &&
    !user.unsafeMetadata?.role &&
    pathname !== "/Dr.S.Rengaraj-Portfolio/"
  ) {
    return <Navigate to="/Dr.S.Rengaraj-Portfolio/" />;
  }

  return children;
};

export default ProtectedRoutes;
