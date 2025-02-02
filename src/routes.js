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
import AddNewProduct from "./pages/AddNewProduct/AddNewProduct";
import SellerListProduct from "./pages/SellerListProduct/SellerListProduct";
import SellerOrders from "./pages/SellerOrders/SellerOrders";
import Orders from "./pages/Info/Customer_Orders";
import SellInfo from "./pages/SellInfo/SellInfo";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/search/:value",
    exact: true,
    main: ({ match }) => <Search match={match} />,
  },
  {
    path: "/product",
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
    path: "/sell/addnewproduct",
    exact: true,
    main: () => <AddNewProduct />,
  },
  {
    path: "/sell/listproduct",
    exact: true,
    main: () => <SellerListProduct />,
  },
  {
    path: "/sell/orders",
    exact: true,
    main: () => <SellerOrders />,
  },
  {
    path:"/orders",
    exact:true,
    main:()=><Orders/>
  },
  {
    path:"/sell/info",
    exact:true,
    main:()=><SellInfo/>
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  }
  
];

export default routes;
