import { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import callAPI from "./utils/apiCaller";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedIn:false,
      userInfo:{}
    }
  }
  componentDidMount=()=>{
    let token = localStorage.getItem("token");
    this.setState({ token });
    if (token) {
      callAPI("/getuser", "GET", null, token)
        .then((res) => {
         console.log(res);
         this.setState({'userInfo':res.data,'loggedIn':true});
        })
        .catch((err) => {
          if(err.response.data="Invalid Token"){
            this.setState({'userInfo':{},'loggedIn':false});
          }
        });
    }
  }

  updateStatus=(status)=>{
    console.log("you called me!")
  }

  render() {
    return (
      <Router>
        <div>
          <Menu status={this.state}/>
          <div className="container-fluid">
            <div className="row">{this.showContentMenus(routes)}</div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch> {result}</Switch>;
  };
}

export default App;
