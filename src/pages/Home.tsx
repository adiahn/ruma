import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

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
            filter: 'grayscale(100%) brightness(0.5)'
          }}
        />
        
        {/* Lighter Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        
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

      {/* Partners Section */}
      <section className="section-padding-sm bg-white border-t border-gray-100 overflow-hidden">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
                  <h2 className="text-responsive-md font-bold text-slate-900 mb-4">
                    Global Collaborations
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                    Working with international organizations to advance youth empowerment and social development
                  </p>
          </motion.div>
        </div>

        <div className="relative overflow-hidden space-y-6 w-full">
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
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <AnimatedSection animation="slideInLeft" delay={0.2}>
                <div className="text-center lg:text-left">
                  <h2 className="text-responsive-lg font-bold text-slate-900 mb-4 sm:mb-6">
                    Empowering Africa's Youth Through Innovation
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                    For over two decades, I have dedicated my career to empowering young people, 
                    strengthening institutions, and creating inclusive economic opportunities across Nigeria and Africa. 
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
                    className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl elegant-shadow-lg flex items-center justify-center hover-lift w-full max-w-sm lg:max-w-none"
                    whileHover={{ rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center text-slate-600">
                      <motion.div 
                        className="text-4xl sm:text-6xl mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        📸
                      </motion.div>
                      <p className="text-base sm:text-lg font-medium">Professional Portrait</p>
                    </div>
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
                  title: "The Future of Youth Empowerment in Africa",
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