import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';

const About = () => {
  const timeline = [
    {
      year: '2000',
      title: 'The Beginning',
      description: 'Started first venture with a vision to create sustainable businesses in Nigeria.',
    },
    {
      year: '2005',
      title: 'Expansion Phase',
      description: 'Expanded operations across West Africa, establishing key partnerships and foundations.',
    },
    {
      year: '2012',
      title: 'International Growth',
      description: 'Launched international operations, reaching markets across 12 countries.',
    },
    {
      year: '2018',
      title: 'Philanthropic Focus',
      description: 'Established major philanthropic initiatives, investing over $50M in community development.',
    },
    {
      year: '2024',
      title: 'Continued Innovation',
      description: 'Leading digital transformation initiatives and sustainable development projects.',
    },
  ];

  const achievements = [
    'African Business Leader of the Year 2024',
    'Forbes Africa Person of the Year 2023',
    'Harvard Business School Distinguished Alumni',
    'UN Global Compact Advocate',
    'Technology Innovation Leader Award',
    'Outstanding Philanthropy Recognition',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              About Dr. Ruma
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A journey of innovation, leadership, and sustainable impact across Africa and beyond.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">The Journey</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Dr. Babangida Ruma stands as one of Africa's most influential business leaders, 
                  with a career spanning over two decades of transformative entrepreneurship. 
                  His journey began with a vision to create businesses that not only generate 
                  wealth but also contribute meaningfully to societal development.
                </p>
                <p>
                  From humble beginnings to building a multi-billion dollar business empire, 
                  Dr. Ruma has demonstrated exceptional leadership across diverse industries 
                  including real estate, technology, manufacturing, and financial services. 
                  His strategic approach to business development has created thousands of jobs 
                  and fostered economic growth across multiple regions.
                </p>
                <p>
                  As a thought leader and mentor, Dr. Ruma continues to inspire the next 
                  generation of entrepreneurs while maintaining his commitment to ethical 
                  business practices and sustainable development. His philanthropic initiatives 
                  have impacted millions of lives, establishing him as a true champion of 
                  social responsibility.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl elegant-shadow-lg flex items-center justify-center">
                <div className="text-center text-slate-600">
                  <div className="text-8xl mb-6">👤</div>
                  <p className="text-xl font-medium">Professional Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Journey Timeline</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key milestones in building a sustainable business empire.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-300 hidden lg:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:flex-row-reverse'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="inline-block bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className={`${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl elegant-shadow flex items-center justify-center">
                      <div className="text-slate-600 text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <p className="text-sm">Milestone Image</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white hidden lg:block" 
                       style={{ top: `${index * 12 + 6}rem` }} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Recognition & Awards</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Honored by leading institutions for excellence in business and social impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-colors duration-200 text-center"
              >
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-slate-600 text-xl">🏆</div>
                </div>
                <h3 className="font-semibold text-slate-900">{achievement}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Remarkable Together
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Interested in partnerships, investments, or learning more about my journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary">
              Get in Touch
            </Button>
            <Button to="/business" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              View My Portfolio
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
