import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// Routes
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes";
// Layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const NotFound = lazy(() => import("@/pages/not-found page/components/NotFound"));
//import MainLayout from "@/layouts/MainLayout";
//import AuthLayout from "@/layouts/AuthLayout";
//import NotFound from "@/pages/not-found page/components/NotFound";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorBoundary />}>
      {...PublicRoutes}
      {...ProtectedRoutes}

      <Route path="auth" element={<AuthLayout />} errorElement={<ErrorBoundary />}>
        {...AuthRoutes}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
