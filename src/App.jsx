// import { RouterProvider } from "react-router-dom";
// import router from "./routes/router";

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      signInUrl="/Dr.S.Rengaraj-Portfolio/?sign-in=true"
      signUpUrl={null} // disables sign-up
      afterSignInUrl="/Dr.S.Rengaraj-Portfolio/"
      afterSignOutUrl="/Dr.S.Rengaraj-Portfolio/"
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  );
}

export default App;
