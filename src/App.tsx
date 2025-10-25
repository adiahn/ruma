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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-md border-b border-gray-200'
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/code"
            className="flex items-center transition-all duration-300 hover:opacity-80"
          >
            <span className="text-black font-bold text-xl tracking-tight">
              Collective Development<br />
              <span className="text-sm text-gray-600">(CODE)</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a
              href="#programs"
              onClick={(e) => scrollToSection(e, 'programs')}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
            >
              Our Programs
            </a>
            <a
              href="#impact"
              onClick={(e) => scrollToSection(e, 'impact')}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
            >
              Impact
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
            >
              About
            </a>
            <a
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded-lg"
            >
              Get Involved
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-1">
              <a
                href="#programs"
                onClick={(e) => scrollToSection(e, 'programs')}
                className="px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
              >
                Our Programs
              </a>
              <a
                href="#impact"
                onClick={(e) => scrollToSection(e, 'impact')}
                className="px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
              >
                Impact
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="mx-4 mt-2 px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded-lg text-center"
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