import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in a real app, this would come from an API
  const blogPosts = {
    1: {
      title: "The Future of African Entrepreneurship: Building Sustainable Businesses",
      content: `
        <p>Africa is experiencing unprecedented economic growth and entrepreneurial activity. As we look toward the future, the continent presents unique opportunities for building sustainable businesses that can create lasting value for communities and stakeholders alike.</p>
        
        <h2>The Current Landscape</h2>
        <p>The African business landscape is rapidly evolving, with technology playing a crucial role in driving innovation and growth. From fintech solutions to agricultural technology, entrepreneurs are finding creative ways to address local challenges while building scalable businesses.</p>
        
        <p>One of the key factors driving this growth is the continent's young and dynamic population. With over 60% of Africa's population under the age of 25, there's a tremendous opportunity to harness this demographic dividend through entrepreneurship and innovation.</p>
        
        <h2>Key Strategies for Success</h2>
        <p>Building sustainable businesses in Africa requires a deep understanding of local markets, cultural nuances, and regulatory environments. Here are some key strategies that have proven effective:</p>
        
        <h3>1. Local Market Understanding</h3>
        <p>Success in African markets requires more than just a good product or service. Entrepreneurs must understand the unique needs, preferences, and constraints of local consumers. This often means adapting business models to fit local contexts and building relationships with community leaders and stakeholders.</p>
        
        <h3>2. Technology Integration</h3>
        <p>Technology is a powerful enabler for African businesses, providing access to new markets, improving operational efficiency, and enabling innovative solutions to traditional problems. From mobile payments to supply chain management, technology is transforming how businesses operate across the continent.</p>
        
        <h3>3. Sustainable Growth</h3>
        <p>Long-term success requires a focus on sustainable growth rather than quick wins. This means building strong foundations, investing in human capital, and creating value that benefits all stakeholders, not just shareholders.</p>
        
        <h2>Looking Ahead</h2>
        <p>The future of African entrepreneurship is bright, with numerous opportunities for growth and innovation. As the continent continues to develop and integrate into the global economy, entrepreneurs who focus on building sustainable, value-creating businesses will be well-positioned for long-term success.</p>
        
        <p>The key is to remain adaptable, stay connected to local communities, and always keep the bigger picture in mind. By building businesses that create real value and contribute to sustainable development, African entrepreneurs can help shape a brighter future for the continent and beyond.</p>
      `,
      author: "Dr. Babangida Ruma",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Entrepreneurship",
      image: "/src/assets/hero.jpg",
      tags: ["Entrepreneurship", "Africa", "Business Strategy", "Innovation"]
    },
    2: {
      title: "Innovation in Traditional Industries: A Modern Approach",
      content: `
        <p>Traditional industries across Africa are undergoing remarkable transformations. From agriculture to manufacturing, technology is enabling new ways of thinking and operating that were previously unimaginable.</p>
        
        <h2>The Innovation Imperative</h2>
        <p>In today's rapidly changing world, innovation is no longer optional—it's essential for survival and growth. Traditional industries that fail to adapt risk becoming obsolete, while those that embrace innovation can unlock new opportunities and create sustainable competitive advantages.</p>
        
        <h2>Case Studies in Innovation</h2>
        <p>Across Africa, we're seeing remarkable examples of innovation in traditional industries. From precision agriculture using IoT sensors to blockchain-based supply chain management, technology is revolutionizing how traditional businesses operate.</p>
        
        <h2>Building an Innovation Culture</h2>
        <p>Creating a culture of innovation requires more than just adopting new technologies. It requires a fundamental shift in mindset, processes, and organizational structure. Leaders must be willing to take calculated risks and invest in long-term innovation initiatives.</p>
      `,
      author: "Dr. Babangida Ruma",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Innovation",
      image: "/src/assets/hero.jpg",
      tags: ["Innovation", "Technology", "Traditional Industries", "Transformation"]
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back Navigation */}
      <section className="section-padding-sm bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-300 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Header */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                  <Tag size={14} />
                  {post.category}
                </span>
              </div>
              
              <motion.h1 
                className="text-responsive-xl font-bold text-slate-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {post.title}
              </motion.h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>By {post.author}</span>
                </div>
              </div>
              
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden mb-8">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%)' }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="prose prose-lg prose-slate max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Share this article</h3>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-300">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-responsive-lg font-bold text-slate-900 mb-8">Related Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <img 
                      src="/src/assets/hero.jpg"
                      alt="Related article"
                      className="w-full h-full object-cover"
                      style={{ filter: 'grayscale(20%)' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Building Strategic Partnerships for Growth</h3>
                    <p className="text-slate-600 text-sm mb-4">The importance of strategic partnerships in scaling businesses and achieving sustainable growth.</p>
                    <Link 
                      to="/blog/3"
                      className="text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
                
                <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <img 
                      src="/src/assets/hero.jpg"
                      alt="Related article"
                      className="w-full h-full object-cover"
                      style={{ filter: 'grayscale(20%)' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Leadership in Times of Change</h3>
                    <p className="text-slate-600 text-sm mb-4">Essential leadership principles for navigating uncertainty and driving organizational transformation.</p>
                    <Link 
                      to="/blog/4"
                      className="text-slate-900 font-medium hover:text-slate-700 transition-colors duration-300 text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
