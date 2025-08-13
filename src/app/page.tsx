import Hero from "../components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStacks";

import { FaStar, FaRocket } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { MdSupportAgent } from 'react-icons/md'
import { Target, Eye, Lightbulb } from "lucide-react";

const items = [
  {
    title: "Our Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving technological landscape.",
    icon: <Target size={50} strokeWidth={1.5} className="text-orange-400" />
  },
  {
    title: "Our Vision",
    description: "To be the leading technology partner that bridges the gap between complex business challenges and simple, scalable solutions through innovation and expertise.",
    icon: <Eye size={50} strokeWidth={1.5} className="text-orange-400" />
  },
  {
    title: "Our Approach",
    description: "We combine deep technical expertise with creative problem-solving to deliver custom solutions that are not just functional, but transformative for your business operations.",
    icon: <Lightbulb size={50} strokeWidth={1.5} className="text-orange-400" />
  }
];



export default function Home() {
  return (
    <div className="min-h-screen text-white bg-[#030C1D]">
      <Hero />
      {/* Our Foundation */}
      <section className="container mx-auto px-6 py-20 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-orange-400">Foundation</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            At Siddhivinayak Technolabs, we are a team of passionate innovators, developers, and technology enthusiasts dedicated to transforming businesses through cutting-edge solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {items.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-white/4 to-white/8 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">Why Choose Us?</h3>
            <p className="text-gray-300 leading-relaxed text-lg text-justify">
              At Siddhivinayak Technolabs, we go beyond just delivering software we craft intelligent, scalable, and customized technology solutions that solve real-world problems. Whether it&apos;s building a powerful School ERP, developing a seamless mobile app, implementing RFID systems, or deploying advanced robotic solutions for farming and industry our multidisciplinary team brings expertise, innovation, and commitment to every project. With a strong focus on user experience, data security, and long-term support, we ensure our clients not only get what they need today but are also ready for tomorrow. Partner with us for tech that performs, evolves, and empowers.
            </p>
          </div>
        </div>
      </section>

      <Services />

      {/* Statistics Section */}
      {/* Statistics Section with Background Video */}
      <section className="relative container mx-auto px-6 py-10 z-10">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero3.mp4" type="video/mp4" />
          <source src="/hero3.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-[#030C1D]/70 z-0 rounded-xl" />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <FaRocket className="text-orange-500" size={36} />, count: "3+", label: "Projects Delivered" },
            { icon: <HiUserGroup className="text-green-500" size={36} />, count: "3+", label: "Happy Clients" },
            { icon: <MdSupportAgent className="text-blue-500" size={36} />, count: "24/7", label: "Support Available" },
            { icon: <FaStar className="text-yellow-400" size={36} />, count: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-[#0B152A]/20 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">{stat.count}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies We Work With */}
      <TechStack />

      {/* Trusted by Our Clients */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Our <span className="text-orange-400">Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear what our satisfied clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Client Review 1 */}
          <div className="backdrop-blur-sm rounded-2xl p-10 border border-blue-800/30 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:-translate-y-3 group min-h-[420px] flex flex-col"
            style={{
              background: 'linear-gradient(145deg, #030C1D 0%, #0B152A 50%, #030C1D 100%)',
              boxShadow: '0 20px 40px -10px #001f3f, inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
            <div className="flex items-start mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-1">Er. Aditya Sapkal</h4>
                <p className="text-orange-400 font-semibold mb-1">Academic Director</p>
                <p className="text-gray-400 text-sm">Bright Path Academy</p>
                <p className="text-gray-500 text-xs mt-1">Khamgaon, Maharashtra</p>
              </div>
            </div>

            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-xl mr-1">⭐</span>
              ))}
              <span className="text-gray-400 ml-2 text-sm">(5.0/5.0)</span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <blockquote className="text-gray-300 leading-relaxed text-base italic mb-6">
                {"Siddhivinayak Technolabs delivered an exceptional School ERP system that completely transformed our educational institution&apos;s operations. Their attention to detail, innovative approach, and ongoing technical support has been absolutely outstanding. The team&apos;s professionalism and commitment to excellence is unmatched."}
              </blockquote>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-xs text-gray-500">Project: EduVerse ERP</p>
              </div>
            </div>
          </div>

          {/* Client Review 2 */}
          <div className="backdrop-blur-sm rounded-2xl p-10 border border-blue-800/30 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:-translate-y-3 group min-h-[420px] flex flex-col"
            style={{
              background: 'linear-gradient(145deg, #030C1D 0%, #0B152A 50%, #030C1D 100%)',
              boxShadow: '0 20px 40px -10px #001f3f, inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
            <div className="flex items-start mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-1">Prof. Ajay Wankhade</h4>
                <p className="text-orange-400 font-semibold mb-1">Founder & Owner</p>
                <p className="text-gray-400 text-sm">Sidhivinayak Coaching Classes</p>
                <p className="text-gray-500 text-xs mt-1">Jalgaon Jamod, Maharashtra</p>
              </div>
            </div>

            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-xl mr-1">⭐</span>
              ))}
              <span className="text-gray-400 ml-2 text-sm">(5.0/5.0)</span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <blockquote className="text-gray-300 leading-relaxed text-base italic mb-6">
                {"The robotic farming solutions provided by Siddhivinayak have completely revolutionized our agricultural processes and productivity. Their innovative approach, cutting-edge technology implementation, and deep technical expertise exceeded our expectations in every possible way."}
              </blockquote>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-xs text-gray-500">Project: EduVerse ERP</p>
              </div>
            </div>
          </div>

          {/* Client Review 3 */}
          <div className="backdrop-blur-sm rounded-2xl p-10 border border-blue-800/30 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:-translate-y-3 group min-h-[420px] flex flex-col"
            style={{
              background: 'linear-gradient(145deg, #030C1D 0%, #0B152A 50%, #030C1D 100%)',
              boxShadow: '0 20px 40px -10px #001f3f, inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
            <div className="flex items-start mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-1">prof. Mangesh Umarkar</h4>
                <p className="text-orange-400 font-semibold mb-1">Founder & Owner</p>
                <p className="text-gray-400 text-sm">Umarkar Science classes</p>
                <p className="text-gray-500 text-xs mt-1">Jalgaon Jamod, Maharashtra</p>
              </div>
            </div>

            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-xl mr-1">⭐</span>
              ))}
              <span className="text-gray-400 ml-2 text-sm">(5.0/5.0)</span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <blockquote className="text-gray-300 leading-relaxed text-base italic mb-6">
                {"We needed a customized student management system, and Sidhhivinayak Technolabs delivered exactly what we were looking for. Their team listens carefully, responds quickly, and delivers solutions that actually work. We can now send real-time updates to parents, which has increased trust in our institute."}
              </blockquote>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-xs text-gray-500">Project: EduVerse ERP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
