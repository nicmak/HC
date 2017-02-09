import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App.jsx'
import Main from './Components/Main/Main'
import Product from './Components/Product/Product'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'



export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path='product' component={Product}/>
    <Route path='contact' component={Contact}/>
    <Route path='about' component={About}/>
  </Route>
)



//     <Route path='documents'component={Document}/>