import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './Home'
// import Product from './Product'
// import { NativeRouter, Switch, Route } from 'react-router-native'
import Router from './Router'

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Home />
      //   <Product />
      // </View>
      // <NativeRouter>
       <View style={styles.container}>
         {/* <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/product" component={Product} />
         </Switch> */}
         <Router/>
       </View>
      // </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// npm install --save react-router-native
// npm cache clean --force