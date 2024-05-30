import { createRoot } from "react-dom/client";

import "./index.css";
import { AuthContextProvider } from "./auth";
import { RouterMain } from "./router/router";

createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <RouterMain />
  </AuthContextProvider>
);
