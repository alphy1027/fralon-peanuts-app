import { Route } from "react-router-dom";
import { lazy } from "react";
// Pages
//import Home from "@/pages/non-logged-in/home/Home";
//import Products from "@/pages/non-logged-in/products/Products";
//import Recipes from "@/pages/non-logged-in/recipe/Recipes";
//import About from "@/pages/non-logged-in/about/About";
//import Contacts from "@/pages/non-logged-in/contacts/Contacts";
//import RecipesLayout from "@/layouts/RecipesLayout";
//import SingleRecipe from "@/pages/non-logged-in/recipe/SingleRecipe";
//import ProductsLayout from "@/layouts/ProductsLayout";
//import SingleProduct from "@/pages/non-logged-in/products/SingleProduct";
//import CartLayout from "@/layouts/CartLayout";
//import Cart from "@/pages/non-logged-in/cart/Cart";
//import Checkout from "@/pages/non-logged-in/cart/components/checkout/Checkout";
//import OrderSuccess from "@/pages/non-logged-in/cart/components/order-completed/OrderSuccess";
//import OrderFailure from "@/pages/non-logged-in/cart/components/order-completed/OrderFailure";

// Layouts
const RecipesLayout = lazy(() => import("@/layouts/RecipesLayout"));
const CartLayout = lazy(() => import("@/layouts/CartLayout"));
const ProductsLayout = lazy(() => import("@/layouts/ProductsLayout"));

// Pages
const Home = lazy(() => import("@/pages/non-logged-in/home/Home"));
const Products = lazy(() => import("@/pages/non-logged-in/products/Products"));
const SingleProduct = lazy(() => import("@/pages/non-logged-in/products/SingleProduct"));
const Recipes = lazy(() => import("@/pages/non-logged-in/recipe/Recipes"));
const SingleRecipe = lazy(() => import("@/pages/non-logged-in/recipe/SingleRecipe"));
const About = lazy(() => import("@/pages/non-logged-in/about/About"));
const Contacts = lazy(() => import("@/pages/non-logged-in/contacts/Contacts"));
const Cart = lazy(() => import("@/pages/non-logged-in/cart/Cart"));
const Checkout = lazy(() => import("@/pages/non-logged-in/cart/components/checkout/Checkout"));
const OrderSuccess = lazy(() => import("@/pages/non-logged-in/cart/components/order-completed/OrderSuccess"));
const OrderFailure = lazy(() => import("@/pages/non-logged-in/cart/components/order-completed/OrderFailure"));

const PublicRoutes = [
  <Route index element={<Home />} />,
  <Route path="cart" element={<CartLayout />}>
    <Route index element={<Cart />} />
    <Route path="checkout" element={<Checkout />} />
  </Route>,
  <Route path="order-success/:orderId" element={<OrderSuccess />} />,
  <Route path="order-failure" element={<OrderFailure />} />,
  <Route path="products" element={<ProductsLayout />}>
    <Route index element={<Products />} />
    <Route path=":productId" element={<SingleProduct />} />
  </Route>,
  <Route path="recipes" element={<RecipesLayout />}>
    <Route index element={<Recipes />} />
    <Route path="single" element={<SingleRecipe />} />
  </Route>,
  <Route path="about" element={<About />} />,
  <Route path="contact-us" element={<Contacts />} />,
];

export default PublicRoutes;
