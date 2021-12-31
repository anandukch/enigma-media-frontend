import "./App.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
// import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/posts" />} />
        {/* <Route path="/" exact component={() =>(user ? <Redirect to="/" /> : <Redirect to="/auth" />)} /> */}
        <Route to path="/posts" exact component={Home} />
        <Route
          to
          path="/auth"
          exact
          component={() => (user ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </Router>
  );
}

export default App;
