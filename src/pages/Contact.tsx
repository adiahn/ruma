import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

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
    'General Inquiry'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-responsive-lg font-bold text-black mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to explore youth empowerment initiatives, social entrepreneurship partnerships, 
              or collaborate on community development projects? Let's start a conversation.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <AnimatedSection animation="slideInLeft">
              <div>
                <h2 className="text-responsive-md font-bold text-black mb-8">Let's Connect</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Email</h3>
                    <p className="text-black font-medium">Info@ruma.ng</p>
                    <p className="text-gray-600 text-sm">General inquiries and information</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Media & Speaking</h3>
                    <p className="text-black font-medium">media@ruma.ng</p>
                    <p className="text-gray-600 text-sm">Speaking engagements and media requests</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Office</h3>
                    <p className="text-black font-medium">Office@ruma.ng</p>
                    <p className="text-gray-600 text-sm">Office and administrative inquiries</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Location</h3>
                    <p className="text-black font-medium">Abuja, Nigeria</p>
                    <p className="text-gray-600 text-sm">Contact location</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slideInRight">
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-responsive-md font-bold text-black mb-6">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <h4 className="text-xl font-bold text-black mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
                      >
                        <option value="">Select inquiry type...</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200 resize-none"
                        placeholder="Please provide details about your youth empowerment initiative, social entrepreneurship collaboration, or community development project..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-black text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <AnimatedSection animation="fadeIn">
        <section className="section-padding bg-black text-white">
          <Container className="text-center">
            <h2 className="text-responsive-lg font-bold mb-6">
              Let's Empower Communities Together
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Every great collaboration begins with a conversation. Reach out today and 
              let's explore how we can create lasting impact in youth empowerment and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
                Schedule a Meeting
              </Button>
              <Button to="/profile" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Learn More About Me
              </Button>
            </div>
          </Container>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Contact;