import { Link } from 'react-router-dom';
import React from 'react';

const FooterLinks = [
  { title: 'Home', to: '/' },
  { title: 'Experience', to: '/experience' },
  { title: 'Projects', to: '/project' },
  { title: 'Contact', to: '/contact' },
];

function Footer() {
  return (
    <footer className=" text-white px-[150px]">
      <div className="max-w-[1440px] p-6 bg-black mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: Logo or Name */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>

        {/* Middle: Links */}
        <div className="flex gap-6">
          {FooterLinks.map((link, index) => (
            <Link key={index} to={link.to} className="hover:text-primary transition-colors">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
