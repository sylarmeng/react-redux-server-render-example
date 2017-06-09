// index.js
import React from 'react'
import { render } from 'react-dom'

import routes from './modules/routes'
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import { fetchList } from './actions/index'



// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducer, preloadedState)



/*render(
    <BrowserRouter >
      {routes}
  	</BrowserRouter>
	,
  document.getElementById('app')
)*/

render(
  <Provider store={store}>
    <BrowserRouter >
      {routes}
  	</BrowserRouter>
  </Provider>,
  document.getElementById('app')
)