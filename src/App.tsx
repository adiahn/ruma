import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Business from './pages/Business';
import Recognitions from './pages/Recognitions';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PressRelease from './pages/library/PressRelease';
import Speeches from './pages/library/Speeches';
import Books from './pages/library/Books';
import Gallery from './pages/library/Gallery';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/business" element={<Business />} />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;