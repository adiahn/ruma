import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users, Globe, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Profile = () => {
  const timeline = [
    {
      year: "Early 2000s",
      title: "Foundation of CODE",
      description: "Founded Collective Development (CODE), a pioneering foundation advancing girl-child education, women's empowerment, and community-driven entrepreneurship.",
      details: "Dr. Ruma established CODE as a platform to address critical social issues in Northern Nigeria and beyond. The foundation launched groundbreaking initiatives including WAGES (Women & Girls Entrepreneurship Support Program) and INCOMING (Initiative for Community Intervention on Girls-Child)."
    },
    {
      year: "2014",
      title: "U.S. State Department Recognition",
      description: "Honored as U.S. Department of State Alumni Member of the Month, recognizing his contributions to international development and youth empowerment.",
      details: "This recognition highlighted Dr. Ruma's growing international profile and his commitment to using technology and innovation to create sustainable solutions for communities across Africa."
    },
    {
      year: "2015-2017",
      title: "Global Youth Leadership",
      description: "Served as Global Youth Ambassador for Commonwealth Youth Council and UN Global Ambassador for #TheirWorldAtSchool Global Education Campaign.",
      details: "As the largest youth organization in the world, the Commonwealth Youth Council provided Dr. Ruma with a platform to advocate for youth empowerment, skills development, and digital innovation on a global scale."
    },
    {
      year: "2018",
      title: "Author & Thought Leader",
      description: "Published influential books including 'Technology: A Tool for Youth Empowerment', 'ThinkLikeRuma', and '100 Skills for Survival'.",
      details: "Dr. Ruma's books have become essential resources for young people seeking to develop practical skills and entrepreneurial knowledge. He has also authored or co-authored more than 20 journal articles and book chapters."
    },
    {
      year: "2020s",
      title: "Continuing Impact",
      description: "Named Father of Technology and Innovation by UNESCO and nominated for Africa Youth Award, continuing to inspire the next generation.",
      details: "Dr. Ruma continues to drive transformation through his various organizations including The Ruma Foundation, Enterprise University of Nigeria, and MSMEs Business Management Organization, while mentoring young entrepreneurs across Africa."
    }
  ];

  const achievements = [
    {
      icon: <Users size={24} />,
      title: "4+ Organizations Founded",
      description: "CODE, Enterprise University, MSMEs BMO, and The Ruma Foundation"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Recognition",
      description: "UNESCO Father of Technology and Innovation, Commonwealth Young Achievers Award"
    },
    {
      icon: <Award size={24} />,
      title: "25+ Awards",
      description: "Including Global Achievers Award (First African in History)"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "3 Books Published",
      description: "Technology: A Tool for Youth Empowerment, ThinkLikeRuma, 100 Skills for Survival"
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
            filter: 'grayscale(100%) brightness(0.4)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-screen py-20">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Quote */}
                <div>
                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed italic">
                    "The future will always be defined by people who have the tenacity to succeed no matter what the odds may be and reach beyond the ordinary. They achieve extraordinary success, and in doing so they transform countries."
                  </blockquote>
                </div>
                
                {/* Name */}
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
                    Dr. Babangida Ruma
                  </h1>
                </div>
                
                {/* Title */}
                <div>
                  <h2 className="text-xl sm:text-2xl text-gray-200 font-light tracking-wide">
                    Social Entrepreneur & Youth Advocate
                  </h2>
                </div>
              </div>
              
              {/* Right Side - Portrait */}
              <div className="relative lg:flex justify-center hidden">
                <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[36rem]">
                  <img 
                           src="/assets/hero.jpg"
                    alt="Dr. Babangida Ruma"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-responsive-lg font-light text-slate-900 mb-6">
                  A Legacy of Excellence
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  Dr. Babangida Ruma is a Nigerian social entrepreneur, visionary youth leader, and advocate for enterprise development, skills development, digital innovation, and sustainable growth.
                </p>
              </div>

              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  With more than two decades of transformative leadership, Dr. Ruma has dedicated his career to building platforms that empower young people, strengthen institutions, and create inclusive economic opportunities across Africa. He is the Founder & Executive Vice Chairman of Collective Development (CODE), a pioneering foundation advancing girl-child education, women's empowerment, skills acquisition, and community-driven entrepreneurship.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Dr. Ruma founded the Enterprise University of Nigeria, an institution committed to nurturing a new generation of entrepreneurs through practical education, research, and innovation. He also established the MSMEs Business Management Organization (BMO), providing business support services and capacity-building programs for micro, small, and medium-sized enterprises across Nigeria.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Globally recognized for his passion for digital innovation and technology, Dr. Ruma was named the Father of Technology and Innovation by the UNESCO Institute for Information Technologies in Education. He has worked with world leaders to empower young people, build human capability, rebrand nations, and promote peace and harmony.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Through The Ruma Foundation, Dr. Ruma continues to create opportunities for vulnerable groups by promoting access to quality education, women's and youth empowerment, skills development, and sustainable livelihoods. His impact has been celebrated with numerous international recognitions, making him one of Africa's most influential young leaders.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Journey Timeline</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Key milestones in advancing youth empowerment and social entrepreneurship.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-300 hidden lg:block" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="inline-block bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                    
                    <div className={`${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center">
                        <div className="text-slate-600 text-center">
                          <Calendar size={40} className="mx-auto mb-2 text-slate-400" />
                          <p className="text-sm">Milestone</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white hidden lg:block" 
                         style={{ top: `${index * 12 + 6}rem` }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-responsive-lg font-light text-slate-900 text-center mb-16">
                Impact & Achievements
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                      <div className="text-slate-600 group-hover:text-slate-900 transition-colors">
                        {achievement.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 mb-3">{achievement.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-responsive-lg font-light text-white mb-8">
                Learn More About Dr. Ruma's Impact
              </h2>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                Discover more about Dr. Babangida Ruma's business ventures, philanthropic efforts, and vision for Africa's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/business" 
                  className="px-8 py-4 bg-white text-slate-900 font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  View Business Portfolio
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-slate-900 transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Profile;
