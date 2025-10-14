import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Calendar, MapPin, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Recognitions = () => {
  const awards = [
    {
      year: "2020",
      title: "Africa Youth Award Nomination",
      organization: "Africa Youth Awards",
      category: "Youth Development",
      description: "Only Nigerian nominated for Africa Youth Award, recognizing contributions to human capital development through technology and skills empowerment.",
      location: "Lagos, Nigeria"
    },
    {
      year: "2018",
      title: "Social Worker of the Year",
      organization: "Nigerian Social Work Association",
      category: "Social Impact",
      description: "Recognized for exceptional contributions to social work and community development initiatives across Nigeria.",
      location: "Abuja, Nigeria"
    },
    {
      year: "2016",
      title: "100 Most Influential Young Africans",
      organization: "African Youth Awards",
      category: "Youth Leadership",
      description: "Listed among the 100 Most Influential Young Africans for outstanding contributions to youth empowerment and social entrepreneurship.",
      location: "Accra, Ghana"
    },
    {
      year: "2016",
      title: "Top 20 Most Influential Young Leaders in the World",
      organization: "Global Youth Leadership Summit",
      category: "Global Leadership",
      description: "Ranked among the Top 20 Most Influential Young Leaders in the World for innovative approaches to youth development and social change.",
      location: "New York, USA"
    },
    {
      year: "2014",
      title: "U.S. Department of State Alumni Member of the Month",
      organization: "U.S. Department of State",
      category: "International Recognition",
      description: "Honored as U.S. Department of State Alumni Member of the Month for contributions to international development and youth empowerment.",
      location: "Washington D.C., USA"
    },
    {
      year: "2015-2017",
      title: "Global Youth Ambassador",
      organization: "Commonwealth Youth Council",
      category: "Global Leadership",
      description: "Served as Global Youth Ambassador for the Commonwealth Youth Council, the largest youth organization in the world.",
      location: "London, UK"
    }
  ];

  const recognitions = [
    {
      icon: <Award size={24} />,
      title: "Father of Technology and Innovation",
      description: "Named by UNESCO Institute for Information Technologies in Education"
    },
    {
      icon: <Trophy size={24} />,
      title: "Global Achievers Award",
      description: "First African in history to receive both Commonwealth and Global Achievers Awards"
    },
    {
      icon: <Star size={24} />,
      title: "100 Most Influential Young Africans",
      description: "Recognized in 2016 & 2020 for outstanding contributions to youth development"
    },
    {
      icon: <Users size={24} />,
      title: "Top 20 Most Influential Young Leaders",
      description: "Ranked among the world's most influential young leaders in 2016"
    }
  ];

  const categories = ["All", "Youth Development", "Social Impact", "Youth Leadership", "Global Leadership", "International Recognition", "Technology Innovation"];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/hero.jpg)',
            filter: 'grayscale(100%) brightness(0.4)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center min-h-screen flex items-center justify-center">
              <div className="max-w-4xl">
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Recognitions & Awards
                </motion.h1>
                
                <motion.p 
                  className="text-xl sm:text-2xl text-gray-200 font-light tracking-wide mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Celebrating Excellence in Youth Development and Social Entrepreneurship
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Dr. Babangida Ruma's exceptional contributions to youth empowerment, social entrepreneurship, and digital innovation have earned him numerous prestigious awards and international recognition.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-responsive-lg font-light text-slate-900 text-center mb-16">
                Recognition Overview
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {recognitions.map((recognition, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                      <div className="text-slate-600 group-hover:text-slate-900 transition-colors">
                        {recognition.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 mb-3">{recognition.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{recognition.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-responsive-lg font-light text-slate-900 text-center mb-16">
                Awards & Recognitions
              </h2>
              
              <div className="space-y-8">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                            <Trophy size={20} className="text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-light text-slate-900">{award.year}</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">{award.category}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-3/4">
                        <h3 className="text-xl font-medium text-slate-900 mb-2">{award.title}</h3>
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Award size={16} />
                            {award.organization}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {award.location}
                          </div>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{award.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Recognition */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-slate-50 rounded-2xl p-12">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Star size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-light text-slate-900 mb-6">
                  Father of Technology and Innovation
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  "Dr. Babangida Ruma has been globally recognized for his passion for digital innovation and technology. Named the Father of Technology and Innovation by the UNESCO Institute for Information Technologies in Education, his groundbreaking work in using technology to impact communities with sustainable digital solutions has transformed countless lives across Africa."
                </p>
                <div className="text-sm text-slate-500">
                  — UNESCO Institute for Information Technologies in Education
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-responsive-lg font-light text-white mb-8">
                Learn More About Dr. Ruma's Impact
              </h2>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                Discover more about Dr. Babangida Ruma's business ventures, philanthropic efforts, and vision for Africa's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/profile" 
                  className="px-8 py-4 bg-white text-slate-900 font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  View Full Profile
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-slate-900 transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Recognitions;
