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
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="px-2 sm:px-4 lg:px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/"
                className="text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors duration-300"
              >
                Dr. Babangida Ruma
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-slate-900 bg-slate-100'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-slate-100 rounded-lg -z-10"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-xl overflow-hidden"
              >
                <nav className="px-2 sm:px-4 lg:px-5 py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="pt-4"
                  >
                    <Link
                      to="/contact"
                      onClick={closeMenu}
                      className="block w-full px-4 py-3 bg-slate-900 text-white text-center font-medium rounded-lg hover:bg-slate-800 transition-all duration-300"
                    >
                      Get in Touch
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;