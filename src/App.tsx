import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Business from './pages/Business';
import CODE from './pages/CODE';
import Recognitions from './pages/Recognitions';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PressRelease from './pages/library/PressRelease';
import Speeches from './pages/library/Speeches';
import Books from './pages/library/Books';
import Gallery from './pages/library/Gallery';

// CODE-specific Header component
const CODEHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/95 backdrop-blur-sm shadow-sm border-b border-gray-800'
        : 'bg-black backdrop-blur-sm border-b border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <a
            href="/code"
            className="flex items-center transition-all duration-300 hover:opacity-80"
          >
            <span className={`text-white font-bold transition-all duration-300 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}>
              Collective Development (CODE)
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#programs"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Our Programs
            </a>
            <a
              href="#impact"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Impact
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="px-6 py-2 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors rounded-lg"
            >
              Get Involved
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#programs"
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Programs
              </a>
              <a
                href="#impact"
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Impact
              </a>
              <a
                href="#about"
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="mx-4 px-6 py-2 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors rounded-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Involved
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Wrapper component to conditionally render headers
const AppContent = () => {
  const location = useLocation();
  const isCODEPage = location.pathname === '/code';

  return (
    <div className="min-h-screen bg-gray-50">
      {isCODEPage ? <CODEHeader /> : <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/business" element={<Business />} />
          <Route path="/code" element={<CODE />} />
          <Route path="/recognitions" element={<Recognitions />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/library/press-release" element={<PressRelease />} />
          <Route path="/library/speeches" element={<Speeches />} />
          <Route path="/library/books" element={<Books />} />
          <Route path="/library/gallery" element={<Gallery />} />
        </Routes>
      </main>
      {!isCODEPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;