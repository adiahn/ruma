import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Rocket, TrendingUp, Target, Heart, Sparkles, Globe, Building2, BookOpen, Briefcase, Award, Phone, Mail, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const LIFE = () => {
  const impactStats = [
    { number: '1,000+', label: 'Youths Trained on Premium Skills' },
    { number: '30,000+', label: 'Environmental Health Volunteers' },
    { number: '25', label: 'Vocation Trades Available' },
    { number: '100', label: 'Bed Licensed Hospital' }
  ];

  const corePrograms = [
    {
      name: 'MSMED',
      fullName: 'Micro, Small & Medium Enterprise Development',
      description: 'Attracting young school leavers and unemployed graduates into MSMEs, especially in the Agricultural Business value chain, through NBTE accredited programmes.',
      features: [
        'Start-up Plan for Unemployed Youth/Graduates',
        'Scale-up Plan for Small Business Owners',
        'Volunteer Plan for Key Enterprise Areas',
        'National Vocation Certificate (NVC)',
        'Access to BOI, CBN, World Bank Funding',
        'Training of Trainers (ToT) Program',
        'Intensive Bootcamp Training',
        'Face-to-face Skills Clinic Training'
      ],
      Icon: Building2
    },
    {
      name: 'SPACE',
      fullName: 'Support Program For Access to Continuing Education',
      description: 'Dual-Mode Learning approach providing flexible opportunities for unemployed graduates and youth to qualify as professionals in various fields.',
      features: [
        'Teaching, Accounting, Engineering Programs',
        'Public Relations, Management Training',
        'Procurement, Facility Management',
        'Security Guards, Customer Care',
        'ICT, Data Management Programs',
        'Capacity Development for Political Actors',
        'Civil Servants Professional Development',
        'Faith Based Organizations Support'
      ],
      Icon: GraduationCap
    },
    {
      name: 'UNIPREP',
      fullName: 'University/Tertiary Education Preparation Programme',
      description: 'Addressing students with NECO, WAEC and JAMB challenges through comprehensive preparation programs with multimedia support.',
      features: [
        'Question Papers for Past 35 Years',
        '17 Subjects Coverage',
        'Multimedia Support Platform',
        'Interactive CBT Challenge Solutions',
        'Dual-Mode Delivery Approach',
        'LIFE Tele-Education Center',
        'LIFE TOOL KIT Transmission',
        'IJMB Admissible at 200 Level'
      ],
      Icon: BookOpen
    },
    {
      name: 'Cross Cutting Programs',
      fullName: 'Comprehensive Support Services',
      description: 'Deepening financial inclusion and supporting corps of volunteers through integrated service delivery.',
      features: [
        'Deepening Financial Inclusion',
        'Supporting Corps of Volunteers',
        'Helpline Volunteers Program',
        'E-Business Development Support',
        'Digital Literacy Programs',
        'Competitive Certifications',
        '24/7 Data Call Contact Services',
        'CUG (Closed User Group) Platform'
      ],
      Icon: Target
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and creative solutions to drive entrepreneurship development.',
      Icon: Sparkles
    },
    {
      title: 'Accessibility',
      description: 'We ensure that underserved and unserved communities have equal access to opportunities.',
      Icon: Globe
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in training, certification, and service delivery.',
      Icon: Award
    },
    {
      title: 'Partnership',
      description: 'We collaborate with public and private sectors to create sustainable impact.',
      Icon: Users
    }
  ];

  const achievements = [
    {
      title: 'CAC Registration',
      content: 'Registered as Learning Initiative For Entrepreneurship (LIFE) LTD/GTE RC:1320802'
    },
    {
      title: 'NBTE Accreditation',
      content: 'Accredited by National Board for Technical Education as Innovative Enterprise Institute (IEI)'
    },
    {
      title: 'International Partnerships',
      content: 'Supported by HP, UNIDO, SDSN (UN-NGO), Chams Mobile, NBTE, and MSME BMOs'
    },
    {
      title: 'Infrastructure',
      content: '50 hectares fully developed, NBTE accredited Model MSME Clinic (Business Incubation Centre)'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <span className="text-white font-semibold text-sm">Young Entrepreneurs Program</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
                  Learning Initiative For
                  <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                    Entrepreneurship
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-orange-100 mb-6 font-semibold">
                  (LIFE) LTD/GTE RC:1320802
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-orange-200 mb-8 font-medium">
                  Dual Mode Learning for Entrepreneurship & Job Creation
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-orange-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                  Premier Business Incubation for the Unserved and Underserved
                </p>
              </motion.div>

              {/* Stats Banner */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black text-white">1,000+</div>
                    <div className="text-xs sm:text-sm text-orange-100">Youths Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black text-white">30,000+</div>
                    <div className="text-xs sm:text-sm text-orange-100">Volunteers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black text-white">25</div>
                    <div className="text-xs sm:text-sm text-orange-100">Vocation Trades</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black text-white">100</div>
                    <div className="text-xs sm:text-sm text-orange-100">Bed Hospital</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button to="/contact" variant="secondary" size="lg" className="px-8 bg-white text-orange-600 hover:bg-orange-50">
                  Apply Now
                </Button>
                <Button to="/profile" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
                  View Program Details
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white py-24">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-light text-black mb-6 tracking-tight">
                About Us
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="slideUp">
              <div className="prose prose-lg mx-auto text-gray-700 font-light leading-relaxed">
                <p className="text-lg mb-8">
                  A knowledge economy Industrial Complex with incorporation brand and objective of facilitating the application of Information Communications Technology (ICT) for continuing education and entrepreneurship development to Student, Unemployed Youth political actors as well as Women and Girl Child.
                </p>
                
                <p className="text-lg mb-8">
                  LIFE is registered as a limited by Guarantee Company with Corporate Affairs Commission and with Cherish Enterprise Institute limited as the lead promoter of the program along with other stakeholders. The LIFE Program leverages on public private partnership to drive Dual-mode entrepreneurship education access to eligible applicants, with concerted leverage on low hanging fruit funding windows from Corporate Nigeria, Development partners, International Donor Agencies, and Non-Governmental Organizations.
                </p>
                
                <p className="text-lg mb-8">
                  LIFE programme delivery approach is Dual mode: combining virtual learning support and face to face practical, mentorship, internship with competitive certifications. Life project is supported by HP, UNIDO, SDSN (UN - NGO), Chams mobile, NBTE, MSME Business Management Organisations (MSME BMOs, The Coalition of Entrepreneurs Association and Small Business owners.) as well as Association of Non-Bank Micro-Finance Institutions (ANMFIN), National Association of Small Scale Industrialists (NASSI).
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision Section */}
      <section className="section-padding bg-gradient-to-b from-white to-orange-50/30 py-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <AnimatedSection animation="slideUp">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-light text-black mb-6 tracking-tight text-center">Mission</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Enhancing the competitiveness of Youth, Women and Girl-Child to opportunities of empowerment through entrepreneurship capacity development; thereby creating wealth, jobs opportunities and sustainable MSME's Eco-System Complex for underserved and unserved communities in Nigeria. We Leverage on a concerted alliance network for a Dual-Mode demand driven entrepreneurship development poised to mainstreaming subscribers in to the National Skills Qualification Framework (NSQF).
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-light text-black mb-6 tracking-tight text-center">Vision</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Catalyst for deepening "financial inclusion" and promoting" inclusive entrepreneurship education through extensive collaboration and partnership with the public & private sector, using cost effective and demand driven approach thereby creating an enabling environment for a robust, sustainable MSMEs eco-system complex that will grow the economy and catalyse Nigeria's tax to GDP Destination.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-white py-24">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-light text-black mb-6 tracking-tight">
                Our Impact
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-gray-50 p-6 sm:p-8 border border-gray-200 hover:border-orange-300 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl sm:text-5xl font-light text-black mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Programs */}
      <section id="programs" className="section-padding bg-white py-24">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-5xl sm:text-6xl font-light text-black mb-6 tracking-tight">
                Our Programs
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Comprehensive entrepreneurship training and support for aspiring young entrepreneurs
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-24 max-w-4xl mx-auto">
            {corePrograms.map((program, index) => {
              const IconComponent = program.Icon;
              return (
                <AnimatedSection key={index} animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}>
                  <motion.div
                    className="border-b border-gray-200 pb-20 last:border-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-8 mb-8">
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-gray-300 rounded-full bg-white">
                        <IconComponent size={24} className="text-gray-700" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-light text-black mb-2 tracking-tight">{program.name}</h3>
                        <p className="text-sm text-gray-500 mb-4 font-light">{program.fullName}</p>
                        <p className="text-base text-gray-600 leading-relaxed font-light max-w-2xl">
                          {program.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="ml-22 grid sm:grid-cols-2 gap-4">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-gray-400 mr-3 mt-1">—</span>
                          <span className="text-sm text-gray-700 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50 py-24">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-5xl sm:text-6xl font-light text-black mb-6 tracking-tight">
                Our Values
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.Icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-gray-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-light text-black mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="impact" className="section-padding bg-white py-24">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-5xl sm:text-6xl font-light text-black mb-6 tracking-tight">
                Key Achievements
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Milestones in our journey of transformation
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-orange-500 pl-8 py-6 bg-gray-50"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-light text-black mb-3 tracking-tight">{achievement.title}</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">{achievement.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50 py-24">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-light text-black mb-6 tracking-tight">
                Contact Information
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-orange-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-light text-black mb-3 tracking-tight">Liaison Office</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  No. 6 Nun Street Off Danube Street<br />
                  Maitama, Abuja. FCT.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Building2 size={24} className="text-orange-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-light text-black mb-3 tracking-tight">Data Management Centre</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  No. 9A Ishaku Road, Malali<br />
                  GRA, Kaduna. Kaduna State.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Building2 size={24} className="text-orange-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-light text-black mb-3 tracking-tight">Model MSME Clinic</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  50 hectares fully Developed, NBTE Accredited<br />
                  Km. 40 (20 minutes drive from Katsina Int'l Airport)<br />
                  Behind Divisional Police Station, Batsari, Katsina State
                </p>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe size={24} className="text-orange-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-light text-black mb-3 tracking-tight">Website</h3>
                  <p className="text-sm text-gray-600 font-light">www.liifeonline.org</p>
                  <p className="text-sm text-gray-600 font-light">www.liifeonline.org.ng</p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={24} className="text-orange-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-light text-black mb-3 tracking-tight">Email</h3>
                  <p className="text-sm text-gray-600 font-light">afrideco2015@gmail.com</p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone size={24} className="text-orange-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-light text-black mb-3 tracking-tight">Phone Numbers</h3>
                  <p className="text-sm text-gray-600 font-light">+2348036304646</p>
                  <p className="text-sm text-gray-600 font-light">+2347033004734</p>
                  <p className="text-sm text-gray-600 font-light">+2348068433067</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedSection animation="fadeIn">
        <section className="section-padding bg-black text-white py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Join Us in Creating Lasting Change
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Whether you're looking to partner, volunteer, or support our initiatives, there are many ways to get involved in our mission.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button to="/contact" variant="secondary" size="lg">
                  Partner With Us
                </Button>
                <Button to="/profile" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More About Our Work
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Custom LIFE Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container-custom py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-light text-black tracking-tight">Learning Initiative For Entrepreneurship</h3>
                <p className="text-lg sm:text-xl text-gray-600 mt-2 font-light">(LIFE) LTD/GTE</p>
                <p className="text-sm text-gray-500 mt-2">RC:1320802</p>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md font-light">
                Premier Business Incubation for the Unserved and Underserved communities across Nigeria.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 hover:text-black transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-sm font-light text-black uppercase tracking-wider mb-4">
                Our Programs
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#programs" className="text-sm text-gray-600 hover:text-black transition-colors block py-1 font-light">
                    MSMED
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-sm text-gray-600 hover:text-black transition-colors block py-1 font-light">
                    SPACE
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-sm text-gray-600 hover:text-black transition-colors block py-1 font-light">
                    UNIPREP
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-sm text-gray-600 hover:text-black transition-colors block py-1 font-light">
                    Cross Cutting Programs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-light text-black uppercase tracking-wider mb-4">
                Contact
              </h4>
              <div className="space-y-2 sm:space-y-3 text-sm text-gray-600 font-light">
                <p>Northern Nigeria</p>
                <p className="break-all">afrideco2015@gmail.com</p>
                <p>+234 (0) 8036304646</p>
                <p>+234 (0) 7033004734</p>
                <p>+234 (0) 8068433067</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left font-light">
                © {currentYear} Learning Initiative For Entrepreneurship (LIFE) LTD/GTE. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors py-1 font-light">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors py-1 font-light">
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p className="text-xs text-gray-500 text-center font-light">
                Founded by Dr. Babangida Ruma | A registered non-profit organization
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LIFE;