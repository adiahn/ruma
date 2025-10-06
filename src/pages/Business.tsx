import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';

const Business = () => {
  const portfolio = [
    {
      name: 'Collective Development (CODE)',
      industry: 'Social Entrepreneurship',
      description: 'Pioneering foundation advancing girl-child education, women\'s empowerment, skills acquisition, and community-driven entrepreneurship.',
      value: '20+ Years',
      established: 'Early 2000s',
      status: 'Active',
    },
    {
      name: 'Enterprise University of Nigeria',
      industry: 'Education & Training',
      description: 'Institution committed to nurturing a new generation of entrepreneurs through practical education, research, and innovation.',
      value: 'Growing',
      established: 'Recent',
      status: 'Growing',
    },
    {
      name: 'MSMEs Business Management Organization (BMO)',
      industry: 'Business Support',
      description: 'Platform providing business support services, advisory solutions, and capacity-building programs for micro, small, and medium-sized enterprises.',
      value: 'Expanding',
      established: 'Recent',
      status: 'Expanding',
    },
    {
      name: 'Opportunities Hub (OHUB)',
      industry: 'Youth Development',
      description: 'Dynamic ecosystem dedicated to unlocking pathways for young people by placing African youth at the center of global transformation.',
      value: 'Active',
      established: '2015-2017',
      status: 'Active',
    },
    {
      name: 'The Ruma Foundation',
      industry: 'Philanthropy',
      description: 'Philanthropic institution focused on giving back to communities and transforming lives through human capital development.',
      value: 'Ongoing',
      established: 'Ongoing',
      status: 'Active',
    },
    {
      name: 'WAGES Program',
      industry: 'Women Empowerment',
      description: 'Women & Girls Entrepreneurship Support Program designed to equip young women with practical skills and business knowledge.',
      value: 'Impact',
      established: 'Under CODE',
      status: 'Innovation',
    },
  ];

  const stats = [
    { label: 'Organizations Founded', value: '4+' },
    { label: 'Years of Impact', value: '20+' },
    { label: 'Books Published', value: '3' },
    { label: 'Global Recognition', value: '25+' },
  ];

  const principles = [
    {
      title: 'Youth Empowerment',
      description: 'Dedicated to empowering young people through skills development, entrepreneurship, and digital innovation across Africa.',
    },
    {
      title: 'Social Impact',
      description: 'Creating sustainable solutions that address poverty, unemployment, and inequality while fostering community development.',
    },
    {
      title: 'Technology for Good',
      description: 'Using technology as a tool for community transformation and sustainable development, earning recognition as Father of Innovation.',
    },
    {
      title: 'Community-Driven',
      description: 'Building platforms that strengthen institutions and create inclusive economic opportunities for underserved communities.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Organizations & Initiatives
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A portfolio of social enterprises and initiatives dedicated to youth empowerment, 
              skills development, and sustainable community transformation across Africa.
            </p>
          </div>
          
          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 group-hover:scale-105 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Active Organizations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Social enterprises and initiatives driving youth empowerment and community development across Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((company, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 hover:transform hover:scale-105 elegant-shadow hover:elegant-shadow-lg group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      company.status === 'Growing' ? 'bg-green-100 text-green-700' :
                      company.status === 'Innovation' ? 'bg-blue-100 text-blue-700' :
                      company.status === 'Expanding' ? 'bg-purple-100 text-purple-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {company.status}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">{company.value}</div>
                      <div className="text-sm text-slate-500">Est. {company.established}</div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {company.name}
                </h3>
                
                <div className="text-sm font-medium text-slate-600 mb-4">
                  {company.industry}
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Business Principles */}
      <section className="section-padding bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Core Mission</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The fundamental principles that guide our approach to social entrepreneurship and community development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl elegant-shadow hover:elegant-shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-slate-400 rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{principle.title}</h3>
                <p className="text-slate-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Investment Approach */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Approach to Social Impact</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Our approach focuses on creating sustainable solutions that address critical 
                  social challenges across Africa. We prioritize initiatives that empower young 
                  people, strengthen communities, and create inclusive economic opportunities.
                </p>
                <p>
                  Each organization is carefully designed to align with our core mission: 
                  youth empowerment, skills development, and community transformation. We provide 
                  not just resources, but strategic guidance and mentorship to help communities 
                  achieve their full potential.
                </p>
                <p>
                  Our hands-on approach ensures that every initiative receives the support needed 
                  to create lasting impact, scale effectively, and transform lives across 
                  underserved communities in Africa.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="outline">
                  Discuss Partnership Opportunities
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl elegant-shadow flex items-center justify-center">
                  <div className="text-slate-600 text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <p className="text-xs">Growth</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl elegant-shadow flex items-center justify-center">
                  <div className="text-slate-600 text-center">
                    <div className="text-3xl mb-2">🌍</div>
                    <p className="text-xs">Global</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl elegant-shadow flex items-center justify-center">
                  <div className="text-slate-600 text-center">
                    <div className="text-3xl mb-2">💡</div>
                    <p className="text-xs">Innovation</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl elegant-shadow flex items-center justify-center">
                  <div className="text-slate-600 text-center">
                    <div className="text-3xl mb-2">🤝</div>
                    <p className="text-xs">Partnership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference Together?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Whether you're passionate about youth empowerment, social entrepreneurship, 
            or community development, let's discuss how we can collaborate to create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary">
              Start a Conversation
            </Button>
            <Button to="/profile" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Learn About My Journey
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Business;
