import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BookOpen, Target, Sparkles, Globe, Award, TrendingUp, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const LIFE = () => {
  const impactStats = [
    { number: '10,000+', label: 'Youth Trained' },
    { number: '2,000+', label: 'Entrepreneurs Created' },
    { number: '50+', label: 'Communities Impacted' },
    { number: '8+', label: 'Years of Service' }
  ];

  const corePrograms = [
    {
      name: 'Youth Entrepreneurship Training',
      description: 'Comprehensive training programs designed to equip young people with practical entrepreneurship skills and business acumen.',
      features: [
        'Business Planning Workshops',
        'Financial Literacy Training',
        'Market Research & Analysis',
        'Customer Acquisition Strategies'
      ],
      Icon: BookOpen
    },
    {
      name: 'Skills Development Programs',
      description: 'Hands-on learning experiences that develop technical and soft skills essential for entrepreneurial success.',
      features: [
        'Technical Skills Training',
        'Soft Skills Development',
        'Leadership & Communication',
        'Problem-Solving Techniques'
      ],
      Icon: TrendingUp
    },
    {
      name: 'Mentorship and Coaching',
      description: 'One-on-one guidance and support from experienced entrepreneurs and business leaders.',
      features: [
        'Personal Mentorship',
        'Business Coaching',
        'Networking Opportunities',
        'Ongoing Support'
      ],
      Icon: Award
    },
    {
      name: 'Opportunity Creation Workshops',
      description: 'Innovative workshops that teach youth how to identify, create, and capitalize on entrepreneurial opportunities.',
      features: [
        'Opportunity Recognition',
        'Business Model Development',
        'Pitch Preparation',
        'Access to Funding'
      ],
      Icon: Lightbulb
    }
  ];

  const values = [
    {
      title: 'Empowerment',
      description: 'Empowering youth to become creators of opportunities rather than seekers of jobs.',
      Icon: Rocket
    },
    {
      title: 'Innovation',
      description: 'Fostering a culture of innovation and creative problem-solving.',
      Icon: Sparkles
    },
    {
      title: 'Practical Excellence',
      description: 'Focusing on practical, real-world skills that translate to business success.',
      Icon: Target
    },
    {
      title: 'Community Impact',
      description: 'Building entrepreneurs who create value for their communities.',
      Icon: Globe
    }
  ];

  const achievements = [
    {
      title: 'Youth Empowerment',
      content: 'Transforming thousands of young people into confident, skilled entrepreneurs ready to create their own opportunities.'
    },
    {
      title: 'Entrepreneurship Culture',
      content: 'Building a strong culture of entrepreneurship among Nigerian youth.'
    },
    {
      title: 'Economic Development',
      content: 'Creating jobs and contributing to economic growth through youth-led businesses.'
    },
    {
      title: 'Opportunity Creation',
      content: 'Teaching youth to identify and create opportunities where none existed before.'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        
        <div className="relative z-10 w-full pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4 sm:px-0">
                  Learning Initiative For Entrepreneurship
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 font-light">
                  (LIFE)
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 font-medium px-4 sm:px-0">
                  Transforming Youth Into Creators of Opportunities
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                  An innovation-driven skills and enterprise program empowering young people with the tools, knowledge, and mindset to build successful businesses and create their own opportunities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button to="/contact" variant="secondary" size="lg" className="px-8">
                  Join Our Programs
                </Button>
                <Button to="/profile" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                To transform youth into creators of opportunities through innovation-driven skills development and comprehensive entrepreneurship training.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                LIFE provides young people with the practical skills, knowledge, and entrepreneurial mindset needed to build successful businesses and contribute to economic development.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white p-6 sm:p-8 border border-gray-200 hover:border-black transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl sm:text-5xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
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
                Comprehensive entrepreneurship training and support for aspiring young entrepreneurs
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {corePrograms.map((program, index) => {
              const IconComponent = program.Icon;
              return (
                <AnimatedSection key={index} animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}>
                  <motion.div
                    className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`bg-gray-50 border border-gray-200 p-6 sm:p-8 md:p-12 ${index % 2 === 1 ? 'order-2' : ''}`}>
                      <div className="text-center">
                        <div className="flex justify-center mb-4 sm:mb-6">
                          <IconComponent size={80} className="text-black" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">{program.name}</h3>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'order-1' : ''}`}>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                        {program.description}
                      </p>
                      <ul className="space-y-2 sm:space-y-3">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-black mr-2 sm:mr-3 text-lg sm:text-xl">•</span>
                            <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
                The core principles that guide our mission to transform youth into successful entrepreneurs
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
                Empowering youth to create their own opportunities and build successful businesses
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
                Start Your Entrepreneurial Journey
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join LIFE today and transform yourself from a job seeker into an opportunity creator. Start building your business and create the future you want.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button to="/contact" variant="secondary">
                  Join Our Programs
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
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Learning Initiative For Entrepreneurship</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Transforming youth into creators of opportunities through innovation-driven entrepreneurship training.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li>Northern Nigeria</li>
                <li>info@life.org.ng</li>
                <li>+234 (0) 8100061111</li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Entrepreneurship Training</a></li>
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Skills Development</a></li>
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Mentorship</a></li>
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Opportunity Creation</a></li>
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
              © {currentYear} Learning Initiative For Entrepreneurship. All rights reserved.
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

export default LIFE;
