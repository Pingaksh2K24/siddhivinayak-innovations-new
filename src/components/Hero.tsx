'use client'
import CountUp from "react-countup";

export default function Hero() {
  const metrics = [
    { label: "Projects Delivered", value: 3, suffix: "+" },
    { label: "Happy Clients", value: 3, suffix: "+" },
    { label: "Years Experience", value: 1, suffix: "+" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#030C1D]/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Empowering Businesses with
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text">
            Smart Technology Solutions
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          From School ERP to Robotics and Web Development we craft customized,
          scalable, and future-ready IT solutions to streamline operations,
          boost productivity, and drive growth.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Get Started
          </button>
          <button className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Book Demo
          </button>
        </div>

        {/* Metrics Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg shadow-md w-48"
            >
              <h3 className="text-4xl font-bold text-orange-400">
                <CountUp end={item.value} duration={5} />{item.suffix}
              </h3>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
