import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import MoviesForm from "./components/moviesForm";
import LoginForm from "./components/loginForm";
import Register from "./components/register";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container ">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MoviesForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rental" component={Rental} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
