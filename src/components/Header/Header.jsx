import { Link } from 'react-scroll';
import './Header.css';

import React from 'react';

export default function Header() {
  return (
    <header>
      <div className='header__logo'>
        <span className='tribo'>
          TRIBO<span className='meet'>MEET</span>
        </span>
      </div>
      <nav className='header__nav'>
        <ul>
          <Link spy={true} to='home' smooth={true}>
            <li>Home</li>
          </Link>
          <Link spy={true} to='speakers' smooth={true}>
            <li>Speakers</li>
          </Link>
          <Link spy={true} to='schedule' smooth={true}>
            <li>Schedule</li>
          </Link>
          <Link spy={true} to='location' smooth={true}>
            <li>Location</li>
          </Link>
          <Link spy={true} to='info' smooth={true}>
            <li>Info</li>
          </Link>
          <Link spy={true} to='faq' smooth={true}>
            <li>Questions</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
