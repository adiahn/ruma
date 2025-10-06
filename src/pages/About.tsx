import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { User, Trophy } from 'lucide-react';

const About = () => {

  const achievements = [
    'Father of Technology and Innovation (UNESCO)',
    'U.S. Department of State Alumni Member of the Month (2014)',
    'Commonwealth Young Achievers Award',
    'Global Achievers Award (First African in History)',
    '100 Most Influential Young Africans (2016 & 2020)',
    'Top 20 Most Influential Young Leaders in the World (2016)',
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
              A journey of social entrepreneurship, youth empowerment, and transformative leadership across Africa and beyond.
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
                  Dr. Babangida Ruma is a Nigerian social entrepreneur, visionary youth leader, 
                  and advocate for enterprise development, skills development, digital innovation, 
                  and sustainable growth. With more than two decades of transformative leadership, 
                  he has dedicated his career to building platforms that empower young people, 
                  strengthen institutions, and create inclusive economic opportunities across Africa.
                </p>
                <p>
                  He is the Founder & Executive Vice Chairman of Collective Development (CODE), 
                  a pioneering foundation advancing girl-child education, women's empowerment, 
                  skills acquisition, and community-driven entrepreneurship. Under his leadership, 
                  CODE has launched several groundbreaking initiatives including the Women & Girls 
                  Entrepreneurship Support Program (WAGES) and the Learning Initiative for 
                  Entrepreneurship (LIFE).
                </p>
                <p>
                  Globally recognized for his passion for digital innovation and technology, 
                  Dr. Ruma was named the Father of Technology and Innovation by the UNESCO 
                  Institute for Information Technologies in Education for his groundbreaking 
                  work in using technology to impact communities with sustainable digital solutions.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl elegant-shadow-lg flex items-center justify-center">
                <div className="text-center text-slate-600">
                  <User size={80} className="mx-auto mb-6 text-slate-400" />
                  <p className="text-xl font-medium">Professional Portrait</p>
                </div>
              </div>
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
              Honored by leading institutions for excellence in youth development and social entrepreneurship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-colors duration-200 text-center"
              >
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy size={24} className="text-slate-600" />
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
