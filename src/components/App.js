import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import MovieDetail from './MovieDetail';
import '../styles/App.css'
export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/searchMovie" component={SearchPage}></Route>
          <Route path="/searchMovie/:id" component={MovieDetail} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default hot(module)(App);
