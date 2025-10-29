// import { RouterProvider } from "react-router-dom";
// import router from "./routes/router";

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
// src/App.jsx
import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      signInUrl="/Dr.Rengaraj/sign-in"
      signUpUrl="/Dr.Rengaraj/sign-up"
      afterSignInUrl="/Dr.Rengaraj/"
      afterSignUpUrl="/Dr.Rengaraj/"
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  );
}

export default App;
