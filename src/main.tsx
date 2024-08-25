import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import TanstackProvider from "./providers/query-provider";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import { StoreProvider } from "./lib/Store";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;
const root = ReactDOM.createRoot(rootElement);

async function start() {
  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    // We are in the browser
    const { worker } = await import("./mocks/browser");
    return worker.start();
  } else if (process.env.NODE_ENV === "test") {
    // We are in Node.js (e.g., SSR or testing)
    const { server } = await import("./mocks/node");
    return server.listen();
  }
}

start().then(() => {
  root.render(
    <React.StrictMode>
      <TanstackProvider>
        <StoreProvider>
          <RouterProvider router={router} />
        </StoreProvider>
      </TanstackProvider>
    </React.StrictMode>,
  );
});
