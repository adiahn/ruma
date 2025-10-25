import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Rocket, TrendingUp, Target, Heart, Sparkles, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const CODE = () => {
  const impactStats = [
    { number: '10,000+', label: 'Women & Girls Empowered' },
    { number: '5,000+', label: 'Entrepreneurs Trained' },
    { number: '50+', label: 'Communities Impacted' },
    { number: '15+', label: 'Years of Service' }
  ];

  const corePrograms = [
    {
      name: 'WAGES',
      fullName: 'Women & Girls-Child Entrepreneurship Support Program',
      description: 'Empowering women and girls through entrepreneurship training, mentorship, and access to funding opportunities to create sustainable businesses and economic independence.',
      features: [
        'Business Skills Training',
        'Mentorship Programs',
        'Access to Microfinance',
        'Market Linkage Support'
      ],
      Icon: Users
    },
    {
      name: 'INCOMING',
      fullName: 'Initiative for Community Intervention on Girls-Child',
      description: 'Protecting and supporting vulnerable girls through education, skills training, and community-based interventions to prevent child marriage and promote empowerment.',
      features: [
        'Education Support',
        'Skills Development',
        'Community Awareness',
        'Protection Services'
      ],
      Icon: GraduationCap
    },
    {
      name: 'LIFE',
      fullName: 'Learning Initiative for Entrepreneurship',
      description: 'An innovation-driven skills and enterprise program transforming youth into creators of opportunities through practical entrepreneurship education and mentorship.',
      features: [
        'Enterprise Training',
        'Innovation Labs',
        'Startup Incubation',
        'Investment Readiness'
      ],
      Icon: Rocket
    }
  ];

  const values = [
    {
      title: 'Empowerment',
      description: 'We believe in unlocking the potential of every woman and girl to create positive change in their communities.',
      Icon: TrendingUp
    },
    {
      title: 'Innovation',
      description: 'We leverage creative solutions and technology to address social challenges and drive sustainable development.',
      Icon: Sparkles
    },
    {
      title: 'Inclusion',
      description: 'We ensure that underserved communities, especially women and girls, have equal access to opportunities.',
      Icon: Globe
    },
    {
      title: 'Sustainability',
      description: 'We build programs that create long-lasting impact and empower communities to thrive independently.',
      Icon: Target
    }
  ];

  const achievements = [
    {
      title: 'Girl-Child Education Advocacy',
      content: 'Promoting access to quality education for thousands of girls across Northern Nigeria.'
    },
    {
      title: 'Women Entrepreneurship',
      content: 'Supporting women-led businesses and creating economic opportunities in underserved communities.'
    },
    {
      title: 'Skills Development',
      content: 'Providing vocational training and digital skills to enhance employability and entrepreneurship.'
    },
    {
      title: 'Community Transformation',
      content: 'Building stronger communities through education, empowerment, and sustainable development initiatives.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Collective Development (CODE)
                </h1>
                <p className="text-xl sm:text-2xl text-gray-100 mb-8 font-light">
                  Pioneering Foundation for Girl-Child Education & Women's Empowerment
                </p>
                <p className="text-lg text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Transforming lives through education, entrepreneurship, and community-driven initiatives across Northern Nigeria and beyond.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button to="/contact" variant="secondary" size="lg" className="px-8">
                  Get Involved
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                To advance girl-child education, women's empowerment, and community-driven entrepreneurship through innovative programs and sustainable initiatives.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Under the visionary leadership of Dr. Babangida Ruma, CODE has launched groundbreaking initiatives that position it as a leading force for social and economic transformation. We believe that when women and girls are empowered, entire communities thrive.
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                Our Programs
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Three flagship initiatives driving transformative impact across Northern Nigeria
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {corePrograms.map((program, index) => {
              const IconComponent = program.Icon;
              return (
                <AnimatedSection key={index} animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}>
                  <motion.div
                    className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon & Name */}
                    <div className={`bg-gray-50 border border-gray-200 p-8 sm:p-12 ${index % 2 === 1 ? 'order-2' : ''}`}>
                      <div className="text-center">
                        <div className="flex justify-center mb-6">
                          <IconComponent size={80} className="text-black" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">{program.name}</h3>
                        <p className="text-base sm:text-lg text-gray-700">{program.fullName}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className={`${index % 2 === 1 ? 'order-1' : ''}`}>
                      <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                        {program.description}
                      </p>
                      <ul className="space-y-3">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-black mr-3 text-xl">•</span>
                            <span className="text-gray-700">{feature}</span>
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
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.Icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 p-6 sm:p-8 hover:border-black transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent size={48} className="text-black" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-3 text-center">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
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
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Creating lasting change in communities across Northern Nigeria
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-black pl-6 py-4 bg-gray-50"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">{achievement.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{achievement.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedSection animation="fadeIn">
        <section className="section-padding bg-black text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Join Us in Creating Lasting Change
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Whether you're looking to partner, volunteer, or support our initiatives, there are many ways to get involved in our mission.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button to="/contact" variant="secondary" size="lg">
                  Partner With Us
                </Button>
                <Button to="/profile" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More About Our Work
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default CODE;
