import React from "react";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./pages/Search/Search";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/search",
    exact: true,
    main: () => <Search />,
  },
  {
    path: "/product/:id",
    exact: true,
    main: () => <Product />,
  },
  {
    path: "/checkout",
    exact: true,
    main: () => <Checkout />,
  },
  {
    path: "/cart",
    exact: true,
    main: () => <Cart />,
  },
  {
    path: "/login",
    exact: true,
    main: () => <Login />,
  },
  {
    path: "/register",
    exact: true,
    main: () => <Register />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
