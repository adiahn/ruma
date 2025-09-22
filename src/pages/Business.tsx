import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';

const Business = () => {
  const portfolio = [
    {
      name: 'Ruma Properties Ltd',
      industry: 'Real Estate Development',
      description: 'Leading real estate development company with luxury residential and commercial properties across major cities.',
      value: '$500M+',
      established: '2018',
      status: 'Active',
    },
    {
      name: 'TechVision Solutions',
      industry: 'Technology & Software',
      description: 'Innovative technology solutions provider specializing in enterprise software and digital transformation.',
      value: '$300M+',
      established: '2020',
      status: 'Growing',
    },
    {
      name: 'Industrial Holdings Corp',
      industry: 'Manufacturing',
      description: 'Diversified manufacturing operations producing consumer goods and industrial equipment.',
      value: '$400M+',
      established: '2016',
      status: 'Active',
    },
    {
      name: 'Ruma Financial Services',
      industry: 'Financial Services',
      description: 'Comprehensive financial services including investment banking, asset management, and fintech solutions.',
      value: '$250M+',
      established: '2019',
      status: 'Expanding',
    },
    {
      name: 'Global Logistics Network',
      industry: 'Transportation & Logistics',
      description: 'International logistics and supply chain management with operations across multiple continents.',
      value: '$200M+',
      established: '2017',
      status: 'Active',
    },
    {
      name: 'HealthCare Innovations',
      industry: 'Healthcare Technology',
      description: 'Revolutionary healthcare technology solutions improving patient care and medical efficiency.',
      value: '$150M+',
      established: '2021',
      status: 'Innovation',
    },
  ];

  const stats = [
    { label: 'Total Portfolio Value', value: '$2.1B+' },
    { label: 'Active Companies', value: '15+' },
    { label: 'Employees Worldwide', value: '10,000+' },
    { label: 'Markets Served', value: '12' },
  ];

  const principles = [
    {
      title: 'Sustainable Growth',
      description: 'Building businesses that create long-term value for all stakeholders while respecting environmental and social responsibilities.',
    },
    {
      title: 'Innovation-Driven',
      description: 'Embracing cutting-edge technologies and innovative business models to stay ahead in competitive markets.',
    },
    {
      title: 'People-First Approach',
      description: 'Investing in human capital and creating environments where talent can thrive and contribute to organizational success.',
    },
    {
      title: 'Strategic Partnerships',
      description: 'Building strong alliances and partnerships that amplify capabilities and create mutual value across industries.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Business Portfolio
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A diversified empire spanning multiple industries, each strategically positioned 
              to create sustainable value and drive innovation.
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Active Ventures</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic investments across key sectors driving economic growth and innovation.
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Business Philosophy</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The core principles that guide our investment decisions and business operations.
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Investment Approach</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Our investment strategy focuses on identifying high-potential opportunities 
                  in emerging markets, particularly across Africa. We look for businesses that 
                  combine strong fundamentals with the potential for significant social impact.
                </p>
                <p>
                  Each investment is carefully evaluated for its alignment with our core values: 
                  sustainability, innovation, and community development. We provide not just 
                  capital, but strategic guidance and operational expertise to help our portfolio 
                  companies achieve their full potential.
                </p>
                <p>
                  Our hands-on approach ensures that every venture receives the support needed 
                  to navigate challenges, scale operations, and create lasting value for all 
                  stakeholders involved.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="outline">
                  Discuss Investment Opportunities
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
            Ready to Explore Partnership Opportunities?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Whether you're an entrepreneur with a groundbreaking idea or an established 
            business looking for strategic investment, let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary">
              Start a Conversation
            </Button>
            <Button to="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Learn About My Journey
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Business;
