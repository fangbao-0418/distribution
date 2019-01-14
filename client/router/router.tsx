'use strict';
import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import App from '../container/App'
const Router = __CLIENT__ ? BrowserRouter : StaticRouter;

export default props => (
  <Router {...props}>
    <App>
    </App>
  </Router>
);
