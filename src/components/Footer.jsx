import React from 'react'
import { ButtonPrimary } from './Button';

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact me', href: '#contact' }
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/santhoshsat' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/santhosh-m-333793269/' },
  { label: 'Instagram', href: 'https://www.instagram.com/sandy_santhosh_002?igsh=bDFrY3pmeDNtcHNh' },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        {/* Top Section */}
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <p className='headline-3 '>Email : santhoshsat002@gmail.com</p>
            <p className="headline-3">Contact Number : 7358669483</p>
           

          </div>

          {/* Sitemap + Socials */}
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-gray-400 py-1 transition-colors hover:text-gray-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-gray-400 py-1 transition-colors hover:text-gray-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Section: logo left, copyright right */}
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </a>
          <p className="text-gray-200 text-sm">
            Copyright &copy; 2025 santhosh_M
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
