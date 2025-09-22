import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Lightbulb, Star, Target, Crown } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Companies Founded', value: '5+' },
    { label: 'Portfolio Value', value: '$50M+' },
    { label: 'Partners', value: '25+' },
    { label: 'Countries', value: '3' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pioneering new business models and disrupting traditional industries with cutting-edge solutions.',
    },
    {
      title: 'Excellence',
      description: 'Maintaining the highest standards in every venture, partnership, and business endeavor.',
    },
    {
      title: 'Impact',
      description: 'Creating sustainable value for stakeholders while contributing to community development.',
    },
    {
      title: 'Leadership',
      description: 'Building exceptional teams and inspiring others to achieve extraordinary results.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gray-50 flex items-center">
        <div className="w-full px-2 sm:px-4 lg:px-5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Dr. Babangida Ruma
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-slate-600 mb-8 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Visionary Entrepreneur & Philanthropist
              </motion.p>
              
              <motion.p 
                className="text-lg text-slate-600 mb-12 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Building sustainable enterprises that create lasting value across Africa and beyond. 
                With over two decades of transformative leadership, fostering innovation and economic growth.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button to="/business" size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                  Explore My Portfolio
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                  Get in Touch
                </Button>
              </motion.div>
              
              {/* Simple Stats */}
              <motion.div 
                className="grid grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">5+</div>
                  <div className="text-xs lg:text-sm text-slate-600">Companies</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">$50M+</div>
                  <div className="text-xs lg:text-sm text-slate-600">Portfolio</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">25+</div>
                  <div className="text-xs lg:text-sm text-slate-600">Partners</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">3</div>
                  <div className="text-xs lg:text-sm text-slate-600">Countries</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Portrait Side */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Transparent PNG Portrait */}
                <motion.div 
                  className="w-96 h-[28rem] lg:w-[28rem] lg:h-[36rem] xl:w-[32rem] xl:h-[42rem]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/src/assets/hero.png"
                    alt="Dr. Babangida Ruma"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.1))'
                    }}
                  />
                </motion.div>
                
                {/* Subtle Background Element */}
                <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-white rounded-2xl opacity-80" />
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="px-2 sm:px-4 lg:px-5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Trusted Partners
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Collaborating with industry leaders to drive innovation and create lasting value
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative overflow-hidden space-y-6">
            {/* First Row */}
            <motion.div 
              className="flex space-x-12 lg:space-x-16"
              animate={{ x: ['100vw', '-100vw'] }}
              transition={{ 
                duration: 13,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: 'calc(300% + 600px)' }}
            >
              {/* First set of logos - Row 1 */}
              <div className="flex space-x-12 lg:space-x-16 items-center min-w-max">
                {/* Google */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                    alt="Google"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Microsoft */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" 
                    alt="Microsoft"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Meta */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png" 
                    alt="Meta"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Amazon */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0018/0563/brand.gif?itok=HQqzbfgU" 
                    alt="Amazon"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Apple */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" 
                    alt="Apple"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Tesla */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" 
                    alt="Tesla"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* Netflix */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" 
                    alt="Netflix"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Spotify */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" 
                    alt="Spotify"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Uber */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" 
                    alt="Uber"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Airbnb */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png" 
                    alt="Airbnb"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Twitter/X */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" 
                    alt="X (Twitter)"
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* LinkedIn */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                    alt="LinkedIn"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

              </div>

              {/* Duplicate set for seamless loop - Row 1 */}
              <div className="flex space-x-12 lg:space-x-16 items-center min-w-max">
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="Microsoft" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png" alt="Meta" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0018/0563/brand.gif?itok=HQqzbfgU" alt="Amazon" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="Apple" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" alt="Tesla" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="Netflix" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="Spotify" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="Uber" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png" alt="Airbnb" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" alt="X (Twitter)" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-12 w-auto object-contain" />
                </motion.div>
              </div>
            </motion.div>

            {/* Second Row */}
            <motion.div 
              className="flex space-x-12 lg:space-x-16"
              animate={{ x: ['100vw', '-100vw'] }}
              transition={{ 
                duration: 13,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
              style={{ width: 'calc(300% + 600px)' }}
            >
              {/* First set of logos - Row 2 */}
              <div className="flex space-x-12 lg:space-x-16 items-center min-w-max">
                {/* Adobe */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/11/Adobe-Logo.png" 
                    alt="Adobe"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* Salesforce */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/09/Salesforce-Logo.png" 
                    alt="Salesforce"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* Oracle */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png" 
                    alt="Oracle"
                    className="h-8 w-auto object-contain"
                  />
                </motion.div>

                {/* IBM */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png" 
                    alt="IBM"
                    className="h-8 w-auto object-contain"
                  />
                </motion.div>

                {/* Intel */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" 
                    alt="Intel"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* NVIDIA */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" 
                    alt="NVIDIA"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* PayPal */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png" 
                    alt="PayPal"
                    className="h-8 w-auto object-contain"
                  />
                </motion.div>

                {/* Stripe */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png" 
                    alt="Stripe"
                    className="h-8 w-auto object-contain"
                  />
                </motion.div>

                {/* Zoom */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png" 
                    alt="Zoom"
                    className="h-8 w-auto object-contain"
                  />
                </motion.div>

                {/* Slack */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" 
                    alt="Slack"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* Shopify */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" 
                    alt="Shopify"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* Square */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://cdn.worldvectorlogo.com/logos/square-7.svg" 
                    alt="Square"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* Dropbox */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg" 
                    alt="Dropbox"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* GitHub */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" 
                    alt="GitHub"
                    className="h-8 w-auto object-contain"
                  />
                </motion.div>

                {/* Atlassian */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://cdn.worldvectorlogo.com/logos/atlassian-1.svg" 
                    alt="Atlassian"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* MongoDB */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" 
                    alt="MongoDB"
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>

                {/* Twilio */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2021/03/Twilio-Logo.png" 
                    alt="Twilio"
                    className="h-8 w-auto object-contain"
                  />
                </motion.div>

                {/* Discord */}
                <motion.div 
                  className="flex items-center justify-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png" 
                    alt="Discord"
                    className="h-8 w-auto object-contain"
                  />
                </motion.div>
              </div>

              {/* Duplicate set for seamless loop - Row 2 */}
              <div className="flex space-x-12 lg:space-x-16 items-center min-w-max">
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/11/Adobe-Logo.png" alt="Adobe" className="h-14 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/09/Salesforce-Logo.png" alt="Salesforce" className="h-14 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png" alt="Oracle" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png" alt="IBM" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" alt="Intel" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" alt="NVIDIA" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png" alt="PayPal" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png" alt="Stripe" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png" alt="Zoom" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://cdn.worldvectorlogo.com/logos/square-7.svg" alt="Square" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg" alt="Dropbox" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" alt="GitHub" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://cdn.worldvectorlogo.com/logos/atlassian-1.svg" alt="Atlassian" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" className="h-12 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2021/03/Twilio-Logo.png" alt="Twilio" className="h-10 w-auto object-contain" />
                </motion.div>
                <motion.div className="flex items-center justify-center p-4">
                  <img src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png" alt="Discord" className="h-10 w-auto object-contain" />
                </motion.div>
              </div>
            </motion.div>
        </div>
      </section>


      {/* About Preview */}
      <AnimatedSection animation="slideUp">
        <section className="section-padding bg-slate-50">
          <div className="px-2 sm:px-4 lg:px-5">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="slideInLeft" delay={0.2}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Building the Future of African Business
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    For over two decades, I have dedicated my career to creating businesses 
                    that not only generate wealth but also contribute meaningfully to societal 
                    development. From humble beginnings to building a multi-billion dollar 
                    empire, my journey represents the power of vision, determination, and 
                    strategic thinking.
                  </p>
                  <Button to="/about" variant="outline">
                    Learn More About My Journey
                  </Button>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slideInRight" delay={0.4}>
                <div className="relative">
                  <motion.div 
                    className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl elegant-shadow-lg flex items-center justify-center hover-lift"
                    whileHover={{ rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center text-slate-600">
                      <motion.div 
                        className="text-6xl mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        📸
                      </motion.div>
                      <p className="text-lg font-medium">Professional Portrait</p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        </section>
      </AnimatedSection>

          {/* Values Section */}
          <AnimatedSection animation="fadeIn">
            <section className="section-padding bg-white">
              <div className="px-2 sm:px-4 lg:px-5">
                <div className="max-w-7xl mx-auto">
                <AnimatedSection animation="slideUp" delay={0.2}>
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                      Core Values
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                      The principles that guide every decision and drive sustainable success.
                    </p>
                  </div>
                </AnimatedSection>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center group"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-100 transition-colors border border-slate-200"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="text-slate-600"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        >
                          {index === 0 && <Lightbulb size={24} />}
                          {index === 1 && <Star size={24} />}
                          {index === 2 && <Target size={24} />}
                          {index === 3 && <Crown size={24} />}
                        </motion.div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
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
          <div className="px-2 sm:px-4 lg:px-5">
            <div className="max-w-7xl mx-auto text-center relative z-10">
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
              Whether you're looking for strategic partnerships, investment opportunities, 
              or inspiring leadership insights, let's explore how we can work together.
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