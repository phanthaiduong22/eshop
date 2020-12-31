import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  { name: "Home", to: "/", exact: true },
  { name: "Product", to: "/product", exact: true },
  { name: "Search", to: "/search", exact: true },
  { name: "Checkout", to: "/checkout", exact: true },
  { name: "Cart", to: "/cart", exact: true },
  { name: "Login", to: "/login", exact: true },
  { name: "Register", to: "/register", exact: true },
  { name: "Info", to: "/info", exact: true },
  { name: "Sell", to: "/sell", exact: true },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <Link className="navbar-brand" to="/">
          CALL API
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">{this.showMenus(menus)}</ul>
        </div>
      </nav>
    );
  }
  showMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
