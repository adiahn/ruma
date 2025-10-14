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
    'Youth Empowerment Partnership',
    'Social Entrepreneurship Collaboration',
    'Speaking Engagement',
    'Media Inquiry',
    'CODE Program Inquiry',
    'Skills Development Initiative',
    'General Inquiry'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@collectivedevelopment.org',
      subtitle: 'For CODE and general inquiries'
    },
    {
      icon: Mail,
      title: 'Media & Speaking',
      details: 'media@babangidaruma.com',
      subtitle: 'Speaking engagements and media requests'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Katsina State, Nigeria',
      subtitle: 'Technical Assistant on Enterprise Development'
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
              Ready to explore youth empowerment initiatives, social entrepreneurship partnerships, 
              or collaborate on community development projects? Let's start a conversation.
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
                    <div className="text-2xl font-bold text-slate-900 mb-1">4+</div>
                    <div className="text-slate-600 text-sm">Organizations Founded</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">20+</div>
                    <div className="text-slate-600 text-sm">Years of Impact</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">25+</div>
                    <div className="text-slate-600 text-sm">Awards & Recognition</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">3</div>
                    <div className="text-slate-600 text-sm">Books Published</div>
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
                      placeholder="Please provide details about your youth empowerment initiative, social entrepreneurship collaboration, or community development project..."
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Collaboration Opportunities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore various ways we can collaborate to advance youth empowerment and community development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Youth Empowerment Programs',
                description: 'Collaborate on skills development, entrepreneurship training, and digital innovation initiatives for young people.',
                icon: Handshake
              },
              {
                title: 'Social Entrepreneurship',
                description: 'Partner on community development projects and sustainable solutions that address poverty and inequality.',
                icon: DollarSign
              },
              {
                title: 'Speaking & Advisory',
                description: 'Keynote speaking on youth development, technology innovation, and social entrepreneurship topics.',
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
            Let's Empower Communities Together
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Every great collaboration begins with a conversation. Reach out today and 
            let's explore how we can create lasting impact in youth empowerment and community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary">
              Schedule a Meeting
            </Button>
            <Button to="/profile" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Learn More About Me
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
