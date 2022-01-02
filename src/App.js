import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/Header';
import { ProductDetail } from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 page not found</Route>
        </Switch>
      </Router>
    </div>
  );
}
