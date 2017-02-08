import React from 'react';
import ReactDOM from 'react-dom';
import routes from './route'
import {Router, browserHistory} from 'react-router'
import {Provider} from  'react-redux'
import store from './Store.js'
import './index.css';

let root = document.getElementById('root')

ReactDOM.render(
<Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
</Provider>
,root);
