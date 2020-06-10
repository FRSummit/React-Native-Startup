import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Screens/Home.js'
import About from '../Screens/About.js'

const Routes = () => (
    <Router>
       <Scene key = "root">
          <Scene exact path="/" key = "home" component = {Home} title = "Home" initial = {true} />
          <Scene exact path="/about" key = "about" component = {About} title = "About" />
       </Scene>
    </Router>
 )
 export default Routes