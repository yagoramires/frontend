import { Link } from 'react-scroll';
import './Header.css';
import { FaBars } from 'react-icons/fa';

import React, { useState } from 'react';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (e) => {
    if (showModal) {
      setShowModal(false);
    }
    if (!showModal) {
      setShowModal(true);
    }
  };

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
          <Link spy={true} to='food' smooth={true}>
            <li>Food</li>
          </Link>
          <Link spy={true} to='code' smooth={true}>
            <li>Code</li>
          </Link>
          <Link spy={true} to='faq' smooth={true}>
            <li>FAQ</li>
          </Link>
        </ul>
      </nav>
      <div className='modal' onClick={handleModal}>
        <FaBars size={20} />
        <nav
          className={
            showModal ? 'header__nav-modal' : 'header__nav-modal hidden'
          }
          onClick={handleModal}
        >
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
            <Link spy={true} to='food' smooth={true}>
              <li>Food</li>
            </Link>
            <Link spy={true} to='code' smooth={true}>
              <li>Code</li>
            </Link>
            <Link spy={true} to='faq' smooth={true}>
              <li>FAQ</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
