// import { useEffect } from "react";
// import { useClerk } from "@clerk/clerk-react";
// import { useNavigate } from "react-router-dom";

// const SignInRedirectHandler = () => {
//   const { clerk } = useClerk();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!clerk) return;

//     const listener = ({ type }) => {
//       if (type === "userSignedIn" || type === "userSignedOut") {
//         navigate("/Dr.S.Rengaraj-Portfolio/");
//       }
//     };

//     clerk.addListener(listener);
//     return () => clerk.removeListener(listener);
//   }, [clerk, navigate]);

//   return null;
// };

// export default SignInRedirectHandler;
