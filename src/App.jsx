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
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      appearance={{ baseTheme: shadesOfPurple }}
      afterSignInUrl={import.meta.env.VITE_CLERK_AFTER_SIGN_IN_URL}
      afterSignUpUrl={import.meta.env.VITE_CLERK_AFTER_SIGN_UP_URL}
      afterSignOutUrl={import.meta.env.VITE_CLERK_AFTER_SIGN_OUT_URL}
      signUpUrl={null}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  );
}

export default App;
