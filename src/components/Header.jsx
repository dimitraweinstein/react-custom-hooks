import React from 'react';
import { NavLink, Route, Link } from 'react-router-dom';

const Header = () => (
  <Route>
    <NavLink to="/">
      Home
    </NavLink> {'  '}
    <Link
      to={{ pathname: 'https://hey-arnold-api-documentation.netlify.app/' }}
      target="_blank" >
      Hey Arnold! API
    </Link>
  </Route>
  
);

export default Header;
