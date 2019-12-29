import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="Navigation">
      <h3>Ready Roofer</h3>
      <ul className="Nav-Links">
          <Link className="Nav-Links" to='/get-a-quote'>
            <li>Get A Quote</li>
          </Link>
          <Link className="Nav-Links" to='/learn-roofing'>
            <li>Learn Roofing</li>
          </Link>
          <Link className="Nav-Links" to='/about'>
            <li>About</li>
          </Link>
      </ul>
    </nav>
  );
}

export default Navigation;