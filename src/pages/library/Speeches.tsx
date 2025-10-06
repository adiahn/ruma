import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';
import { Mic, MapPin, Calendar, Play } from 'lucide-react';

const Speeches = () => {
  const speeches = [
    {
      title: "The Future of African Youth Entrepreneurship",
      event: "African Union Summit",
      location: "Addis Ababa, Ethiopia",
      date: "2023",
      description: "Keynote address on leveraging technology and innovation to create sustainable economic opportunities for African youth.",
      video: true
    },
    {
      title: "Technology as a Tool for Social Change",
      event: "UNESCO Global Forum",
      location: "Paris, France",
      date: "2022",
      description: "Discussion on using digital innovation to address poverty, unemployment, and inequality across communities.",
      video: false
    },
    {
      title: "Building Inclusive Economic Opportunities",
      event: "Commonwealth Youth Summit",
      location: "London, United Kingdom",
      date: "2021",
      description: "Presentation on creating platforms that empower young people and strengthen institutions across Africa.",
      video: true
    },
    {
      title: "Women Empowerment Through Enterprise",
      event: "Global Women's Conference",
      location: "New York, USA",
      date: "2020",
      description: "Sharing insights on the WAGES program and empowering women with entrepreneurial skills and knowledge.",
      video: false
    },
    {
      title: "Digital Innovation for Community Development",
      event: "Tech for Good Summit",
      location: "Dubai, UAE",
      date: "2019",
      description: "Exploring how technology can be leveraged to create sustainable solutions for community transformation.",
      video: true
    }
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic size={40} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Speeches & Talks
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Inspiring audiences worldwide on entrepreneurship, innovation, and social impact
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Speeches List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-8">
            {speeches.map((speech, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                <motion.div
                  className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{speech.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-slate-600">
                          <Mic size={16} className="mr-2" />
                          <span className="font-medium">{speech.event}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <MapPin size={16} className="mr-2" />
                          <span>{speech.location}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Calendar size={16} className="mr-2" />
                          <span>{speech.date}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{speech.description}</p>
                    </div>
                    
                    {speech.video && (
                      <div className="md:ml-6">
                        <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                          <Play size={20} />
                          Watch Video
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Book Dr. Ruma for Your Event
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Invite Dr. Babangida Ruma to speak at your next conference, summit, or event
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-slate-900 font-medium hover:bg-gray-100 transition-colors duration-200 rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speeches;

