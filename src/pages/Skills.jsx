import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-2xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-2xl" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-500 text-2xl" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400 text-2xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-2xl" /> },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-2xl" /> },
    ];

    return (
        <div className="min-h-screen px-4 py-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">My Skills</h2>
            <p className="text-center text-gray-600 mb-8">
                Here are some of the technologies I've worked with:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-800 font-medium">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="bg-gray-100 px-4 py-6 rounded text-center shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-200 ease-in-out flex flex-col items-center justify-center"
                    >
                        {skill.icon}
                        <span className="mt-2">{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
