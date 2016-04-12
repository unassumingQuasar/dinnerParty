import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, Link, hashHistory } from 'react-router';

import dash from './views/dash.jsx';
import login from './views/login.jsx';

const About = () => <div><h1>About</h1></div>;

const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/dash" component={dash}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={login}></Route>
      <Redirect from="/" to="/login"></Redirect>
    </Router>
  )
};

ReactDOM.render( <App />, document.getElementById('app') );
