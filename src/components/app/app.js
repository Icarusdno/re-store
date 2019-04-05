import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={ 2 } total={ 100 } />
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/cart" component={ CartPage } />

        <Route render={ () => (<h2>Page not found</h2>) } />
      </Switch>
    </main>
  );
};

export default App;