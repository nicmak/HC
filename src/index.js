import React from 'react';
import ReactDOM from 'react-dom';
import routes from './route'
import {Router, browserHistory} from 'react-router'
import './index.css';

let root = document.getElementById('root')

ReactDOM.render(

  <Router history={browserHistory} routes={routes}/>,
  root);
