import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import dash from './views/dash.jsx';
import login from './views/login.jsx';
import about from './views/about.jsx';

import 'bootstrap/less/bootstrap.less';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/dash" component={dash} />
      <Route path="/about" component={about} />
      <Route path="/login" component={login} />
      <Redirect from="/" to="/login" />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
