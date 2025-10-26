import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Rocket, Target, Sparkles, Globe, Award, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const SINA = () => {
  const impactStats = [
    { number: '5,000+', label: 'Change Makers Trained' },
    { number: '500+', label: 'Social Ventures Launched' },
    { number: '100+', label: 'Communities Impacted' },
    { number: '10+', label: 'Years of Service' }
  ];

  const corePrograms = [
    {
      name: 'Leadership Development',
      description: 'Equipping emerging leaders with the skills, mindset, and confidence to drive positive change in their communities.',
      features: [
        'Leadership Workshops',
        'Personal Development Programs',
        'Mentorship Networks',
        'Leadership Certification'
      ],
      Icon: Users
    },
    {
      name: 'Social Enterprise Incubation',
      description: 'Supporting innovative social ventures from ideation to launch through comprehensive incubation and acceleration programs.',
      features: [
        'Business Model Development',
        'Market Research Support',
        'Prototype Development',
        'Access to Seed Funding'
      ],
      Icon: Rocket
    },
    {
      name: 'Innovation Labs',
      description: 'Creating collaborative spaces where innovators can experiment, prototype, and develop solutions to pressing social challenges.',
      features: [
        'Design Thinking Workshops',
        'Problem-Solving Sessions',
        'Prototyping Support',
        'Access to Tools & Resources'
      ],
      Icon: Lightbulb
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Fostering creative thinking and bold solutions to address complex social challenges.',
      Icon: Sparkles
    },
    {
      title: 'Impact',
      description: 'Focusing on measurable, sustainable outcomes that create lasting positive change.',
      Icon: Target
    },
    {
      title: 'Collaboration',
      description: 'Building strong networks and partnerships to maximize collective impact.',
      Icon: Globe
    },
    {
      title: 'Excellence',
      description: 'Maintaining high standards in program delivery and continuous improvement.',
      Icon: Award
    }
  ];

  const achievements = [
    {
      title: 'Leadership Development',
      content: 'Empowering thousands of change makers with essential leadership and innovation skills.'
    },
    {
      title: 'Social Entrepreneurship',
      content: 'Supporting the launch of hundreds of sustainable social ventures across Nigeria.'
    },
    {
      title: 'Innovation Culture',
      content: 'Promoting a culture of innovation and problem-solving in underserved communities.'
    },
    {
      title: 'Systemic Change',
      content: 'Building systems and solutions that address root causes of social challenges.'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 w-full pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <span className="text-white text-sm font-semibold uppercase tracking-wide">Leadership Academy</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight px-4 sm:px-0">
                  Social Innovation
                  <span className="block text-blue-200">Academy</span>
                </h1>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-100 mb-6">
                  (SINA)
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto font-light">
                  Empowering the next generation of leaders to create sustainable impact and solve Nigeria's most pressing challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
                  Join Our Programs
                </button>
                <button className="px-8 py-4 bg-blue-500/30 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-blue-500/50 transition-all">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="section-padding bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">
                  Our Mission
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To equip change makers with the skills, mindset, and systems to build sustainable impact enterprises and social ventures that solve Nigeria's most pressing challenges.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  SINA fosters a culture of innovation and social entrepreneurship, empowering leaders to create lasting positive change in their communities through cutting-edge training programs and mentorship.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Why SINA?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✨</span>
                    <span>World-class innovation training programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🚀</span>
                    <span>Access to seed funding and resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">👥</span>
                    <span>Networking with global leaders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">💡</span>
                    <span>Hands-on social enterprise incubation</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
              <p className="text-blue-100 text-lg">Creating measurable change across Nigeria</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-blue-100 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Programs */}
      <section id="programs" className="section-padding bg-gradient-to-b from-white to-blue-50/30 py-20">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-black text-blue-900 mb-4">
                Our Programs
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive training and support for aspiring social entrepreneurs
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-20">
            {corePrograms.map((program, index) => {
              const IconComponent = program.Icon;
              return (
                <AnimatedSection key={index} animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}>
                  <motion.div
                    className={`grid md:grid-cols-2 gap-12 items-center`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-10 md:p-16 shadow-2xl ${index % 2 === 1 ? 'order-2' : ''}`}>
                      <div className="text-center">
                        <div className="flex justify-center mb-6">
                          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                            <IconComponent size={80} className="text-white" strokeWidth={2} />
                          </div>
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">{program.name}</h3>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'order-1' : ''}`}>
                      <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                        {program.description}
                      </p>
                      <div className="space-y-4">
                        {program.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center bg-blue-50 p-4 rounded-xl border border-blue-200"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                            <span className="text-base text-gray-800 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
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
                The principles that drive our commitment to social innovation and transformation
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
                Empowering social innovators and driving systemic change across Nigeria
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
                Ready to Create Impact?
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join our programs to develop your leadership skills, build your social venture, and make a lasting difference in your community.
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
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Social Innovation Academy</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Empowering change makers to solve Nigeria's most pressing challenges.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li>Northern Nigeria</li>
                <li>info@sina.org.ng</li>
                <li>+234 (0) 8100061111</li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Leadership Development</a></li>
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Social Enterprise Incubation</a></li>
                <li><a href="#programs" className="text-sm sm:text-base text-gray-600 hover:text-black transition-colors">Innovation Labs</a></li>
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
              © {currentYear} Social Innovation Academy. All rights reserved.
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

export default SINA;
