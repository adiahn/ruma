import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of African Entrepreneurship: Building Sustainable Businesses",
      excerpt: "Exploring the key strategies and opportunities for creating lasting value in Africa's rapidly growing business landscape.",
      content: "Africa is experiencing unprecedented economic growth and entrepreneurial activity. As we look toward the future, the continent presents unique opportunities for building sustainable businesses that can create lasting value...",
      author: "Dr. Babangida Ruma",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Entrepreneurship",
      image: "/src/assets/hero.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Innovation in Traditional Industries: A Modern Approach",
      excerpt: "How technology and innovation are transforming traditional African industries and creating new opportunities.",
      content: "Traditional industries across Africa are undergoing remarkable transformations. From agriculture to manufacturing, technology is enabling new ways of thinking and operating...",
      author: "Dr. Babangida Ruma",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Innovation",
      image: "/src/assets/hero.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Building Strategic Partnerships for Growth",
      excerpt: "The importance of strategic partnerships in scaling businesses and achieving sustainable growth in competitive markets.",
      content: "Strategic partnerships have become essential for business growth in today's interconnected world. The right partnership can provide access to new markets, technologies, and resources...",
      author: "Dr. Babangida Ruma",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Business Strategy",
      image: "/src/assets/hero.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Leadership in Times of Change",
      excerpt: "Essential leadership principles for navigating uncertainty and driving organizational transformation.",
      content: "Leadership during times of change requires a unique set of skills and perspectives. The ability to guide teams through uncertainty while maintaining focus on long-term goals...",
      author: "Dr. Babangida Ruma",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "Leadership",
      image: "/src/assets/hero.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Development Through Business",
      excerpt: "How businesses can drive sustainable development while maintaining profitability and growth.",
      content: "The intersection of business success and sustainable development represents one of the most important opportunities of our time. Companies that successfully integrate sustainability...",
      author: "Dr. Babangida Ruma",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "Sustainability",
      image: "/src/assets/hero.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation in African Markets",
      excerpt: "Understanding the digital revolution sweeping across African markets and its implications for businesses.",
      content: "Digital transformation is reshaping African markets at an unprecedented pace. From mobile payments to e-commerce, technology is creating new opportunities...",
      author: "Dr. Babangida Ruma",
      date: "2023-12-15",
      readTime: "8 min read",
      category: "Technology",
      image: "/src/assets/hero.jpg",
      featured: false
    }
  ];

  const categories = ["All", "Entrepreneurship", "Innovation", "Business Strategy", "Leadership", "Sustainability", "Technology"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-responsive-xl font-bold text-slate-900 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Insights & Perspectives
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Thoughts on entrepreneurship, innovation, and building sustainable businesses across Africa and beyond.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="mb-12">
              <h2 className="text-responsive-lg font-bold text-slate-900 mb-8">Featured Article</h2>
              
              <motion.article 
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'grayscale(20%)' }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Tag size={14} />
                        {blogPosts[0].category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      {blogPosts[0].title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${blogPosts[0].id}`}
                      className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 group"
                    >
                      Read Full Article
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="mb-8">
              <h2 className="text-responsive-lg font-bold text-slate-900 mb-8">Latest Articles</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        style={{ filter: 'grayscale(20%)' }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 text-slate-700 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-3 mb-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 text-sm group"
                      >
                        Read More
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2 
                className="text-responsive-lg font-bold text-white mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Stay Updated
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Get the latest insights and perspectives delivered to your inbox.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <Button 
                  size="lg" 
                  className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 w-full sm:w-auto"
                >
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blog;
