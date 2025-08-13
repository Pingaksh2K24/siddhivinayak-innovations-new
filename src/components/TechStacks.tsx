import { SiReact, SiNextdotjs, SiElectron, SiJavascript, SiNodedotjs, SiDotnet, SiMongodb, SiMysql } from 'react-icons/si'
import { FaRobot } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'

const technologies = [
    {
        name: 'React.js',
        icon: <SiReact className="text-sky-400" size={36} />,
        description: 'Frontend Library',
        iconStyle: 'text-3xl',
        bgColor: 'bg-gradient-to-br from-blue-950 to-blue-400',
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs className="text-black dark:text-white" size={36} />,
        description: 'React Framework',
        iconStyle: 'text-3xl font-bold text-orange-400',
        bgColor: 'bg-gradient-to-br from-gray-800 to-gray-600',
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript className="text-yellow-400" size={36} />,
        description: 'Programming Language',
        iconStyle: 'text-3xl font-bold text-yellow-400',
        bgColor: 'bg-gradient-to-br from-yellow-900 to-yellow-500',
    },
    {
        name: 'Node.js',
        icon: <SiNodedotjs className="text-green-500" size={36} />,
        description: 'Backend Runtime',
        iconStyle: 'text-3xl text-green-400',
        bgColor: 'bg-gradient-to-br from-green-950 to-green-500',
    },
    {
        name: '.NET',
        icon: <SiDotnet className="text-purple-500" size={36} />,
        description: 'Microsoft Framework',
        iconStyle: 'text-2xl font-bold text-purple-400',
        bgColor: 'bg-gradient-to-br <from-violet-95></from-violet-95>0 to-violet-500',
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb className="text-green-700" size={36} />,
        description: 'NoSQL Database',
        iconStyle: 'text-3xl text-green-500',
        bgColor: 'bg-gradient-to-br from-green-950 to-lime-500',
    },
    {
        name: 'SQL',
        icon: <SiMysql className="text-sky-400" size={36} />,
        description: 'Database Language',
        iconStyle: 'text-3xl',
        bgColor: 'bg-gradient-to-br from-blue-950 to-amber-500',
    },
    {
        name: 'AI/ML',
        icon: <GiArtificialIntelligence className="text-pink-500" size={36} />,
        description: 'Machine Learning',
        iconStyle: 'text-3xl',
        bgColor: 'bg-gradient-to-br from-pink-950 to-indigo-500',
    },
    {
        name: 'Robotics',
        icon: <FaRobot className="text-gray-400" size={36} />,
        description: 'Automation Systems',
        iconStyle: 'text-3xl',
        bgColor: 'bg-gradient-to-br from-gray-950 to-emerald-500',
    },
    {
        name: 'Electron.js',
        icon: <SiElectron className="text-blue-400" size={36} />,
        description: 'Desktop Apps',
        iconStyle: 'text-3xl text-blue-400',
        bgColor: 'bg-gradient-to-br from-cyan-950 to-teal-500',
    },
];



export default function TechStack() {
    return (
        <section className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Technologies We <span className="text-orange-400">Work With</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Cutting-edge tools and frameworks that power our innovative solutions
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {technologies.map((tech, index) => (
                    <div key={index} className="group">
                        <div
                            className={`backdrop-blur-sm rounded-xl p-4 transition-all duration-600 transform hover:scale-105 hover:border-orange-500/100 text-center flex items-center justify-center ${tech.bgColor}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <span className="flip-icon">{tech.icon}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
