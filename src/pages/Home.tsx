import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import portrait from '../assets/portrait.jpg';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/hero.jpg)',
            filter: 'grayscale(0%) brightness(0.5)'
          }}
        />
        
        {/* Lighter Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10" />
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Bring content down a bit, reduce size */}
            <div className="flex items-center justify-center min-h-[50vh] py-20">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-12">
                  Welcome to the Office of<br />Dr. Babangida Ruma
                </h1>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
                  <Button to="/business" variant="outline" size="lg" className="min-w-[180px] border-2 border-white text-white hover:bg:white hover:text-slate-900">
                    Explore Initiatives
                  </Button>
                  <Button to="/contact" variant="secondary" size="lg" className="min-w-[180px]">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
              
              {/* Section 1 - Title and Quote */}
              <AnimatedSection animation="slideInLeft">
                <div className="h-full flex flex-col justify-center px-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                    A Legacy of Service A Vision for The Future
                  </h2>
                  <div className="w-16 h-1 bg-blue-900 mb-8"></div>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-6 italic text-justify">
                    "In every role I have been privileged to serve, from leading Enterprise Development Initiatives in Katsina State to driving innovation, youth empowerment, and institutional reform, I have remained guided by a deep commitment to impact, service, and sustainable progress. With fresh ideas, strategic vision, and a passion for results, I continuously strive to build systems that empower people, strengthen institutions, and unlock opportunities. My mission has always been simple yet profound: to leave every project, partnership, and institution better than I met it."
                  </p>
                  <p className="text-2xl font-serif italic text-gray-800">Dr. Babangida Ruma</p>
                </div>
              </AnimatedSection>

              {/* Section 2 - Logo */}
              <AnimatedSection animation="slideInRight">
                <div className="h-full flex items-center justify-center px-6">
                  <img src="/assets/logo-removebg-preview.png" alt="Office Badge" className="w-80 h-80 object-contain" /> 
                </div>
              </AnimatedSection>
              
            </div>
          </div>
        </div>
      </section>

      {/* Featured On Section */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container-custom">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-responsive-md font-bold text-slate-900 mb-4">
                Featured On
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                Recognized by leading global media outlets for innovative leadership and social impact
                  </p>
        </div>

            {/* Media Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 items-center justify-items-center">
              {/* BBC */}
            <motion.div 
                className="flex items-center justify-center p-4 transition-all duration-300 hover:opacity-70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                  <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" 
                  alt="BBC"
                  className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>

              {/* CNN */}
                <motion.div 
                className="flex items-center justify-center p-4 transition-all duration-300 hover:opacity-70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                >
                  <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1200px-CNN.svg.png" 
                  alt="CNN"
                  className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>

              {/* Forbes */}
                <motion.div 
                className="flex items-center justify-center p-4 transition-all duration-300 hover:opacity-70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                >
                  <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Forbes_logo.svg/1200px-Forbes_logo.svg.png" 
                  alt="Forbes"
                  className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>

              {/* The Guardian */}
                <motion.div 
                className="flex items-center justify-center p-4 transition-all duration-300 hover:opacity-70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                >
                  <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Guardian_logo.svg/1200px-Guardian_logo.svg.png" 
                  alt="The Guardian"
                  className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>

              {/* Nigeria Reports */}
                <motion.div 
                className="flex items-center justify-center p-4 transition-all duration-300 hover:opacity-70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                >
                  <img 
                  src="https://nigeriareports.com/wp-content/uploads/2024/04/nigeriareports-logo.png" 
                  alt="Nigeria Reports"
                  className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>
              </div>
          </AnimatedSection>
        </div>
      </section>


      {/* About Preview */}
      <AnimatedSection animation="slideUp">
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <AnimatedSection animation="slideInLeft" delay={0.2}>
                <div className="text-center lg:text-left">
                  <h2 className="text-responsive-lg font-bold text-slate-900 mb-4 sm:mb-6">
                    Empowering Nigeria's Youth Through Innovation
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                    For over two decades, I have dedicated my career to empowering young people, 
                    strengthening institutions, and creating inclusive economic opportunities across Nigeria and Nigeria. 
                    Through social entrepreneurship and digital innovation, I work to transform 
                    communities and build sustainable futures for the next generation.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <Button to="/profile" variant="outline" className="w-full sm:w-auto">
                      Learn More About My Journey
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slideInRight" delay={0.4}>
                <div className="relative flex justify-center lg:justify-end">
                  <motion.div 
                    className="rounded-2xl elegant-shadow-lg overflow-hidden hover-lift w-full max-w-xs lg:max-w-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={portrait} 
                      alt="Dr. Babangida Ruma" 
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection animation="slideUp">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-responsive-lg font-bold text-slate-900 mb-4 sm:mb-6">
                Latest Insights
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
                Thoughts on youth empowerment, technology innovation, and social entrepreneurship
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Future of Youth Empowerment in Nigeria",
                  excerpt: "Exploring innovative approaches to empowering young people across the continent through technology and entrepreneurship.",
                  date: "December 2024",
                  readTime: "5 min read",
                  category: "Youth Development"
                },
                {
                  title: "Building Sustainable Communities Through Innovation",
                  excerpt: "How social entrepreneurship and digital innovation can transform communities and create lasting impact.",
                  date: "November 2024",
                  readTime: "7 min read",
                  category: "Social Innovation"
                },
                {
                  title: "Technology as a Tool for Social Change",
                  excerpt: "Leveraging technology to address pressing social challenges and create opportunities for underserved communities.",
                  date: "October 2024",
                  readTime: "6 min read",
                  category: "Technology"
                }
              ].map((post, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button to="/blog" variant="outline" className="w-full sm:w-auto">
                View All Articles
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="fadeIn">
        <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, #64748b 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, #64748b 0%, transparent 50%)',
                'radial-gradient(circle at 40% 50%, #64748b 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Create Something Extraordinary?
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Whether you're interested in youth empowerment initiatives, social entrepreneurship partnerships, 
              or learning about sustainable community development, let's explore how we can work together.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button to="/contact" variant="secondary">
                Get in Touch
              </Button>
              <Button to="/business" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;