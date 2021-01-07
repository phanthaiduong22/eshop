import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";
// const menus = [
//   { name: "Products", to: "/products", exact: true },
//   { name: "Search", to: "/search", exact: true },
//   { name: "Checkout", to: "/checkout", exact: true },
//   { name: "Cart", to: "/cart", exact: true },
//   { name: "Login", to: "/login", exact: true },
//   { name: "Register", to: "/register", exact: true },
//   { name: "Info", to: "/info", exact: true },
//   { name: "Sell", to: "/sell", exact: true },
// ];

// const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
//   return (
//     <Route
//       path={to}
//       exact={activeOnlyWhenExact}
//       children={({ match }) => {
//         let active = match ? "active" : "";
//         return (
//           <li className={`nav-item ${active}`}>
//             <Link className="nav-link" to={to}>
//               {label}
//             </Link>
//           </li>
//         );
//       }}
//     />
//   );
// };

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
    };
  }
  onLogout = () => {
    localStorage.clear();
    window.location.reload();
    this.setState({ redirect: "/" });
  };
  render() {
    let { username } = this.props.status.userInfo;
    let { redirect } = this.state;
    if (redirect) return <Redirect to={redirect} />;
    return (
      <React.Fragment>
        <div className="topbarAndNav">
          <div className="container topbar">
            <ul className="ul-inline">
              <li>
                <Link to="/sell" className="topbaritem">
                  Kênh người bán
                </Link>
              </li>
              <li className="topbaritem"> | </li>
              <li>
                <Link to="/search" className="topbaritem">
                  Search
                </Link>
              </li>
              <li className="topbaritem"> | </li>
              <li>
                <Link to="/login" className="topbaritem">
                  Đăng nhập
                </Link>
              </li>
              <li className="topbaritem"> | </li>
              <li>
                <Link to="/register" className="topbaritem">
                  Đăng ký
                </Link>
              </li>
            </ul>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-nav-custom">
            <div className="container nav-container">
              <div class="navbar-header">
                <Link className="navbar-brand" to="/">
                  <FontAwesomeIcon icon={faShoppingBag} className="fa-2x" />
                  <span className="eshop">{"  "}E-SHOP</span>
                </Link>
              </div>
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
                {/*<ul className="navbar-nav">{this.showMenus(menus)}</ul>*/}
                <div className="navbar-nav mr-auto">
                  <div class="input-group search-bar">
                    <input type="text" class="form-control" />
                    <span class="input-group-btn">
                      <button class="btn btn-primary btn-search" type="button">
                        <FontAwesomeIcon icon={faSearch} /> Tìm kiếm
                      </button>
                    </span>
                  </div>
                </div>
                <ul
                  class="navbar-nav ul-inline"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <li class="nav-item">
                    <Link to="/cart" className="navlink">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="fa-2x"
                      />
                    </Link>
                  </li>
                  <li class="nav-item">
                    {this.props.status.loggedIn ? (
                      <Link to="/info" className="navlink">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FontAwesomeIcon icon={faUser} className="fa-2x" />
                          <span
                            style={{ fontSize: "small", paddingLeft: "0.5em" }}
                          >
                            Xin chào<br></br>
                            {username}
                          </span>
                          <button
                            type="button"
                            class=" ml-2 btn btn-danger"
                            onClick={this.onLogout}
                          >
                            Đăng xuất
                          </button>
                        </div>
                      </Link>
                    ) : (
                      <Link to="/login" className="navlink">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FontAwesomeIcon icon={faUser} className="fa-2x" />
                          <span
                            style={{ fontSize: "small", paddingLeft: "0.5em" }}
                          >
                            Bạn chưa<br></br>
                            đăng nhập
                          </span>
                        </div>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
  // showMenus = (menus) => {
  //   let result = null;
  //   if (menus.length > 0) {
  //     result = menus.map((menu, index) => {
  //       return (
  //         <MenuLink
  //           key={index}
  //           label={menu.name}
  //           to={menu.to}
  //           activeOnlyWhenExact={menu.exact}
  //         />
  //       );
  //     });
  //   }
  //   return result;
  // };
}

export default Menu;
