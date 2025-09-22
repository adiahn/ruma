import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Mail, Phone, MapPin, CheckCircle, Handshake, DollarSign, Mic } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const inquiryTypes = [
    'Business Partnership',
    'Investment Opportunity',
    'Speaking Engagement',
    'Media Inquiry',
    'Philanthropic Collaboration',
    'General Inquiry'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@babangidaruma.com',
      subtitle: 'Response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+234 (0) 800 RUMA',
      subtitle: 'Business hours: 9 AM - 5 PM WAT'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Lagos, Nigeria',
      subtitle: 'By appointment only'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to explore partnership opportunities, discuss investments, or collaborate 
              on meaningful projects? Let's start a conversation.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Let's Connect</h2>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                      <info.icon size={24} className="text-slate-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{info.title}</h3>
                      <p className="text-slate-900 font-medium">{info.details}</p>
                      <p className="text-slate-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Connect */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Why Connect With Dr. Ruma?</h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">15+</div>
                    <div className="text-slate-600 text-sm">Successful Companies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">$2.1B+</div>
                    <div className="text-slate-600 text-sm">Portfolio Value</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">25+</div>
                    <div className="text-slate-600 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">12</div>
                    <div className="text-slate-600 text-sm">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={60} className="mx-auto mb-4 text-green-600" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-slate-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:ring-opacity-20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:ring-opacity-20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:ring-opacity-20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:ring-opacity-20 transition-all duration-200"
                    >
                      <option value="">Select inquiry type...</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:ring-opacity-20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:ring-opacity-20 transition-all duration-200 resize-none"
                      placeholder="Please provide details about your inquiry, partnership opportunity, or speaking engagement request..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Opportunities */}
      <section className="section-padding bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore various ways we can collaborate to create mutual value and positive impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Partnerships',
                description: 'Joint ventures and strategic alliances that leverage complementary strengths and capabilities.',
                icon: Handshake
              },
              {
                title: 'Investment Opportunities',
                description: 'Capital investment and growth partnerships for high-potential ventures and established businesses.',
                icon: DollarSign
              },
              {
                title: 'Speaking & Advisory',
                description: 'Keynote speaking, board advisory positions, and strategic consulting engagements.',
                icon: Mic
              }
            ].map((opportunity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center elegant-shadow hover:elegant-shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <opportunity.icon size={48} className="mx-auto text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{opportunity.title}</h3>
                <p className="text-slate-600 leading-relaxed">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Every great partnership begins with a conversation. Reach out today and 
            let's explore how we can create lasting value together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary">
              Schedule a Meeting
            </Button>
            <Button to="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Learn More About Me
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
