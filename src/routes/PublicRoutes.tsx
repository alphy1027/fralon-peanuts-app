import { Route } from "react-router-dom"
// Pages
import Home from "@/pages/non-logged-in/home/Home"
import Products from "@/pages/non-logged-in/products/Products"
import Cart from "@/pages/non-logged-in/cart/Cart"
import Recipes from "@/pages/non-logged-in/recipe/Recipes"
import About from "@/pages/non-logged-in/about/About"
import Contacts from "@/pages/non-logged-in/contacts/Contacts"

const PublicRoutes = [
  <Route index element={<Home />} />,
  <Route path="products" element={<Products />} />,
  <Route path="cart" element={<Cart />} />,
  <Route path="recipes" element={<Recipes />} />,
  <Route path="about" element={<About />} />,
  <Route path="contacts" element={<Contacts />} />,
]

export default PublicRoutes