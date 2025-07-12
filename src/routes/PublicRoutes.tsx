import { Route } from "react-router-dom";
// Pages
import Home from "@/pages/non-logged-in/home/Home";
import Products from "@/pages/non-logged-in/products/Products";
import Cart from "@/pages/non-logged-in/cart/Cart";
import Recipes from "@/pages/non-logged-in/recipe/Recipes";
import About from "@/pages/non-logged-in/about/About";
import Contacts from "@/pages/non-logged-in/contacts/Contacts";
import RecipesLayout from "@/layouts/RecipesLayout";
import SingleRecipe from "@/pages/non-logged-in/recipe/SingleRecipe";
import ProductsLayout from "@/layouts/ProductsLayout";
import SingleProduct from "@/pages/non-logged-in/products/SingleProduct";

const PublicRoutes = [
  <Route index element={<Home />} />,
  <Route path="products" element={<ProductsLayout />}>
    <Route index element={<Products />} />
    <Route path=":productId" element={<SingleProduct />} />
  </Route>,
  <Route path="cart" element={<Cart />} />,
  <Route path="recipes" element={<RecipesLayout />}>
    <Route index element={<Recipes />} />
    <Route path="single" element={<SingleRecipe />} />
  </Route>,
  <Route path="about" element={<About />} />,
  <Route path="contact-us" element={<Contacts />} />,
];

export default PublicRoutes;
