import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user-profile/myprofil">myprofil</Link>
        </li>
        <li>
          <Link to="/user-profile/gaeron">gaeron</Link>
        </li>
        <li>
          <Link to="/user-profile/tonton">tonton</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
