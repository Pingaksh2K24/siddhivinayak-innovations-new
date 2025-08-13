'use client'

import { School } from 'lucide-react'
import { FaLaptopCode, FaRobot, FaRss, FaMobileAlt, FaTools, FaPencilAlt } from 'react-icons/fa'
import { MdOutlineWeb, MdComputer } from 'react-icons/md'

export default function Services() {
  const services = [
    {
      title: "School ERP",
      description: "A comprehensive ERP solution designed for educational institutions to manage admissions, attendance, fees, exams, and communication efficiently. Our system improves administration and student management.",
      icon: <School size={32} />
    },
    {
      title: "Custom Software Development",
      description: "Tailor-made software solutions built to address specific business needs. Our robust and scalable applications enhance productivity, automation, and operational efficiency.",
      icon: <FaLaptopCode size={32} />
    },
    {
      title: "Web Development",
      description: "We create modern, responsive, and high-performance websites and web applications. Our UI/UX-focused solutions ensure a seamless and engaging user experience.",
      icon: <MdOutlineWeb size={32} />
    },
    {
      title: "Farming & Commercial Robotics Solutions",
      description: "At Sidhhivinayak Technolabs, we deliver smart, customized robotic solutions for agriculture and commercial use designed to automate manual tasks and enhance productivity, precision, and efficiency.",
      icon: <FaRobot size={32} />
    },
    {
      title: "RFID Solutions",
      description: "Offering advanced RFID-based tracking and security solutions for attendance, asset management, and access control. Our systems ensure accuracy, efficiency, and automation.",
      icon: <FaRss size={32} />
    },
    {
      title: "Mobile App Development",
      description: "We design and develop innovative Android & iOS applications to enhance business operations and customer engagement. Our mobile solutions are scalable, secure, and user-friendly.",
      icon: <FaMobileAlt size={32} />
    },
    {
      title: "IT Hardware & System Sales",
      description: "Providing high-quality, custom-configured computer systems, servers, and IT infrastructure solutions tailored to business needs. Our reliable hardware ensures seamless performance and efficiency.",
      icon: <MdComputer size={32} />
    },
    {
      title: "Digital & Content Services",
      description: "We offer professional content writing, SEO, and digital marketing services to enhance online presence and brand visibility. Our solutions ensure engaging and impactful communication for businesses.",
      icon: <FaPencilAlt size={32} />
    },
    {
      title: "Consulting & Tech Support",
      description: "We provide expert IT consulting to help businesses choose the right technology solutions. Our dedicated tech support team ensures smooth operations with troubleshooting, maintenance, and ongoing assistance.",
      icon: <FaTools size={32} />
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-orange-400">Services</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive technology solutions designed to transform your business operations and drive growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-[0_15px_30px_-5px_#001f3f] backdrop-blur-md hover:border-orange-500/50 hover:border-2 transition-all duration-500 hover:transform hover:scale-[1.02] hover:-translate-y-3 hover:shadow-[0_15px_30px_-5px_rgba(245,158,11,0.5)] group cursor-pointer"
            style={{
              background: '#030C1D',
              transform: 'perspective(1000px) rotateX(5deg) rotateY(-2deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-orange-400 mb-3">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-orange-400">{service.title}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
            <div className="mt-6">
              <button className="text-orange-400 hover:text-orange-300 font-medium text-sm flex items-center gap-2 transition-colors">
                Learn More
                <span className="text-xs">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
