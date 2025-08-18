import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./lib/queryClient.ts";
import CartProvider from "./context/CartContext.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <App />
          <Toaster
            gutter={10}
            toastOptions={{
              duration: 5000,
              style: {
                padding: "0.4rem 1.5rem",
                borderRadius: "4px",
                maxWidth: "700px",
              },
              success: {
                iconTheme: {
                  primary: "#027a48",
                  secondary: "white",
                },
                style: {
                  backgroundColor: "#d1fadf",
                  color: "#027a48",
                },
              },
              error: {
                iconTheme: {
                  primary: "#b42318",
                  secondary: "white",
                },
                style: {
                  backgroundColor: "#fee4e2",
                  color: "#b42318",
                },
              },
            }}
            position="top-center"
          />
        </CartProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </StrictMode>,
);
