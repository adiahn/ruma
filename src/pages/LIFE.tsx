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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 w-full pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="inline-flex items-center px-5 py-2 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30">
                  <span className="text-white text-sm font-bold uppercase tracking-wider">🚀 Young Entrepreneurs Program</span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none">
                  Start Your
                  <span className="block bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Entrepreneurship</span>
                  <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">Journey</span>
                </h1>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-100 mb-4">
                  LIFE Program
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-orange-50 mb-12 max-w-3xl mx-auto font-medium">
                  Transform from an opportunity seeker to an opportunity creator. Build your business from the ground up.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <button className="group px-10 py-5 bg-white text-orange-600 font-black text-lg rounded-2xl hover:shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-1">
                  Apply Now
                  <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                </button>
                <button className="px-10 py-5 bg-orange-600/30 backdrop-blur-md border-3 border-white text-white font-black text-lg rounded-2xl hover:bg-orange-600/50 transition-all">
                  View Program Details
                </button>
              </motion.div>

              {/* Stats Banner */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-16 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              >
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white">2000+</div>
                    <div className="text-yellow-100 text-sm font-bold mt-2">Graduates</div>
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white">500+</div>
                    <div className="text-yellow-100 text-sm font-bold mt-2">Startups</div>
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white">₦50M+</div>
                    <div className="text-yellow-100 text-sm font-bold mt-2">Funding Raised</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="section-padding bg-white py-24">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-5xl sm:text-6xl font-black text-orange-600 mb-6 leading-tight">
                  Turn Your Ideas Into
                  <span className="block text-orange-800">Profitable Businesses</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mb-8"></div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  LIFE is not just a training program—it's a complete entrepreneurship ecosystem designed to transform ambitious young Nigerians into successful business owners.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With hands-on mentorship, access to funding opportunities, and a supportive community of fellow entrepreneurs, you'll have everything you need to succeed.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-transform">
                <h3 className="text-3xl font-black mb-6">What You Get</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-3xl mr-4">💼</span>
                    <span className="font-semibold">Business Plan Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-3xl mr-4">💰</span>
                    <span className="font-semibold">Access to Startup Funding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-3xl mr-4">🤝</span>
                    <span className="font-semibold">1-on-1 Mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-3xl mr-4">🌐</span>
                    <span className="font-semibold">Networking Opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gradient-to-br from-orange-600 to-amber-600 text-white py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-black mb-4">Our Impact</h2>
              <p className="text-xl text-orange-100">Real Results. Real Businesses. Real Impact.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/30 hover:bg-white/30 transition-all cursor-pointer transform hover:scale-110"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl sm:text-6xl font-black text-white mb-3">{stat.number}</div>
                  <div className="text-base text-orange-100 font-bold uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Programs */}
      <section id="programs" className="section-padding bg-white py-24">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-5xl sm:text-6xl font-light text-black mb-6 tracking-tight">
                Our Programs
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Step-by-step programs designed for startup success
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
