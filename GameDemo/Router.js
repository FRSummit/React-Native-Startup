import * as React from 'react';
import Home from './Home'
import Product from './Product'
import { NativeRouter, Switch, Route } from 'react-router-native'

export default class Router extends React.Component {
  render() {
    return (
      <NativeRouter>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/product" component={Product} />
         </Switch>
      </NativeRouter>
    );
  }
}