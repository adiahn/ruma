import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users, Globe, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Profile = () => {
  const timeline = [
    {
      year: "Early Years",
      title: "The Foundation",
      description: "Dr. Babangida Ruma's journey began with a vision to transform African business landscapes through innovation and sustainable development.",
      details: "From his early years, Dr. Ruma demonstrated exceptional leadership qualities and a deep commitment to creating lasting value across communities. His foundational experiences shaped his understanding of the unique challenges and opportunities within African markets."
    },
    {
      year: "1990s",
      title: "Building an Empire",
      description: "Established his first major business ventures, focusing on sustainable development and innovative solutions for African markets.",
      details: "During this transformative period, Dr. Ruma founded multiple companies that would become cornerstones of his business empire. His approach emphasized local talent development, community engagement, and sustainable business practices that would benefit entire regions."
    },
    {
      year: "2000s",
      title: "Expanding Horizons",
      description: "Expanded operations across multiple African countries, establishing partnerships and creating thousands of employment opportunities.",
      details: "The new millennium marked a period of significant expansion for Dr. Ruma's business empire. His ventures created over 10,000 direct and indirect employment opportunities across three countries, while maintaining a focus on sustainable development and community empowerment."
    },
    {
      year: "2010s",
      title: "Becoming a Legend",
      description: "Recognized as a leading voice in African entrepreneurship and sustainable development, with numerous awards and international recognition.",
      details: "This decade saw Dr. Ruma's recognition as one of Africa's most influential business leaders. His innovative approaches to sustainable development and his commitment to empowering local communities earned him international acclaim and numerous prestigious awards."
    },
    {
      year: "2020s",
      title: "Creating a Legacy",
      description: "Continuing to drive transformation across Africa while mentoring the next generation of African entrepreneurs and business leaders.",
      details: "Today, Dr. Ruma continues to shape the future of African business through his ongoing ventures, philanthropic efforts, and mentorship programs. His legacy extends beyond business success to include significant contributions to education, community development, and sustainable economic growth across the continent."
    }
  ];

  const achievements = [
    {
      icon: <Users size={24} />,
      title: "10,000+ Lives Impacted",
      description: "Direct and indirect employment opportunities created across Africa"
    },
    {
      icon: <Globe size={24} />,
      title: "3 Countries",
      description: "Operations spanning multiple African nations"
    },
    {
      icon: <Award size={24} />,
      title: "25+ Awards",
      description: "Recognition for excellence in business and philanthropy"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "5+ Companies",
      description: "Successful ventures across diverse industries"
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
            backgroundImage: 'url(/src/assets/hero.jpg)',
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
                    Visionary Entrepreneur & Philanthropist
                  </h2>
                </div>
              </div>
              
              {/* Right Side - Portrait */}
              <div className="relative lg:flex justify-center hidden">
                <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[36rem]">
                  <img 
                    src="/src/assets/hero.jpg"
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
                  Dr. Babangida Ruma is a visionary entrepreneur, philanthropist, and business leader who has dedicated his life to transforming African economies through sustainable business practices and innovative solutions.
                </p>
              </div>

              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Dr. Babangida Ruma is a visionary entrepreneur, philanthropist, and business leader who has dedicated his life to transforming African economies through sustainable business practices and innovative solutions. With over two decades of transformative leadership, he has built a portfolio of successful companies that create lasting value across Africa and beyond.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  As the Founder and President of multiple successful ventures, Dr. Ruma has been instrumental in revolutionizing business practices across the continent. His approach emphasizes local talent development, community engagement, and sustainable business models that benefit entire regions.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Through his various business ventures and philanthropic efforts, Dr. Ruma has created thousands of employment opportunities across multiple African countries. His commitment to empowering local communities and fostering economic growth has earned him recognition as one of Africa's most influential business leaders.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Today, Dr. Ruma continues to drive transformation across Africa while mentoring the next generation of African entrepreneurs and business leaders. His legacy extends beyond business success to include significant contributions to education, community development, and sustainable economic growth across the continent.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-responsive-lg font-light text-slate-900 text-center mb-16">
                Journey Through Excellence
              </h2>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className="text-2xl font-light text-slate-900 mb-2">{item.year}</div>
                        <h3 className="text-xl font-medium text-slate-900 mb-4">{item.title}</h3>
                      </div>
                      <div className="lg:w-2/3">
                        <p className="text-lg text-slate-700 leading-relaxed mb-4">{item.description}</p>
                        <p className="text-slate-600 leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="hidden lg:block absolute left-1/3 top-16 w-px h-16 bg-slate-300" />
                    )}
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
