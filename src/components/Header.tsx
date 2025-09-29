import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Profile', path: '/profile' },
    { name: 'Business', path: '/business' },
    { name: 'Recognitions', path: '/recognitions' },
    { name: 'Blog', path: '/blog' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200'
        : location.pathname === '/'
          ? 'bg-transparent'
          : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={`text-xl font-light transition-colors duration-200 ${
              isScrolled || location.pathname !== '/'
                ? 'text-slate-900 hover:text-slate-700'
                : 'text-white hover:text-gray-200'
            }`}
          >
            Dr. Babangida Ruma
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isScrolled || location.pathname !== '/'
                      ? isActive
                        ? 'text-slate-900 bg-slate-100'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      : isActive
                        ? 'text-white bg-white/20'
                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        isScrolled || location.pathname !== '/'
                          ? 'bg-slate-900'
                          : 'bg-white'
                      }`}
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isScrolled || location.pathname !== '/'
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
              isScrolled || location.pathname !== '/'
                ? 'text-slate-600 hover:text-slate-900'
                : 'text-white hover:text-gray-200'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden absolute top-full left-0 w-full border-b shadow-sm ${
                isScrolled || location.pathname !== '/'
                  ? 'bg-white border-slate-200'
                  : 'bg-black/90 backdrop-blur-sm border-white/20'
              }`}
            >
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMenu}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      isScrolled || location.pathname !== '/'
                        ? isActive
                          ? 'text-slate-900 bg-slate-100 border-l-4 border-slate-900'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        : isActive
                          ? 'text-white bg-white/20 border-l-4 border-white'
                          : 'text-gray-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className={`block w-full px-3 py-2 text-center text-sm font-medium rounded-md transition-colors duration-200 ${
                    isScrolled || location.pathname !== '/'
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-white text-slate-900 hover:bg-gray-100'
                  }`}
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;