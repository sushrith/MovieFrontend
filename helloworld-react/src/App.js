import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/loginComponent/LoginComponent";
import SignUp from "./components/loginComponent/SignupComponent";
import Nav1 from './components/navs/Nav1';
import LogoutComponent from './components/loginComponent/LogoutComponent';
import Wishlist from './components/wishlistComponent/Wishlist'
import ChooseMovie from './components/chooseMovieComponent/ChooseMovie'
import AuthenticatedRoute from './AuthenticatedRoute'
import ErrorComponent from './components/loginComponent/Error'
function App() {
  
  return (<Router>
    <div className="App">
          <Switch>
          <Route path="/" exact component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/logout" component={LogoutComponent} />
            <AuthenticatedRoute path="/wishlist" component={Wishlist} />
            <AuthenticatedRoute path="/chooseMovie" component={ChooseMovie} />
            <Route path="/error" component={ErrorComponent} />
          </Switch>
    </div></Router>
  );
}

export default App;