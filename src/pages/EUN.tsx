import React from 'react';
import { motion } from 'framer-motion';
import eunLogo from '../assets/eun.jpg';

const EUN = () => {
  const programs = [
    {
      name: 'Bachelor of Entrepreneurship',
      duration: '4 Years',
      description: 'Comprehensive program designed to develop entrepreneurial mindsets and business acumen',
      features: [
        'Business Plan Development',
        'Market Analysis & Research',
        'Financial Management',
        'Innovation & Strategy',
        'Leadership Development'
      ]
    },
    {
      name: 'Master of Business Innovation',
      duration: '2 Years',
      description: 'Advanced program focused on innovation, digital transformation, and sustainable business practices',
      features: [
        'Digital Innovation Strategies',
        'Sustainable Business Models',
        'Global Market Analysis',
        'Technology Integration',
        'Change Management'
      ]
    },
    {
      name: 'Certificate in Enterprise Development',
      duration: '6 Months',
      description: 'Intensive short-term program for aspiring entrepreneurs and business owners',
      features: [
        'Practical Entrepreneurship Training',
        'Mentorship Programs',
        'Access to Business Networks',
        'Startup Incubation Support',
        'Real-world Project Work'
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '50+', label: 'Industry Partners' },
    { number: '95%', label: 'Employment Rate' },
    { number: '15+', label: 'Countries Represented' }
  ];

  const values = [
    {
      title: 'Innovation Driven',
      description: 'Fostering creative thinking and innovative solutions to real-world challenges'
    },
    {
      title: 'Excellence',
      description: 'Commitment to academic rigor and highest standards of education'
    },
    {
      title: 'Practical Learning',
      description: 'Hands-on experience with real-world projects and industry partnerships'
    },
    {
      title: 'Global Perspective',
      description: 'Preparing students for international opportunities and global leadership'
    }
  ];

  const WhyEUN = [
    'Industry-Experienced Faculty',
    'Modern Learning Facilities',
    'Strong Alumni Network',
    'Entrepreneurship Incubation Support',
    'Partnerships with Leading Businesses',
    'Career Development Services'
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EUN</h1>
                <p className="text-xs text-gray-500">Enterprise University of Nigeria</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#admissions" className="text-gray-700 hover:text-blue-600 transition-colors">Admissions</a>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 min-h-[90vh] flex items-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Shaping Tomorrow's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Entrepreneurs
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise University of Nigeria is dedicated to nurturing innovative leaders and entrepreneurs through practical, industry-focused education.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
                <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                          {stats.map((stat, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About EUN</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise University of Nigeria is an innovative institution focused on nurturing a new generation of entrepreneurs through practical education, research, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to develop entrepreneurial skills and business acumen
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 transition-all hover:shadow-lg"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                  <p className="text-sm text-gray-500">{program.duration}</p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EUN */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose EUN?</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {WhyEUN.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <span className="text-blue-200 font-bold mr-2">•</span>
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="admissions" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join us and become part of the next generation of innovative entrepreneurs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
              Apply Now
            </button>
            <button className="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src={eunLogo} 
                alt="EUN Logo" 
                className="h-16 w-auto mb-4"
              />
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">EUN</h3>
                  <p className="text-xs text-gray-400">Enterprise University of Nigeria</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Nurturing a new generation of entrepreneurs through practical education and innovation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#admissions" className="hover:text-white transition-colors">Admissions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@eun.edu.ng</li>
                <li>+234 (0) 8100061111</li>
                <li>Abuja, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Enterprise University of Nigeria. All rights reserved.</p>
            <p className="mt-2">Founded by Dr. Babangida Kabir Ruma</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EUN;