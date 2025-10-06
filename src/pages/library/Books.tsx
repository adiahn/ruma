import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';
import { BookOpen, ShoppingCart, Download } from 'lucide-react';

const Books = () => {
  const books = [
    {
      title: "Technology: A Tool for Youth Empowerment",
      year: "2018",
      description: "A comprehensive guide exploring how technology can be leveraged to empower young people across Africa. This book provides practical insights into digital innovation, entrepreneurship, and sustainable development.",
      topics: ["Digital Innovation", "Youth Development", "Technology"],
      available: true
    },
    {
      title: "ThinkLikeRuma",
      year: "2018",
      description: "A transformative mindset guide that challenges readers to reimagine their potential and approach to entrepreneurship. Shares Dr. Ruma's personal journey and practical strategies for success.",
      topics: ["Entrepreneurship", "Mindset", "Leadership"],
      available: true
    },
    {
      title: "100 Skills for Survival",
      year: "2018",
      description: "An essential resource providing young people with practical skills needed to thrive in today's dynamic world. Covers everything from business management to personal development.",
      topics: ["Skills Development", "Practical Knowledge", "Survival Skills"],
      available: true
    }
  ];

  const publications = [
    "The Role of Technology in Community Development",
    "Empowering Women Through Enterprise",
    "Youth Entrepreneurship in Africa: Challenges and Opportunities",
    "Digital Innovation for Social Impact",
    "Building Sustainable Economic Opportunities"
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={40} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Books & Publications
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Sharing knowledge and insights to empower the next generation of African leaders
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Books Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
                Published Books
              </h2>
            </AnimatedSection>
            
            <div className="space-y-12">
              {books.map((book, index) => (
                <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                  <motion.div
                    className="grid md:grid-cols-3 gap-8 bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    {/* Book Cover Placeholder */}
                    <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center h-80 md:h-auto">
                      <BookOpen size={80} className="text-white opacity-50" />
                    </div>
                    
                    {/* Book Details */}
                    <div className="md:col-span-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{book.title}</h3>
                          <span className="text-slate-500">({book.year})</span>
                        </div>
                        
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">{book.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {book.topics.map((topic, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {book.available && (
                        <div className="flex flex-col sm:flex-row gap-4">
                          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                            <ShoppingCart size={20} />
                            Purchase Book
                          </button>
                          <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                            <Download size={20} />
                            Download Sample
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journal Articles Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
                Academic Publications
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12">
                Dr. Ruma has authored or co-authored more than 20 journal articles and book chapters
              </p>
            </AnimatedSection>
            
            <div className="space-y-4">
              {publications.map((publication, index) => (
                <AnimatedSection key={index} animation="slideInLeft" delay={index * 0.05}>
                  <motion.div
                    className="bg-white p-6 rounded-lg hover:shadow-md transition-all duration-300 border-l-4 border-slate-900"
                    whileHover={{ x: 10 }}
                  >
                    <p className="text-lg text-slate-700">{publication}</p>
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
              Explore More Resources
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover more insights, speeches, and media from Dr. Babangida Ruma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/library/speeches" 
                className="inline-block px-8 py-4 bg-white text-slate-900 font-medium hover:bg-gray-100 transition-colors duration-200 rounded-lg"
              >
                View Speeches
              </a>
              <a 
                href="/blog" 
                className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-colors duration-200 rounded-lg"
              >
                Visit Media Center
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;

