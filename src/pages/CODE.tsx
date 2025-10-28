import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Rocket, TrendingUp, Target, Heart, Sparkles, Globe, Building2, BookOpen, Briefcase, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import codeLogo from '../assets/code.jpg';

const CODE = () => {
  const impactStats = [
    { number: '2,000,000', label: 'Target Beneficiaries by 2030' },
    { number: '5,000,000+', label: 'OHUB Subscribers Worldwide' },
    { number: '10,000', label: 'Youth Trained Annually' },
    { number: '300+', label: 'Marginalized Communities' }
  ];

  const corePrograms = [
    {
      name: 'Opportunities Hub (OHUB)',
      description: 'Digital Business Incubation Training and Capacity Development hub with over 5 million subscribers worldwide. A platform profiling opportunities for young people across Africa.',
      features: [
        'Access to IT Facilities and Job Search',
        'Access to Loan and Scholarship Programs',
        'CV, Job Application and Interview Help',
        'Links to Volunteering and Work Placements',
        'Online Training and Certification',
        'Free Vocational and Soft Skills Training',
        'Access to Start-up Grants',
        'Personalized Employment Support'
      ],
      Icon: Globe
    },
    {
      name: 'Digital Skills Clinic',
      description: 'Dual-mode enterprise education initiative leveraging public-private partnerships to drive entrepreneurship and job creation for underserved communities.',
      features: [
        'MSMED for Small Business Owners',
        'Startup Programs for Unemployed Youth',
        'SPACE - Support Program for Continuing Education',
        'UNIPREP - University Preparation Program',
        'Deepening Financial Inclusion',
        'Supporting Corps of Volunteers',
        'E-Business Development Support'
      ],
      Icon: Building2
    },
    {
      name: 'Digital Skills Bank',
      description: 'Program designed to boost livelihood and employability outcomes for 10,000 uneducated rural youth annually through informal training and development.',
      features: [
        'One-Stop Digital Skills Market Eco-System',
        'Online Human Resource Platform (www.skillsbank.ng)',
        'Specialized Vocation Showcase',
        'Flexible Service Connection',
        'Earn-as-you-go Opportunities',
        'Bridging Economic Gaps',
        'Sustainable Rural Development'
      ],
      Icon: Briefcase
    },
    {
      name: 'WAGES',
      description: 'Women And Girl-Child Entrepreneurship Support initiative with extensive training on ICT, Vocation Skills, and Business Management.',
      features: [
        'ICT and Vocation Skills Training',
        'Business Management Development',
        'Sustainable Income Generation',
        'Dual-Mode Learning System',
        'Micro-credit Access Linkage',
        'Business Incubation Centers',
        'Competitive Certifications'
      ],
      Icon: Users
    },
    {
      name: '#GoBackToSchool',
      description: 'Broad-based coalition dedicated to ensuring quality education for all, focusing on women and girl-child education.',
      features: [
        'Returning Children to School',
        'Raising Awareness Campaigns',
        'Financial Assistance and Scholarships',
        'Advocacy Visits to Community Leaders',
        'Quality Education Campaigns',
        'Intra and Inter-school Quiz Competitions',
        'Vocational Training Programs'
      ],
      Icon: BookOpen
    }
  ];

  const values = [
    {
      title: 'Empowerment',
      description: 'We believe in unlocking the potential of every individual to create positive change in their communities.',
      Icon: TrendingUp
    },
    {
      title: 'Innovation',
      description: 'We leverage creative solutions and technology to address social challenges and drive sustainable development.',
      Icon: Sparkles
    },
    {
      title: 'Inclusion',
      description: 'We ensure that underserved communities have equal access to opportunities and resources.',
      Icon: Globe
    },
    {
      title: 'Sustainability',
      description: 'We build programs that create long-lasting impact and empower communities to thrive independently.',
      Icon: Target
    }
  ];

  const achievements = [
    {
      title: 'CAC Registration',
      content: 'Registered with Corporate Affairs Commission (CAC) in Nigeria 2023 as Ruma Initiative for Collective Development (CODE)'
    },
    {
      title: 'Global Recognition',
      content: 'OHUB recognized in 190 countries worldwide with over 100 million website hits annually'
    },
    {
      title: 'Partnership Network',
      content: 'Supported by UNIDO, Google, NBTE, and MSME Business Management Organization'
    },
    {
      title: 'Training Impact',
      content: 'Training of persons with disabilities, artisans, unserved youth, and women on ICT and entrepreneurship'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        
        {/* Content */}
        <div className="relative z-10 w-full pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4 sm:px-0">
                  Collective Development
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 font-light">
                  (CODE)
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 font-medium px-4 sm:px-0">
                  Time to Bridge the Digital Wealth and Knowledge Divide
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                  "All of the services we provide in our different programs are 100% free and priority is given to the most vulnerable members of the Community"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button to="/contact" variant="secondary" size="lg" className="px-8">
                  Get Involved
                </Button>
                <Button to="/profile" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More
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
                  Founded in 2013, Ruma Initiative as Cooperative Society and later registered with Corporate Affairs Commission (CAC) in Nigeria 2023 as Ruma Initiative for Collective Development which is fondly called Collective Development [CODE] as non governmental and nonprofit grassroots foundation that works in unserved, underserved, underprivileged and marginalized communities, leveraging technology, Innovation and creativity to close learning gaps, tackle digital inequity, unemployment, access to opportunities and ensure skills development for poor and vulnerable children and youth from low-income families.
                </p>
                
                <p className="text-lg mb-8">
                  We provide innovative, life-saving support to those in need and strive to create more enabling and progressive environments through our work. Our philosophy on aid and development is centered on locally driven solutions from a committed and professional collective of compassionate people.
                </p>
                
                <p className="text-lg mb-8">
                  We are changing lives by developing skills to an individual, enterprise and community level throughout Nigeria. Our technical and vocational skills training programs focus on addressing the scarce and critical skills shortage throughout the country.
                </p>
                
                <p className="text-lg mb-8">
                  We foster job creation by means of facilitating apprenticeships, co-operative learning opportunities, skills advancement, work placements to our Digital Innovation Centre (DIC). Our model is centered on Training And Placing (TAP) our graduates; through partnerships we facilitate for them with private sector co-operations as well as the Federal Government public private companies.
                </p>
                
                <p className="text-lg">
                  Our graduates receive a trade specific toolkit on successful completion of the course and each year we increase the number of Business/cooperative/enterprise start up grants we award graduates who demonstrate sound business plans.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goal Section */}
      <section className="section-padding bg-gray-50 py-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <AnimatedSection animation="slideUp">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Mission</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    To organize, mobilize and channel human, material, physical and financial resources towards creating multiple, alternative and informal learning and skills opportunities for marginalized populations in order to attain self-reliance and self-development.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Vision</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Improve the access and quality of education, skills development available to poor and vulnerable children in rural communities across Nigeria.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={0.4}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-black mb-4 tracking-tight">Our Goal</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Our 10-year Goal is to educate, empower and skill Up 2,000,000 children, youth and women by 2030. Educate-Empower-Skill Up 2million Children, youth and women 2030
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
                  className="text-center bg-gray-50 p-6 sm:p-8 border border-gray-200 hover:border-black transition-colors duration-300"
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
      <section id="programs" className="section-padding bg-gray-50 py-24">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-5xl sm:text-6xl font-light text-black mb-6 tracking-tight">
                Our Initiatives
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Comprehensive programs designed to bridge the digital wealth and knowledge divide
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
                        <h3 className="text-3xl font-light text-black mb-4 tracking-tight">{program.name}</h3>
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
      <section className="section-padding bg-white py-24">
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
      <section id="impact" className="section-padding bg-gray-50 py-24">
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
                  className="border-l-4 border-black pl-8 py-6 bg-white"
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

      {/* Custom CODE Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container-custom py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="mb-6">
                <img 
                  src={codeLogo} 
                  alt="CODE Logo" 
                  className="h-16 w-auto mb-4"
                />
                <h3 className="text-2xl sm:text-3xl font-light text-black tracking-tight">Collective Development</h3>
                <p className="text-lg sm:text-xl text-gray-600 mt-2 font-light">(CODE)</p>
                <p className="text-sm text-gray-500 mt-2">CAC/IT:7420182</p>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md font-light">
                Pioneering foundation advancing girl-child education and women's empowerment across Northern Nigeria.
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
                    OHUB
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-sm text-gray-600 hover:text-black transition-colors block py-1 font-light">
                    Digital Skills Clinic
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-sm text-gray-600 hover:text-black transition-colors block py-1 font-light">
                    Digital Skills Bank
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-sm text-gray-600 hover:text-black transition-colors block py-1 font-light">
                    WAGES
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-sm text-gray-600 hover:text-black transition-colors block py-1 font-light">
                    #GoBackToSchool
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
                <p className="break-all">info@collectivedevelopment.ng</p>
                <p>+234 (0) 8100061111</p>
                <p>+234 (0) 8100000739</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left font-light">
                © {currentYear} Collective Development (CODE). All rights reserved.
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

export default CODE;