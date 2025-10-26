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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
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
                  Social Innovation Academy
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 font-light">
                  (SINA)
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 font-medium px-4 sm:px-0">
                  Equipping Change Makers to Solve Nigeria's Most Pressing Challenges
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                  A forward-thinking leadership and innovation institute empowering social entrepreneurs with the skills, mindset, and systems to build sustainable impact enterprises.
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
                To equip change makers with the skills, mindset, and systems to build sustainable impact enterprises and social ventures that solve Nigeria's most pressing challenges.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                SINA fosters a culture of innovation and social entrepreneurship, empowering leaders to create lasting positive change in their communities.
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
                Comprehensive training and support for aspiring social entrepreneurs and change makers
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
