import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users, Globe, Lightbulb, BookOpen, Star, Trophy, Target, Heart, Zap, Building2, GraduationCap, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const Profile = () => {
  const stats = [
    { number: "20+", label: "Years of Impact", icon: <Calendar size={24} />, color: "bg-blue-500" },
    { number: "6", label: "Organizations Founded", icon: <Building2 size={24} />, color: "bg-green-500" },
    { number: "25+", label: "Awards Received", icon: <Trophy size={24} />, color: "bg-yellow-500" },
    { number: "100+", label: "Countries Impacted", icon: <Globe size={24} />, color: "bg-purple-500" },
    { number: "1M+", label: "Lives Transformed", icon: <Heart size={24} />, color: "bg-red-500" },
    { number: "3", label: "Books Published", icon: <BookOpen size={24} />, color: "bg-indigo-500" }
  ];

  const achievements = [
    {
      title: "UNESCO Recognition",
      subtitle: "Father of Technology and Innovation",
      year: "2018",
      description: "Named by UNESCO Institute for Information Technologies in Education for innovative use of technology for development",
      icon: <Zap size={32} />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Global Achievers Award",
      subtitle: "First African in History",
      year: "2016",
      description: "First African to receive both Commonwealth and Global Achievers Awards",
      icon: <Trophy size={32} />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Top 20 Influential Leaders",
      subtitle: "World Ranking",
      year: "2016",
      description: "Ranked among the Top 20 Most Influential Young Leaders in the World",
      icon: <Star size={32} />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Commonwealth Ambassador",
      subtitle: "Global Youth Leadership",
      year: "2015-2017",
      description: "Served as Global Youth Ambassador for the world's largest youth organization",
      icon: <Globe size={32} />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const organizations = [
    {
      name: "CODE",
      fullName: "Collective Development",
      role: "Founder & Executive Vice Chairman",
      description: "Pioneering foundation advancing girl-child education and women's empowerment",
      initiatives: ["WAGES", "INCOMING", "LIFE"],
      color: "bg-blue-600"
    },
    {
      name: "OHUB",
      fullName: "Opportunities Hub",
      role: "Founder",
      description: "Digital technology ecosystem placing African youth at the center of global transformation",
      initiatives: ["Digital Innovation", "Employability", "Jobs Creation"],
      color: "bg-green-600"
    },
    {
      name: "SINA",
      fullName: "Social Innovation Academy",
      role: "Founder",
      description: "Leadership and innovation institute equipping change makers",
      initiatives: ["Leadership Training", "Innovation", "Social Ventures"],
      color: "bg-purple-600"
    },
    {
      name: "EUN",
      fullName: "Enterprise University of Nigeria",
      role: "Founder",
      description: "Institution focused on nurturing a new generation of entrepreneurs",
      initiatives: ["Practical Education", "Research", "Innovation"],
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
              {/* Left Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Star size={16} className="text-yellow-400" />
                  Living Legend
                </motion.div>

                {/* Name */}
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Dr. Babangida
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Ruma
                  </span>
                </motion.h1>

                {/* Title */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-2xl sm:text-3xl text-blue-200 font-light">
                    Technology & Social Entrepreneur
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                    Transforming Africa through innovation, youth empowerment, and sustainable development
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button to="/contact" variant="secondary" size="lg">
                    Get in Touch
                  </Button>
                  <Button to="/business" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                    View Portfolio
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Side - Portrait */}
              <motion.div 
                className="relative flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-30 scale-110" />
                  
                  {/* Portrait */}
                  <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[36rem]">
                    <img 
                      src="/assets/hero.jpg"
                      alt="Dr. Babangida Ruma"
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Impact by Numbers
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Two decades of transformative leadership and measurable impact across Africa
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Major Achievements Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Major Achievements
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Recognized globally for innovation, leadership, and transformative impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <div className="text-white">
                          {achievement.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-slate-900">{achievement.title}</h3>
                          <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                            {achievement.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">{achievement.subtitle}</h4>
                        <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Organizations Founded
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Leading multiple organizations focused on youth empowerment and community development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 ${org.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-bold text-lg">{org.name}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{org.fullName}</h3>
                        <p className="text-sm font-medium text-blue-600 mb-3">{org.role}</p>
                        <p className="text-slate-600 leading-relaxed mb-4">{org.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {org.initiatives.map((initiative, i) => (
                            <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                              {initiative}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  A True Living Legend
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  His name is a globally-recognised brand that stands for Creativity, Innovation, Philanthropy and Excellence in Enterprise education.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="prose prose-lg prose-slate max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Dr. Babangida Ruma is a Nigerian technology and social entrepreneur, visionary youth leader, and advocate for enterprise and skills development. With more than two decades of transformative leadership, he has dedicated his career to building platforms that empower young people, strengthen institutions, and create inclusive economic opportunities across Nigeria and African countries.
                  </p>
                  
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Globally celebrated for his innovative use of technology for development, Dr. Ruma was named "Father of Technology and Innovation" by the UNESCO Institute for Information Technologies in Education. He has worked with world leaders to empower young people, build human capital, rebrand nations, and promote peace, innovation, and prosperity.
                  </p>
                  
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Dr. Ruma has been honored with numerous awards, including Social Worker of the Year (2016), the African Achievers Award, the Commonwealth Young Achievers Award, and the Global Achievers Award making him the first African in history to receive both the Commonwealth and Global Achievers Awards.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="container-custom relative z-10">
          <AnimatedSection animation="fadeIn">
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
                className="text-xl text-blue-200 mb-12 leading-relaxed"
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
                <Button to="/contact" variant="secondary" size="lg">
                  Start a Conversation
                </Button>
                <Button to="/business" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                  View Portfolio
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Profile;