import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "UNESCO Recognition Ceremony",
      category: "Awards",
      year: "2023",
      description: "Receiving the Father of Technology and Innovation award from UNESCO"
    },
    {
      title: "Commonwealth Youth Summit",
      category: "Events",
      year: "2021",
      description: "Speaking at the Commonwealth Youth Summit in London"
    },
    {
      title: "CODE Foundation Launch",
      category: "Organizations",
      year: "Early 2000s",
      description: "Founding ceremony of Collective Development (CODE)"
    },
    {
      title: "WAGES Program Graduation",
      category: "Impact",
      year: "2022",
      description: "Women & Girls Entrepreneurship Support Program graduation ceremony"
    },
    {
      title: "Enterprise University Opening",
      category: "Education",
      year: "Recent",
      description: "Opening ceremony of Enterprise University of Nigeria"
    },
    {
      title: "African Union Summit",
      category: "Events",
      year: "2023",
      description: "Keynote speech at African Union Summit"
    },
    {
      title: "Youth Empowerment Workshop",
      category: "Impact",
      year: "2022",
      description: "Leading a youth empowerment workshop in Abuja"
    },
    {
      title: "Global Achievers Award",
      category: "Awards",
      year: "2020",
      description: "First African in history to receive Global Achievers Award"
    }
  ];

  const categories = ["All", "Awards", "Events", "Organizations", "Impact", "Education"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredItems.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <ImageIcon size={40} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Photo Gallery
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Capturing moments of impact, innovation, and transformation across Africa
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 0.05}>
                <motion.div
                  className="group relative aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Placeholder with icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon size={60} className="text-slate-400" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs text-white/80 mb-2">{item.year} • {item.category}</span>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            {selectedImage > 0 && (
              <button
                className="absolute left-4 text-white hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <ChevronLeft size={40} />
              </button>
            )}

            {/* Next Button */}
            {selectedImage < filteredItems.length - 1 && (
              <button
                className="absolute right-4 text-white hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight size={40} />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg mb-6 flex items-center justify-center">
                <ImageIcon size={100} className="text-white opacity-30" />
              </div>

              {/* Details */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                    {filteredItems[selectedImage].category}
                  </span>
                  <span className="text-gray-400">{filteredItems[selectedImage].year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {filteredItems[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Be Part of the Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Follow Dr. Babangida Ruma's work and stay connected with the latest updates
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-slate-900 font-medium hover:bg-gray-100 transition-colors duration-200 rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

