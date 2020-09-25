import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import { ProductsList, ProductDetails } from '../pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/productDetails" component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
}
