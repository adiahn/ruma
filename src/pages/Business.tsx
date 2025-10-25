import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const Business = () => {
  const stats = [
    { number: '6', label: 'Organizations Founded' },
    { number: '20+', label: 'Years of Impact' },
    { number: '3', label: 'Books Published' },
    { number: '25+', label: 'Global Recognition' },
  ];

  const organizations = [
    {
      name: 'Collective Development (CODE)',
      role: 'Founder & Executive Vice Chairman',
      description: 'Pioneering foundation advancing girl-child education, women\'s empowerment, skills acquisition, and community-driven entrepreneurship. Under this umbrella, groundbreaking initiatives include the Women & Girls-child Entrepreneurship Support Program (WAGES), the Initiative for Community Intervention on Girls-Child (INCOMING), and the Learning Initiative for Entrepreneurship (LIFE).',
      initiatives: [
        'Women & Girls-child Entrepreneurship Support Program (WAGES)',
        'Initiative for Community Intervention on Girls-Child (INCOMING)',
        'Learning Initiative for Entrepreneurship (LIFE)'
      ],
      link: '/code'
    },
    {
      name: 'Opportunities Hub (OHUB)',
      role: 'Founder',
      description: 'Dynamic digital technology ecosystem placing Nigerian youth at the center of global transformation through digital innovation, employability and jobs creation.',
      initiatives: [
        'Digital Skills Training Programs',
        'Technology Innovation Hub',
        'Youth Entrepreneurship Development'
      ]
    },
    {
      name: 'Social Innovation Academy (SINA)',
      role: 'Founder',
      description: 'Forward-thinking leadership and innovation institute equipping change makers with the skills, mindset, and systems to build sustainable impact enterprises and social ventures that solve Nigeria\'s most pressing challenges.',
      initiatives: [
        'Leadership Development Programs',
        'Social Enterprise Incubation',
        'Innovation Labs'
      ]
    },
    {
      name: 'Enterprise University of Nigeria (EUN)',
      role: 'Founder',
      description: 'Institution focused on nurturing a new generation of entrepreneurs through practical education, research, and innovation.',
      initiatives: [
        'Entrepreneurship Education',
        'Enterprise Research',
        'Innovation Programs'
      ]
    },
    {
      name: 'MSMEs Business Management Organization (BMO)',
      role: 'Founder',
      description: 'National platform providing business support, advisory solutions, and capacity-building services for micro, small, and medium enterprises across Nigeria.',
      initiatives: [
        'Business Advisory Services',
        'Capacity Building Workshops',
        'MSME Support Programs'
      ]
    },
    {
      name: 'The Ruma Foundation',
      role: 'Founder',
      description: 'Philanthropic foundation transforming lives through access to education, enterprise, skills development, and sustainable livelihoods, impacting vulnerable groups while promoting leadership, innovation, and economic inclusion across Northern Nigeria.',
      initiatives: [
        'Education Support Programs',
        'Skills Development Initiatives',
        'Community Empowerment Projects'
      ]
    },
  ];

  const corePrinciples = [
    {
      title: 'Youth Empowerment',
      description: 'Dedicated to empowering young people through skills development, entrepreneurship, and digital innovation across Nigeria.'
    },
    {
      title: 'Community Transformation',
      description: 'Creating sustainable solutions that address critical social challenges while fostering inclusive community development.'
    },
    {
      title: 'Innovation & Technology',
      description: 'Using technology as a tool for community transformation, earning recognition as Father of Technology and Innovation.'
    },
    {
      title: 'Sustainable Impact',
      description: 'Building platforms that strengthen institutions and create inclusive economic opportunities for underserved communities.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gray-900">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
                Organizations & Initiatives
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
                A portfolio of social enterprises and initiatives dedicated to youth empowerment, skills development, and sustainable community transformation across Nigeria.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                Core Principles
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                The fundamental principles that guide our approach to social entrepreneurship and community development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {corePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-black pl-4 sm:pl-6 md:pl-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Active Organizations Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                Active Organizations
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Social enterprises and initiatives driving youth empowerment and community development across Nigeria
              </p>
            </div>
            
            <div className="space-y-8 sm:space-y-12">
              {organizations.map((org, index) => {
                const content = (
                  <motion.div
                    className={`bg-white border border-gray-200 p-6 sm:p-8 md:p-10 hover:border-black transition-colors duration-300 ${
                      org.link ? 'cursor-pointer' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={org.link ? { y: -5 } : {}}
                  >
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3">
                        {org.name}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-gray-600 mb-4 sm:mb-6">
                        {org.role}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {org.description}
                      </p>
                    </div>
                    
                    {org.initiatives && org.initiatives.length > 0 && (
                      <div className="border-t border-gray-200 pt-4 sm:pt-6">
                        <h4 className="text-sm sm:text-base font-bold text-black mb-3 sm:mb-4 uppercase tracking-wide">
                          Key Initiatives
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {org.initiatives.map((initiative, idx) => (
                            <li key={idx} className="text-sm sm:text-base text-gray-700 flex items-start">
                              <span className="mr-2 mt-1">•</span>
                              <span>{initiative}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                );

                return org.link ? (
                  <Link key={index} to={org.link}>
                    {content}
                  </Link>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Ready to Create Impact Together?
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Whether you're passionate about youth empowerment, social entrepreneurship, or community development, let's discuss how we can collaborate to create lasting impact across Nigeria.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button to="/contact" variant="secondary">
                  Start a Conversation
                </Button>
                <Button to="/profile" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Learn About My Journey
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Business;
