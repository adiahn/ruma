import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Business', path: '/business' },
    { name: 'Blog', path: '/blog' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={`text-xl font-light transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-900 hover:text-slate-700' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            Dr. Babangida Ruma
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? location.pathname === item.path
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                    : location.pathname === item.path
                      ? 'text-white'
                      : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-white text-slate-900 hover:bg-gray-100'
              }`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-600 hover:text-slate-900' 
                : 'text-white hover:text-gray-200'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full border-b shadow-sm ${
            isScrolled 
              ? 'bg-white border-slate-100' 
              : 'bg-black/90 backdrop-blur-sm border-white/20'
          }`}>
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isScrolled
                      ? location.pathname === item.path
                        ? 'text-slate-900 bg-slate-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      : location.pathname === item.path
                        ? 'text-white bg-white/20'
                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className={`block w-full px-3 py-2 text-center text-sm font-medium rounded-md transition-colors duration-200 ${
                    isScrolled
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-white text-slate-900 hover:bg-gray-100'
                  }`}
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;