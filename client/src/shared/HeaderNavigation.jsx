import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

function HeaderNavigation() {
  let brand = <a href="#">Dinner Party!</a>;
  return (
    <Navbar brand={brand} fixedTop inverse toggleNavKey={0}>
      <Nav right eventkey={0} />
    </Navbar>
  );
}

export default HeaderNavigation;
