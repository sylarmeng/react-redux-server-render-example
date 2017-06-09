
var express = require('express')
var path = require('path')
var compression = require('compression')

import React from 'react'
// we'll use this to render our app to an html string
// import { renderToString } from 'react-dom/server'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'

import routes from './modules/routes'




var app = express()
var reactpath = express()

var Mongoose = require('./models/mongooseConn.js')
var db =Mongoose()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static('public'))



app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  next();
})

app.get('*', (req, res) => {
    console.log('-------------------hit')
    let preloadedState = { 'menu': "tmp"}
    const store = createStore(reducer, preloadedState)
    const context = {}
    // renderToStaticMarkup  or renderToString
    const appHtml = ReactDOMServer.renderToString (
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          {routes}
        </StaticRouter>
      </Provider>
    )
    preloadedState = store.getState()
    res.send(renderPage(appHtml,preloadedState))
})

function renderPage(appHtml,preloadedState) {
  return `
    <!doctype html>
    <html>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>wecatering</title>
    
    <link rel=stylesheet href=/index.css>
    <div id="app">${appHtml}</div>
    <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    
    <script src="/vendor.js"></script>
    <script src="/bundle.js"></script>
   `
}
// <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
// <script src="https://cdn.bootcss.com/react-bootstrap/0.31.0/react-bootstrap.min.js"></script>

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
