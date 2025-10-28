import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Building2, Users, Target, Sparkles, Globe, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import rumaLogo from '../assets/ruma.jpg';

const RumaFoundation = () => {
  const impactStats = [
    { number: '100,000+', label: 'Lives Transformed' },
    { number: '50,000+', label: 'Skills Training Programs' },
    { number: '200+', label: 'Communities Impacted' },
    { number: '15+', label: 'Years of Service' }
  ];

  const corePrograms = [
    {
      name: 'Education Support',
      description: 'Providing access to quality education for underserved communities through scholarships, learning materials, and infrastructure development.',
      features: [
        'Scholarship Programs',
        'Learning Materials Support',
        'School Infrastructure',
        'Teacher Training'
      ],
      Icon: GraduationCap
    },
    {
      name: 'Skills Development',
      description: 'Empowering individuals with practical skills and vocational training to enhance employability and create sustainable livelihoods.',
      features: [
        'Vocational Training',
        'Digital Skills Programs',
        'Entrepreneurship Workshops',
        'Job Placement Support'
      ],
      Icon: Building2
    },
    {
      name: 'Community Empowerment',
      description: 'Building resilient communities through capacity-building initiatives, resource mobilization, and sustainable development programs.',
      features: [
        'Community Development Projects',
        'Resource Mobilization',
        'Leadership Training',
        'Sustainable Livelihoods'
      ],
      Icon: Users
    }
  ];

  const values = [
    {
      title: 'Compassion',
      description: 'Driven by deep concern for the well-being of vulnerable communities and individuals.',
      Icon: Heart
    },
    {
      title: 'Excellence',
      description: 'Commitment to delivering high-quality programs and achieving measurable impact.',
      Icon: Award
    },
    {
      title: 'Innovation',
      description: 'Leveraging creative solutions to address social challenges and drive positive change.',
      Icon: Sparkles
    },
    {
      title: 'Inclusion',
      description: 'Ensuring equal opportunities for all, particularly underserved and marginalized communities.',
      Icon: Globe
    }
  ];

  const achievements = [
    {
      title: 'Educational Access',
      content: 'Empowering thousands through access to quality education and learning opportunities.'
    },
    {
      title: 'Skills Development',
      content: 'Providing vocational training and skills development programs to enhance economic opportunities.'
    },
    {
      title: 'Community Impact',
      content: 'Transforming communities through sustainable development and capacity-building initiatives.'
    },
    {
      title: 'Leadership & Innovation',
      content: 'Promoting leadership development and innovation across Northern Nigeria.'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-800">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
          }}></div>
        </div>
        
        <div className="relative z-10 w-full pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-30"></div>
                    <div className="relative px-6 py-3 bg-emerald-500/20 backdrop-blur-sm rounded-2xl border border-emerald-400/30">
                      <span className="text-emerald-100 text-sm font-bold uppercase tracking-widest">Philanthropic Foundation</span>
                    </div>
                  </div>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
                  The Ruma
                  <span className="block font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    Foundation
                  </span>
                </h1>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"></div>
                <p className="text-xl sm:text-2xl md:text-3xl text-emerald-100 mb-6 font-light max-w-3xl mx-auto leading-relaxed">
                  Creating sustainable change through education, enterprise, and compassionate community support
                </p>
                <p className="text-base sm:text-lg text-emerald-200 max-w-2xl mx-auto font-light">
                  Empowering vulnerable communities to thrive independently and build a brighter future
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
              >
                <button className="px-12 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/30">
                  Partner With Us
                </button>
                <button className="px-12 py-4 bg-transparent border-2 border-emerald-400 text-emerald-100 font-semibold rounded-xl hover:bg-emerald-400/10 transition-all">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="section-padding bg-gradient-to-b from-white to-emerald-50/30 py-24">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-emerald-900 mb-6">
                  Our Mission
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
              </div>
              <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-emerald-100">
                <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 text-center font-light">
                  To transform lives through access to education, enterprise, skills development, and sustainable livelihoods, impacting vulnerable groups while promoting leadership, innovation, and economic inclusion.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  Founded by Dr. Babangida Ruma, The Ruma Foundation embodies a vision of hope and opportunity, creating lasting positive change in underserved communities through comprehensive development initiatives that address both immediate needs and long-term sustainability.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gradient-to-br from-emerald-700 to-teal-700 text-white py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">Our Impact</h2>
              <p className="text-xl text-emerald-100 font-light">Making a real difference, one life at a time</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-emerald-300/30 hover:bg-white/20 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl sm:text-6xl font-light text-white mb-3">{stat.number}</div>
                  <div className="text-sm sm:text-base text-emerald-100 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Programs */}
      <section id="programs" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                Our Programs
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Comprehensive initiatives driving sustainable development and empowerment
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-24 max-w-4xl mx-auto">
            {corePrograms.map((program, index) => {
              const IconComponent = program.Icon;
              return (
                <AnimatedSection key={index} animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}>
                  <motion.div
                    className="border-b border-gray-200 pb-20 last:border-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-8 mb-8">
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-gray-300 rounded-full bg-white">
                        <IconComponent size={24} className="text-gray-700" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-light text-black mb-4 tracking-tight">{program.name}</h3>
                        <p className="text-base text-gray-600 leading-relaxed font-light max-w-2xl">
                          {program.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="ml-22 grid sm:grid-cols-2 gap-4">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-gray-400 mr-3 mt-1">—</span>
                          <span className="text-sm text-gray-700 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                Our Values
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                The principles that guide our commitment to creating lasting impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {values.map((value, index) => {
                const IconComponent = value.Icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 sm:p-8 border border-gray-200 hover:border-black transition-colors duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start mb-4">
                      <IconComponent size={40} className="text-black mr-4 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">{value.title}</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                Our Impact
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Transforming lives and communities through dedicated service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-black pl-6 py-4 bg-gray-50"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">{achievement.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{achievement.content}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedSection animation="fadeIn">
        <section className="section-padding bg-black text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Join Us in Creating Impact
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Together, we can create lasting change in communities across Northern Nigeria. Partner with us to transform lives through education, skills development, and sustainable livelihoods.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button to="/contact" variant="secondary">
                  Get Involved
                </Button>
                <Button to="/profile" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 sm:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8">
            {/* Brand */}
            <div>
              <img 
                src={rumaLogo} 
                alt="Ruma Foundation Logo" 
                className="h-16 w-auto mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">The Ruma Foundation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Transforming lives through education, enterprise, and skills development.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li>Northern Nigeria</li>
                <li>info@rumafoundation.org</li>
                <li>+234 (0) 8100061111</li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Education Support</a></li>
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Skills Development</a></li>
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Community Empowerment</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/profile" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">About Founder</a></li>
                <li><a href="/business" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Initiatives</a></li>
                <li><a href="/contact" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 pt-8 text-center">
            <p className="text-sm sm:text-base text-gray-600">
              © {currentYear} The Ruma Foundation. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Founded by Dr. Babangida Ruma | A registered non-profit organization
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RumaFoundation;
