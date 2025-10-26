import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const Profile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { number: "20+", label: "Years of Impact" },
    { number: "7", label: "Organizations Founded" },
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
      subtitle: "First Nigerian in History",
      year: "2016",
      description: "First Nigerian to receive both Commonwealth and Global Achievers Awards"
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
      description: "Pioneering foundation advancing girl-child education and women's empowerment",
      link: "/code"
    },
    {
      name: "Opportunities Hub (OHUB)",
      role: "Founder",
      description: "Digital technology ecosystem placing Nigerian youth at the center of global transformation",
      link: "https://opportunitieshub.ng"
    },
    {
      name: "Social Innovation Academy (SINA)",
      role: "Founder",
      description: "Leadership and innovation institute equipping change makers",
      link: "/sina"
    },
    {
      name: "Enterprise University of Nigeria (EUN)",
      role: "Founder",
      description: "Institution focused on nurturing a new generation of entrepreneurs"
    },
    {
      name: "The Ruma Foundation",
      role: "Founder",
      description: "Philanthropic foundation transforming lives through access to education, enterprise, skills development, and sustainable livelihoods",
      link: "/ruma-foundation"
    },
    {
      name: "Learning Initiative For Entrepreneurship (LIFE)",
      role: "Founder",
      description: "Innovation-driven skills and enterprise program transforming youth into creators of opportunities",
      link: "/life"
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
            backgroundImage: 'url(/assets/hero.jpg)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[50vh] py-20">
              <div className="text-center">
                <div className="bg-black bg-opacity-60 px-8 py-6 rounded-lg mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-6">
                    Dr. Babangida<br />Ruma
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-4 sm:mb-6 font-light">
                    Technology & Social Entrepreneur
                  </p>
                  
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                    Transforming Nigeria through innovation, youth empowerment, and sustainable development
                  </p>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                  <Button to="/contact" variant="secondary" size="lg" className="w-full sm:min-w-[180px] text-sm sm:text-base">
                    Get in Touch
                  </Button>
                  <Button to="/business" variant="outline" size="lg" className="w-full sm:min-w-[180px] border-2 border-white text-white hover:bg-white hover:text-black text-sm sm:text-base">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 sm:mb-8">
                A True Living Legend
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0 mb-4 sm:mb-6">
                His name is a globally-recognised brand that stands for Creativity, Innovation, Philanthropy and Excellence in Enterprise education. His natural talent and unique vision, coupled with limitless drive, have led him to achieve what others might take many lifetimes to achieve.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
                Colleagues and compatriots, competitors and admirers alike agree that Dr. Babangida Ruma is truly a living legend.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 border border-gray-200">
                <div className="prose prose-lg prose-gray max-w-none">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    Dr. Babangida Ruma is a Nigerian technology and social entrepreneur, visionary youth leader, and advocate for enterprise and skills development, as well as a political appointee. A prominent voice in youth development, he is known for his work in technology-driven education, entrepreneurship, and community organization. With more than two decades of transformative leadership, he has dedicated his career to building platforms that empower young people, strengthen institutions, and create inclusive economic opportunities across Nigeria and Nigerian countries.
                  </p>
                  
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        He is the Founder & Executive Vice Chairman of Collective Development (CODE), a pioneering foundation advancing girl-child education, women's empowerment, skills acquisition, and community-driven entrepreneurship. Under his leadership, CODE has launched groundbreaking initiatives such as the Women & Girls-child Entrepreneurship Support Program (WAGES), the Initiative for Community Intervention on Girls-Child (INCOMING), and the Learning Initiative for Entrepreneurship (LIFE) an innovation-driven skills and enterprise program transforming youth into creators of opportunities. These initiatives have positioned CODE as a leading force for social and economic transformation in Northern Nigeria and beyond.
                      </p>
                      
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        He is also the Founder of Opportunities Hub (OHUB), a dynamic digital technology ecosystem placing Nigerian youth at the center of global transformation through digital innovation, employability and jobs creation. In line with his global vision, Dr. Ruma later founded the Social Innovation Academy (SINA) a forward thinking leadership and innovation institute equipping change makers with the skills, mindset, and systems to build sustainable impact enterprises and social ventures that solve Nigerian's most pressing challenges.
                      </p>
                      
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        Driven by his mission to institutionalise enterprise-driven learning, Dr. Ruma founded the Enterprise University of Nigeria (EUN), an institution focused on nurturing a new generation of entrepreneurs through practical education, research, and innovation. He also established the MSMEs Business Management Organization (BMO), a national platform providing business support, advisory solutions, and capacity-building services for micro, small, and medium enterprises across Nigeria.
                      </p>
                      
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        From 2015 to 2017, Dr. Ruma served as the Global Youth Ambassador for the Commonwealth Youth Council (CYC) the world's largest youth organisation and as the United Nations Global Ambassador for the #TheirWorldAtSchool Education Campaign. His work has significantly advanced youth empowerment, enterprise, innovation, and digital inclusion across Nigeria.
                      </p>
                      
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        As part of his lifelong commitment to underserved communities, he founded The Ruma Foundation, a philanthropic foundation transforming lives through access to education, enterprise, skills development, and sustainable livelihoods. Through this foundation, he continues to impact vulnerable groups while promoting leadership, innovation, and economic inclusion across Northern Nigeria.
                      </p>
                      
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        Globally celebrated for his innovative use of technology for development, Dr. Ruma was named "Father of Technology and Innovation" by the UNESCO Institute for Information Technologies in Education. He has worked with world leaders to empower young people, build human capital, rebrand nations, and promote peace, innovation, and prosperity.
                      </p>
                      
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        Dr. Ruma has been honored with numerous awards, including Social Worker of the Year (2016), the Nigerian Achievers Award, the Commonwealth Young Achievers Award, and the Global Achievers Award making him the first Nigerian in history to receive both the Commonwealth and Global Achievers Awards. He has been named among the 100 Most Influential Young Nigerians (2016 & 2020) and ranked among the Top 20 Most Influential Young Leaders in the World (2016).
                      </p>
                      
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        He has spoken at prestigious global platforms such as the World Economic Forum (China & South Nigeria), UNESCO Youth Forum (Paris), Geneva Convention, and OpenCon (Washington D.C.). In 2018, he authored Technology: A Tool for Youth Empowerment, ThinkLikeRuma, and 100 Skills for Survival, contributing over 20 journal articles and book chapters.
                      </p>
                      
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        In addition to his international engagements, he has served as Technical Assistant on Enterprise Development to the Katsina State Government, showcasing his deep commitment to policy reform, economic transformation, and sustainable regional development.
                      </p>
                    </motion.div>
                  )}
                  
                  <div className="mt-6 sm:mt-8 text-center">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font-medium hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                Impact by Numbers
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Two decades of transformative leadership and measurable impact across Nigeria
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
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
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                Major Achievements
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Recognized globally for innovation, leadership, and transformative impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-black pl-4 sm:pl-6 md:pl-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 sm:mb-2">{achievement.title}</h3>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">{achievement.subtitle}</h4>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">{achievement.year}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{achievement.description}</p>
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
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                Organizations Founded
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Leading multiple organizations focused on youth empowerment and community development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {organizations.map((org, index) => {
                const isExternalLink = org.link && org.link.startsWith('http');
                const content = (
                  <motion.div
                    className={`border border-gray-200 p-4 sm:p-6 md:p-8 hover:border-black transition-colors duration-300 ${
                      org.link ? 'cursor-pointer' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={org.link ? { y: -5 } : {}}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">{org.name}</h3>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mb-3 sm:mb-4">{org.role}</p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{org.description}</p>
                  </motion.div>
                );

                if (!org.link) {
                  return <div key={index}>{content}</div>;
                }

                if (isExternalLink) {
                  return (
                    <a key={index} href={org.link} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  );
                }

                return (
                  <Link key={index} to={org.link}>
                    {content}
                  </Link>
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
                Let's explore how we can collaborate to advance youth empowerment, social entrepreneurship, and sustainable development across Nigeria.
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