import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
// Routes
import ProtectedRoutes from "./ProtectedRoutes"
import PublicRoutes from "./PublicRoutes"
import AuthRoutes from "./AuthRoutes"
// Layouts
import MainLayout from "@/layouts/MainLayout"
import AuthLayout from "@/layouts/AuthLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        {...PublicRoutes}
        {...ProtectedRoutes}
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        {...AuthRoutes}
      </Route>
    </>
  )
)

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter