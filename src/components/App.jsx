import React, { Component } from "react";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserInfo from "./UserInfo";
import UserEdit from "./UserEdit";
import { Router, Route, NavLink, Switch } from "react-router-dom";
import history from "./history";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/users"
        >
          Users
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/users/new"
        >
          Add User
        </NavLink>
      </li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={UserList} />
    <Route exact path="/users" component={UserList} />
    <Route exact path="/users/new" component={UserAdd} />
    <Route exact path="/users/:id" component={UserInfo} />
    <Route exact path="/users/:id/edit" component={UserEdit} />
  </Switch>
);

export default App;
