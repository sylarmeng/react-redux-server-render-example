
// modules/routes.js

import React from 'react'
import App from './App'
import About from './About'
import Repos from './Repos'
import Home from './Home'
import {Route} from 'react-router-dom'

module.exports = (
    <App>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/repos" component={Repos}/>
    </App>
)
