import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
// Using public folder for production compatibility

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isInitiativesOpen, setIsInitiativesOpen] = useState(false);
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
  ];

  const profileItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Recognitions', path: '/recognitions' },
  ];

  const libraryItems = [
    { name: 'Press Release', path: '/library/press-release' },
    { name: 'Speeches', path: '/library/speeches' },
    { name: 'Books', path: '/library/books' },
    { name: 'Gallery', path: '/library/gallery' },
    { name: 'Media Center', path: '/blog' },
  ];

  const initiativesItems = [
    { name: 'Collective Development (CODE)', path: '/code' },
    { name: 'The Ruma Foundation', path: '/ruma-foundation' },
    { name: 'Social Innovation Academy (SINA)', path: '/sina' },
    { name: 'Learning Initiative for Entrepreneurship (LIFE)', path: '/life' },
    { name: 'Enterprise University of Nigeria (EUN)', path: '/eun' },
    { name: 'Opportunities Hub (OHUB)', path: 'https://opportunitieshub.ng' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200'
        : 'bg-white backdrop-blur-sm border-b border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center transition-all duration-300 hover:opacity-80"
          >
            <img 
              src="/assets/icon.png" 
              alt="Dr. Babangida Ruma" 
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-16'
              }`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-5 font-medium transition-all duration-300 rounded-lg ${
                    isScrolled ? 'py-2 text-sm' : 'py-2.5 text-base'
                  } ${
                    isActive
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Profile Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            >
              <button
                className={`relative px-5 font-medium transition-all duration-300 rounded-lg flex items-center gap-1 ${
                  isScrolled ? 'py-2 text-sm' : 'py-2.5 text-base'
                } ${
                  location.pathname === '/profile' || location.pathname === '/business'
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Profile
                <ChevronDown size={16} className={`transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50"
                  >
                    {profileItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2.5 text-base font-medium transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Initiatives Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsInitiativesOpen(true)}
              onMouseLeave={() => setIsInitiativesOpen(false)}
            >
              <button
                className={`relative px-5 font-medium transition-all duration-300 rounded-lg flex items-center gap-1 ${
                  isScrolled ? 'py-2 text-sm' : 'py-2.5 text-base'
                } ${
                  location.pathname === '/business'
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Initiatives
                <ChevronDown size={16} className={`transition-transform duration-200 ${isInitiativesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isInitiativesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[340px] bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50"
                  >
                    {initiativesItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block px-4 py-2.5 text-base font-medium transition-colors duration-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Library Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLibraryOpen(true)}
              onMouseLeave={() => setIsLibraryOpen(false)}
            >
                    <button
                      className={`relative px-5 font-medium transition-all duration-300 rounded-lg flex items-center gap-1 ${
                        isScrolled ? 'py-2 text-sm' : 'py-2.5 text-base'
                      } ${
                        location.pathname.startsWith('/library')
                          ? 'text-slate-900 bg-slate-100'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                Library
                <ChevronDown size={16} className={`transition-transform duration-200 ${isLibraryOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLibraryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50"
                  >
                    {libraryItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2.5 text-base font-medium transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact - last item in desktop menu */}
            <Link
              to="/contact"
              className={`relative px-5 font-medium transition-all duration-300 rounded-lg ${
                isScrolled ? 'py-2 text-sm' : 'py-2.5 text-base'
              } ${
                location.pathname === '/contact'
                  ? 'text-slate-900 bg-slate-100'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Contact
              {location.pathname === '/contact' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
                <div className="hidden md:block">
                  <Link
                    to="/contact"
                    className={`px-6 font-medium transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 rounded-lg ${
                      isScrolled ? 'py-2 text-sm' : 'py-3 text-base'
                    }`}
                  >
                    Get in Touch
                  </Link>
                </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-colors duration-200 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="md:hidden absolute top-full left-0 w-full border-b shadow-sm bg-white border-slate-200"
            >
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMenu}
                    className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                      isActive
                        ? 'text-slate-900 bg-slate-100 border-l-4 border-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Profile Submenu - Mobile */}
              <div className="pt-2">
                <div className="text-sm font-semibold text-slate-400 px-4 py-2">Profile</div>
                {profileItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-4 py-3 pl-8 text-base font-medium rounded-md transition-all duration-200 ${
                        isActive
                          ? 'text-slate-900 bg-slate-100 border-l-4 border-slate-900'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Initiatives Submenu - Mobile (opens in new tab) */}
              <div className="pt-2">
                <div className="text-sm font-semibold text-slate-400 px-4 py-2">Initiatives</div>
                {initiativesItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className={`block px-4 py-3 pl-8 text-base font-medium rounded-md transition-all duration-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Library Submenu - Mobile */}
              <div className="pt-2">
                <div className="text-sm font-semibold text-slate-400 px-4 py-2">Library</div>
                {libraryItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-4 py-3 pl-8 text-base font-medium rounded-md transition-all duration-200 ${
                        isActive
                          ? 'text-slate-900 bg-slate-100 border-l-4 border-slate-900'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Contact - last item in mobile menu */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`block mt-2 px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                  location.pathname === '/contact'
                    ? 'text-slate-900 bg-slate-100 border-l-4 border-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full px-4 py-3 text-center text-base font-medium rounded-md transition-colors duration-200 bg-slate-900 text-white hover:bg-slate-800"
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