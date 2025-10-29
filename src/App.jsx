import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ClerkProvider } from "@clerk/clerk-react";
import { shadesOfPurple } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}
function App() {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{ baseTheme: shadesOfPurple }}
      signInUrl="/Dr.S.Rengaraj-Portfolio/?sign-in=true"
      signUpUrl={null}
      afterSignInUrl="/Dr.S.Rengaraj-Portfolio/"
      afterSignOutUrl="/Dr.S.Rengaraj-Portfolio/"
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  );
}

export default App;
