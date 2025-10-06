import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';
import { FileText, Calendar, ExternalLink } from 'lucide-react';

const PressRelease = () => {
  const pressReleases = [
    {
      title: "Dr. Ruma Named Father of Technology and Innovation by UNESCO",
      date: "2023",
      excerpt: "UNESCO Institute for Information Technologies in Education recognizes groundbreaking work in using technology to impact communities with sustainable digital solutions.",
      category: "Recognition"
    },
    {
      title: "Africa Youth Award Nomination Announcement",
      date: "2020",
      excerpt: "Only Nigerian nominated for Africa Youth Award, recognizing contributions to human capital development through technology and skills empowerment.",
      category: "Achievement"
    },
    {
      title: "Launch of Enterprise University of Nigeria",
      date: "Recent",
      excerpt: "New institution committed to nurturing entrepreneurs through practical education, research, and innovation across Africa.",
      category: "Education"
    },
    {
      title: "WAGES Program Empowers 1000+ Women",
      date: "2022",
      excerpt: "Women & Girls Entrepreneurship Support Program reaches milestone in empowering young women with practical skills and business knowledge.",
      category: "Impact"
    }
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Press Releases
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Latest news and announcements about Dr. Babangida Ruma's initiatives, achievements, and impact across Africa.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Press Releases Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                  <motion.div
                    className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 h-full flex flex-col"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-block bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {release.category}
                      </span>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {release.date}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{release.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{release.excerpt}</p>
                    
                    <button className="flex items-center text-slate-900 font-semibold hover:gap-3 gap-2 transition-all">
                      Read More
                      <ExternalLink size={16} />
                    </button>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to receive the latest news and updates from Dr. Babangida Ruma
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-slate-900 font-medium hover:bg-gray-100 transition-colors duration-200 rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressRelease;

