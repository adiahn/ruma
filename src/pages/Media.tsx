import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Newspaper, Lightbulb, Clipboard, MapPin, Calendar, Clock } from 'lucide-react';

const Media = () => {
  const mediaItems = [
    {
      type: 'Interview',
      title: 'The Future of African Business',
      publication: 'Forbes Africa',
      date: 'March 2024',
      description: 'Exclusive interview discussing investment opportunities and economic growth strategies across African markets.',
      featured: true,
    },
    {
      type: 'Article',
      title: 'Building Sustainable Business Empires',
      publication: 'Harvard Business Review',
      date: 'February 2024',
      description: 'In-depth analysis of sustainable business practices and long-term value creation strategies.',
    },
    {
      type: 'Podcast',
      title: 'Leadership in the Digital Age',
      publication: 'Business Leaders Podcast',
      date: 'January 2024',
      description: 'Insights on digital transformation and leadership strategies for modern enterprises.',
    },
    {
      type: 'Interview',
      title: 'Technology and Innovation in Africa',
      publication: 'CNN Business',
      date: 'December 2023',
      description: 'Discussion on the role of technology in transforming African economies and business landscapes.',
    },
    {
      type: 'Article',
      title: 'The Next Generation of Entrepreneurs',
      publication: 'Financial Times',
      date: 'November 2023',
      description: 'Mentoring insights and advice for aspiring entrepreneurs building scalable businesses.',
    },
    {
      type: 'Speaking',
      title: 'World Economic Forum - Davos',
      publication: 'WEF Annual Meeting',
      date: 'January 2024',
      description: 'Keynote presentation on sustainable development and economic growth in emerging markets.',
    },
  ];

  const upcomingEvents = [
    {
      date: 'April 15, 2024',
      event: 'African Business Summit',
      location: 'Lagos, Nigeria',
      topic: 'Building Sustainable Business Ecosystems',
      type: 'Keynote Speaker',
    },
    {
      date: 'May 22, 2024',
      event: 'Global Innovation Conference',
      location: 'Dubai, UAE',
      topic: 'Technology & Digital Transformation',
      type: 'Panel Discussion',
    },
    {
      date: 'June 10, 2024',
      event: 'Harvard Business School Alumni',
      location: 'Boston, USA',
      topic: 'Leadership in the Modern Era',
      type: 'Guest Lecture',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Media & Speaking
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Sharing insights, thought leadership, and inspiring conversations 
              with global audiences across premier platforms and events.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Media */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Recent Features</h2>
          </div>
          
          {/* Featured Article */}
          {mediaItems.filter(item => item.featured).map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16 elegant-shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Featured {item.type}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-6 text-slate-600">
                    <span className="font-semibold">{item.publication}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <Button variant="outline">Read Full Article</Button>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl elegant-shadow flex items-center justify-center">
                  <div className="text-slate-600 text-center">
                    <Newspaper size={60} className="mx-auto mb-4 text-slate-400" />
                    <p className="text-lg font-medium">Media Feature</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Media Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.filter(item => !item.featured).map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300 hover:transform hover:scale-105 elegant-shadow hover:elegant-shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.type === 'Interview' ? 'bg-blue-100 text-blue-700' :
                    item.type === 'Article' ? 'bg-green-100 text-green-700' :
                    item.type === 'Podcast' ? 'bg-purple-100 text-purple-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {item.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
                  <span className="font-medium">{item.publication}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <button className="text-slate-900 hover:text-slate-700 text-sm font-medium transition-colors">
                  View →
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Speaking Events */}
      <section className="section-padding bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Upcoming Speaking Engagements</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join me at these upcoming events where I'll be sharing insights on 
              business leadership, innovation, and sustainable development.
            </p>
          </div>
          
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 elegant-shadow hover:elegant-shadow-lg transition-all duration-300"
              >
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {event.date.split(' ')[1]}
                    </div>
                    <div className="text-slate-600 font-medium">
                      {event.date.split(' ')[0]} {event.date.split(' ')[2]}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{event.event}</h3>
                    <p className="text-slate-600 mb-2">{event.topic}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                      <span>• {event.type}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Speaking Topics */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Speaking Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Topics I'm passionate about sharing with audiences worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Business Leadership',
              'Digital Transformation',
              'Sustainable Development',
              'African Markets',
              'Investment Strategies',
              'Entrepreneurship',
              'Innovation Management',
              'Economic Growth'
            ].map((topic, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb size={24} className="text-slate-600" />
                </div>
                <h3 className="font-semibold text-slate-900">{topic}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Press Kit */}
      <section className="section-padding bg-slate-900 text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Press & Media Inquiries</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                For interviews, speaking engagements, and media requests, our team 
                provides comprehensive support and materials for journalists and event organizers.
              </p>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full" />
                  <span>High-resolution photos and biography</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full" />
                  <span>Speaking topics and keynote materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full" />
                  <span>Interview talking points and background</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full" />
                  <span>Corporate information and achievements</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <Clipboard size={60} className="mx-auto mb-6 text-slate-300" />
                <h3 className="text-2xl font-bold mb-4">Media Kit</h3>
                <p className="text-slate-300 mb-6">
                  Download comprehensive media resources and information.
                </p>
                <div className="space-y-4">
                  <Button variant="secondary" className="w-full">
                    Download Press Kit
                  </Button>
                  <Button to="/contact" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-slate-900">
                    Media Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Media;
