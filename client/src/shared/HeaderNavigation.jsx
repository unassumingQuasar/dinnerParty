import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

// TODO:
// third button login/logout, use a ternary
// operator on the session and display login or logout
// could also only display dash if logged in


const HeaderNavigation = () => (
  <AppBar title="Dinner Party!">
      <FlatButton
        label="Dash"
        linkButton={true}
        href="#dash"
      />
      <FlatButton
        label="About"
        linkButton={true}
        href="#about"
      />
  </AppBar>
);

export default HeaderNavigation;
