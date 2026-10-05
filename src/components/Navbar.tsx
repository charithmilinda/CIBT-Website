'use client';

import { useState } from 'react';
import Logo from './Logo';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/study-in-new-zealand', label: 'Study in New Zealand' },
  { href: '/#pathways', label: 'Courses & Institutions' },
  { href: '/#why', label: 'Our Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-nav">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">
        <a href="/">
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-5 text-xs font-semibold text-slate uppercase tracking-wider">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/book-appointment"
            className="hidden sm:inline-block bg-gold hover:bg-gold/90 text-navy font-bold text-xs px-5 py-2.5 rounded-lg transition-all"
          >
            Book Appointment
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-navy"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-1 animate-slide-down">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold text-navy uppercase tracking-wider border-b border-gray-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/book-appointment"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center bg-gold hover:bg-gold/90 text-navy font-bold text-xs py-3 rounded-lg transition-all"
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
