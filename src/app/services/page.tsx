'use client'

import { useState } from 'react'
import { FaSchool, FaPencilAlt, FaTools, FaLaptopCode, FaRss, FaRobot, FaCog, FaMobile } from 'react-icons/fa'
import { MdOutlineWeb, MdComputer, MdAutorenew, MdIntegrationInstructions } from 'react-icons/md'

export default function Services() {
  const [selectedService, setSelectedService] = useState(0)
  const services = [
    {
      icon: <FaSchool className="text-3xl text-orange-400" />,
      title: "School ERP",
      description: "A comprehensive Enterprise Resource Planning solution specifically designed for educational institutions to revolutionize school management. Our School ERP system streamlines all academic and administrative processes, from student admissions to graduation, providing a unified platform for efficient school management. The system integrates seamlessly with existing infrastructure while offering real-time data analytics and reporting capabilities. It enhances communication between students, parents, teachers, and administrators through automated notifications and updates. Our ERP solution reduces paperwork, minimizes manual errors, and improves operational efficiency across all departments. The platform is scalable, secure, and customizable to meet the unique needs of different educational institutions. With cloud-based accessibility, stakeholders can access information anytime, anywhere, ensuring continuous connectivity and engagement.",
      features: [
        "Student Information Management System",
        "Online Admission & Enrollment Process",
        "Attendance Tracking & Reporting",
        "Fee Management & Online Payment Gateway",
        "Academic Performance & Grade Management",
        "Timetable & Class Scheduling",
        "Parent-Teacher Communication Portal",
        "Library Management System",
        "Transport Management",
        "Staff Management & Payroll",
        "Examination Management",
        "Digital Report Cards & Certificates"
      ],
      color: "from-orange-500/20 to-amber-500/20"
    },
    {
      icon: <FaLaptopCode className="text-3xl text-blue-400" />,
      title: "Custom Software Development",
      description: "Tailor-made software solutions built from the ground up to address your specific business requirements and challenges. Our expert development team creates robust, scalable, and secure applications that perfectly align with your workflow and business objectives. We follow agile development methodologies to ensure rapid delivery while maintaining high quality standards throughout the development lifecycle. Our solutions are designed with future growth in mind, incorporating modern technologies and best practices for optimal performance. We provide comprehensive documentation, user training, and ongoing support to ensure smooth implementation and adoption. Each solution undergoes rigorous testing and quality assurance processes to guarantee reliability and functionality. Our team works closely with clients to understand their unique needs and deliver solutions that drive measurable business results.",
      features: [
        "Business Process Analysis & Requirements Gathering",
        "Custom Web Application Development",
        "Desktop Software Solutions",
        "Database Design & Management",
        "API Development & Integration",
        "Cloud-based Application Development",
        "Legacy System Modernization",
        "Software Testing & Quality Assurance",
        "User Training & Documentation",
        "Ongoing Maintenance & Support",
        "Performance Optimization",
        "Security Implementation & Compliance"
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <MdOutlineWeb className="text-3xl text-purple-400" />,
      title: "Web Development",
      description: "Create stunning, responsive, and high-performance websites and web applications that deliver exceptional user experiences across all devices and platforms. Our web development services combine cutting-edge technologies with modern design principles to build scalable digital solutions that drive business growth. We specialize in creating fast-loading, SEO-optimized websites that rank well in search engines and convert visitors into customers. Our development process includes thorough planning, wireframing, design mockups, and iterative development with regular client feedback. We ensure cross-browser compatibility, mobile responsiveness, and accessibility compliance to reach the widest possible audience. Our websites are built with security best practices, including SSL certificates, secure coding standards, and regular security updates. We provide ongoing maintenance, performance monitoring, and technical support to keep your website running smoothly and efficiently.",
      features: [
        "Responsive Website Design & Development",
        "E-commerce Platform Development",
        "Content Management Systems (CMS)",
        "Progressive Web Applications (PWA)",
        "Single Page Applications (SPA)",
        "Search Engine Optimization (SEO)",
        "Website Performance Optimization",
        "Cross-browser Compatibility",
        "SSL Certificate & Security Implementation",
        "Website Maintenance & Updates",
        "Analytics & Tracking Integration",
        "Third-party Service Integration"
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <FaRobot className="text-3xl text-green-400" />,
      title: "Farming & Commercial Robotics Solutions",
      description: "Revolutionary robotic solutions designed to transform agriculture and commercial operations through cutting-edge automation technology. Our intelligent automation systems enhance productivity, reduce manual labor, and optimize resource utilization through advanced robotics and AI technologies. We develop custom robotic solutions that integrate seamlessly with existing operations while providing real-time monitoring and control capabilities. Our systems utilize machine learning algorithms to continuously improve performance and adapt to changing conditions and requirements. We provide comprehensive training for operators and maintenance staff to ensure optimal utilization of robotic systems. Our solutions include predictive maintenance capabilities that minimize downtime and extend equipment lifespan through proactive monitoring. We offer ongoing technical support, software updates, and system optimization services to maximize return on investment and operational efficiency.",
      features: [
        "Automated Crop Monitoring & Analysis",
        "Precision Agriculture Robots",
        "Automated Irrigation Systems",
        "Harvesting & Sorting Automation",
        "Warehouse Automation Solutions",
        "Industrial Assembly Line Robots",
        "Quality Control & Inspection Systems",
        "Inventory Management Automation",
        "Remote Monitoring & Control",
        "Predictive Maintenance Systems",
        "Custom Robotic Hardware Design",
        "AI-powered Decision Making"
      ],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <FaRss className="text-3xl text-indigo-400" />,
      title: "RFID Solutions",
      description: "Advanced Radio Frequency Identification (RFID) systems that provide real-time tracking, monitoring, and management capabilities across diverse industries and applications. Our RFID solutions enhance security, improve efficiency, and automate data collection while reducing human error and operational costs. We design and implement custom RFID systems that integrate seamlessly with existing databases and management systems for comprehensive data synchronization. Our solutions support various RFID frequencies and tag types to meet specific application requirements and environmental conditions. We provide detailed analytics and reporting capabilities that offer valuable insights into asset utilization, movement patterns, and operational efficiency. Our RFID systems are designed for scalability, allowing easy expansion as business needs grow and evolve over time. We offer comprehensive training, ongoing support, and system maintenance to ensure optimal performance and maximum return on investment.",
      features: [
        "Asset Tracking & Management",
        "Employee Attendance Systems",
        "Access Control & Security",
        "Inventory Management & Stock Control",
        "Vehicle Tracking & Fleet Management",
        "Supply Chain Visibility",
        "Patient & Equipment Tracking (Healthcare)",
        "Library Book Management",
        "Retail Anti-theft Solutions",
        "Real-time Data Analytics",
        "Custom RFID Hardware Integration",
        "Mobile App Integration"
      ],
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: <FaMobile className="text-3xl text-red-400" />,
      title: "Mobile App Development",
      description: "Create powerful, user-friendly mobile applications for iOS and Android platforms. Our mobile development expertise covers native and cross-platform solutions that deliver exceptional performance and engaging user experiences.",
      features: [
        "Native iOS App Development (Swift)",
        "Native Android App Development (Kotlin/Java)",
        "Cross-platform Development (React Native/Flutter)",
        "UI/UX Design & Prototyping",
        "App Store Optimization (ASO)",
        "Push Notifications & Real-time Updates",
        "In-app Purchases & Payment Integration",
        "Social Media Integration",
        "Offline Functionality",
        "App Analytics & Performance Monitoring",
        "Beta Testing & Quality Assurance",
        "App Maintenance & Updates"
      ],
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: <MdComputer className="text-3xl text-teal-400" />,
      title: "IT Hardware & System Sales",
      description: "Comprehensive IT hardware solutions and system sales services. We provide high-quality, custom-configured computer systems, servers, and IT infrastructure components tailored to meet your specific business requirements and budget.",
      features: [
        "Custom Desktop & Laptop Configuration",
        "Server Solutions & Data Centers",
        "Networking Equipment & Infrastructure",
        "Security Systems & Surveillance",
        "Printer & Scanner Solutions",
        "Storage Solutions (NAS/SAN)",
        "UPS & Power Backup Systems",
        "Hardware Installation & Setup",
        "Warranty & Technical Support",
        "Hardware Upgrades & Maintenance",
        "Bulk Procurement & Enterprise Deals",
        "Asset Management & Lifecycle Support"
      ],
      color: "from-teal-500/20 to-cyan-500/20"
    },
    {
      icon: <FaPencilAlt className="text-3xl text-yellow-400" />,
      title: "Digital & Content Services",
      description: "Comprehensive digital marketing and content creation services to enhance your online presence and brand visibility. Our expert team creates engaging content and implements effective digital strategies to drive growth and customer engagement.",
      features: [
        "Content Writing & Copywriting",
        "Search Engine Optimization (SEO)",
        "Social Media Marketing & Management",
        "Pay-Per-Click (PPC) Advertising",
        "Email Marketing Campaigns",
        "Brand Identity & Logo Design",
        "Website Content Management",
        "Blog Writing & Article Creation",
        "Video Content Production",
        "Digital Marketing Strategy",
        "Analytics & Performance Reporting",
        "Online Reputation Management"
      ],
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: <FaTools className="text-3xl text-pink-400" />,
      title: "Consulting & Tech Support",
      description: "Expert IT consulting and comprehensive technical support services to help businesses make informed technology decisions and maintain optimal system performance. Our experienced consultants provide strategic guidance and reliable support solutions.",
      features: [
        "IT Strategy & Technology Roadmap Planning",
        "Digital Transformation Consulting",
        "System Architecture & Design Review",
        "Technology Assessment & Audits",
        "24/7 Technical Support Services",
        "Remote Troubleshooting & Problem Resolution",
        "System Maintenance & Performance Optimization",
        "Data Backup & Recovery Solutions",
        "Cybersecurity Consulting & Implementation",
        "Vendor Selection & Technology Procurement",
        "Staff Training & Knowledge Transfer",
        "Disaster Recovery Planning & Testing"
      ],
      color: "from-pink-500/20 to-rose-500/20"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current processes and identify opportunities for improvement and automation."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive strategy and roadmap tailored to your specific business needs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the solution with agile methodologies, ensuring quality and timely delivery."
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Provide ongoing support and continuous optimization to maximize your ROI."
    }
  ]

  return (
    <div className="min-h-screen bg-[#030C1D] text-white">
      <div className="container mx-auto px-6 py-12">

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Comprehensive technology solutions designed to transform your business operations and drive sustainable growth in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto mb-20 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(index)}
                className={`bg-gradient-to-br ${service.color} p-3 rounded-2xl border transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group cursor-pointer ${selectedService === index
                  ? 'border-orange-500 border-2 shadow-2xl shadow-orange-500/30'
                  : 'border-gray-700/50 hover:border-orange-500/50'
                  }`}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div>
                    {service.icon}
                  </div>
                  <h3 className="text-xm font-semibold bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Service Details Section */}
          <div className="max-w-7xl mx-auto mt-12 shadow-[0_15px_30px_-5px_#001f3f]">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">
                  {services[selectedService].icon}
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
                  {services[selectedService].title}
                </h3>
              </div>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {services[selectedService].description}
              </p>

              <div>
                <h4 className="text-xl font-semibold text-orange-300 mb-4">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
            Our Process
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            We follow a proven methodology to ensure successful project delivery and maximum value for your investment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-white/4 to-white/8 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-amber-500">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">{process.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
            Why Choose Our Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group rounded-xl p-[2px] border border-blue-800/30 bg-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300 h-full transition-all duration-700 hover:transform hover:scale-105">
              <div className="bg-[#030C1D] text-center p-6 rounded-xl shadow-[0_15px_30px_-5px_#001f3f] h-full flex flex-col">
                <div className="bg-gradient-to-r from-white/4 to-white/8 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="text-2xl text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
                  Custom Solutions
                </h3>
                <p className="text-gray-300 flex-grow">
                  Tailored solutions designed specifically for your business needs and industry requirements.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl p-[2px] border border-blue-800/30 bg-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300 h-full transition-all duration-700 hover:transform hover:scale-105">
              <div className="bg-[#030C1D] text-center p-6 rounded-xl shadow-[0_15px_30px_-5px_#001f3f] h-full flex flex-col">
                <div className="bg-gradient-to-r from-white/4 to-white/8 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdAutorenew className="text-2xl text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
                  Scalable & Future-Ready
                </h3>
                <p className="text-gray-300 flex-grow">
                  Solutions that grow with your business and adapt to changing technological landscapes.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl p-[2px] border border-blue-800/30 bg-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300 h-full transition-all duration-700 hover:transform hover:scale-105">
              <div className="bg-[#030C1D] text-center p-6 rounded-xl shadow-[0_10px_30px_-5px_#001f3f] backdrop-blur-md  h-full flex flex-col">
                <div className="bg-gradient-to-r from-white/4 to-white/8 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdIntegrationInstructions className="text-2xl text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
                  Seamless Integration
                </h3>
                <p className="text-gray-300 flex-grow">
                  Smooth integration with your existing systems and workflows without disruption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md p-12 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-orange-800 text-transparent bg-clip-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let&apos;s discuss your project and explore how our services can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="/about"
              className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
