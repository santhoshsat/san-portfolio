import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between md:px-6">
        
        {/* Logo */}
        <h1>
          <a href="/" className="logo">
            <img src="/images/logo.svg" width={40} height={40} alt="santhosh" />
          </a>
        </h1>

        {/* Navbar (desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navbar navOpen={navOpen} />
        </div>

        {/* Right Side: Contact + Menu Button */}
        <div className="flex items-center gap-2">
          {/* Contact Me (desktop only) */}
          <a href="#contact" className="btn btn-secondary max-md:hidden">
            Contact Me
          </a>

          {/* Menu Button (mobile only, right aligned) */}
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar (dropdown on right side only) */}
      {navOpen && (
        <div className="absolute top-20 right-4 md:hidden">
          <Navbar navOpen={navOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
