import React from "react";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./pages/Search/Search";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Info from "./pages/Info/Info";
import Sell from "./pages/Sell/Sell";

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
    main: ({ match }) => <Product match={match} />,
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
    path: "/info",
    exact: true,
    main: () => <Info />,
  },
  {
    path: "/sell",
    exact: true,
    main: () => <Sell />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
