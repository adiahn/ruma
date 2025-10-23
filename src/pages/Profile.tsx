import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const Profile = () => {
  const stats = [
    { number: "20+", label: "Years of Impact" },
    { number: "6", label: "Organizations Founded" },
    { number: "25+", label: "Awards Received" },
    { number: "100+", label: "Countries Impacted" },
    { number: "1M+", label: "Lives Transformed" },
    { number: "3", label: "Books Published" }
  ];

  const achievements = [
    {
      title: "UNESCO Recognition",
      subtitle: "Father of Technology and Innovation",
      year: "2018",
      description: "Named by UNESCO Institute for Information Technologies in Education for innovative use of technology for development"
    },
    {
      title: "Global Achievers Award",
      subtitle: "First African in History",
      year: "2016",
      description: "First African to receive both Commonwealth and Global Achievers Awards"
    },
    {
      title: "Top 20 Influential Leaders",
      subtitle: "World Ranking",
      year: "2016",
      description: "Ranked among the Top 20 Most Influential Young Leaders in the World"
    },
    {
      title: "Commonwealth Ambassador",
      subtitle: "Global Youth Leadership",
      year: "2015-2017",
      description: "Served as Global Youth Ambassador for the world's largest youth organization"
    }
  ];

  const organizations = [
    {
      name: "Collective Development (CODE)",
      role: "Founder & Executive Vice Chairman",
      description: "Pioneering foundation advancing girl-child education and women's empowerment"
    },
    {
      name: "Opportunities Hub (OHUB)",
      role: "Founder",
      description: "Digital technology ecosystem placing African youth at the center of global transformation"
    },
    {
      name: "Social Innovation Academy (SINA)",
      role: "Founder",
      description: "Leadership and innovation institute equipping change makers"
    },
    {
      name: "Enterprise University of Nigeria (EUN)",
      role: "Founder",
      description: "Institution focused on nurturing a new generation of entrepreneurs"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/hero.jpg)',
            filter: 'grayscale(100%) brightness(0.3)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[50vh] py-20">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
                  Dr. Babangida<br />Ruma
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
                  Technology & Social Entrepreneur
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
                  Transforming Africa through innovation, youth empowerment, and sustainable development
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button to="/contact" variant="secondary" size="lg" className="min-w-[180px]">
                    Get in Touch
                  </Button>
                  <Button to="/business" variant="outline" size="lg" className="min-w-[180px] border-2 border-white text-white hover:bg-white hover:text-black">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-responsive-lg font-bold text-black mb-6">
                Impact by Numbers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Two decades of transformative leadership and measurable impact across Africa
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Major Achievements Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-responsive-lg font-bold text-black mb-6">
                Major Achievements
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Recognized globally for innovation, leadership, and transformative impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-black pl-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-black mb-2">{achievement.title}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">{achievement.subtitle}</h4>
                    <span className="text-sm text-gray-500 font-medium">{achievement.year}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-responsive-lg font-bold text-black mb-6">
                Organizations Founded
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Leading multiple organizations focused on youth empowerment and community development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 p-8 hover:border-black transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-black mb-2">{org.name}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-4">{org.role}</p>
                  <p className="text-gray-700 leading-relaxed">{org.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-responsive-lg font-bold text-black mb-6">
                  A True Living Legend
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  His name is a globally-recognised brand that stands for Creativity, Innovation, Philanthropy and Excellence in Enterprise education.
                </p>
              </div>

              <div className="bg-white p-12 border border-gray-200">
                <div className="prose prose-lg prose-gray max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Dr. Babangida Ruma is a Nigerian technology and social entrepreneur, visionary youth leader, and advocate for enterprise and skills development. With more than two decades of transformative leadership, he has dedicated his career to building platforms that empower young people, strengthen institutions, and create inclusive economic opportunities across Nigeria and African countries.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Globally celebrated for his innovative use of technology for development, Dr. Ruma was named "Father of Technology and Innovation" by the UNESCO Institute for Information Technologies in Education. He has worked with world leaders to empower young people, build human capital, rebrand nations, and promote peace, innovation, and prosperity.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dr. Ruma has been honored with numerous awards, including Social Worker of the Year (2016), the African Achievers Award, the Commonwealth Young Achievers Award, and the Global Achievers Award making him the first African in history to receive both the Commonwealth and Global Achievers Awards.
                  </p>
                </div>
              </div>
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
                className="text-4xl md:text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Ready to Create Impact Together?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Let's explore how we can collaborate to advance youth empowerment, social entrepreneurship, and sustainable development across Africa.
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
                <Button to="/business" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  View Portfolio
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Profile;