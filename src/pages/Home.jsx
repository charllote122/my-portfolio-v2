import { NavLink } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png"; // <-- Correct import

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50 pt-24">
            <img
                src={avatar}
                alt="Charlotte"
                className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover"
            />

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-blue-600"
            >
                Hi, I'm Sofi
            </motion.h1>

            <p className="mt-4 text-gray-600 text-lg max-w-xl">
                A passionate frontend developer focused on creating clean, responsive, and user-friendly interfaces using React.js and Tailwind CSS.
            </p>

            <div className="mt-3 text-sm text-gray-500">
                React.js | Tailwind CSS | JavaScript | UI/UX | Responsive Design
            </div>

            <div className="mt-6 flex space-x-4">
                <NavLink
                    to="/projects"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    View Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
                >
                    Contact Me
                </NavLink>
            </div>

            <div className="mt-6 flex space-x-4">
                <a href="https://github.com/charllote122" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 text-gray-700 hover:text-black" />
                </a>
                <a href="http://www.linkedin.com/in/sofi-chemjor-490623339" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                </a>
                <a href="mailto:sofichemjor@gmail.com">
                    <Mail className="w-6 h-6 text-gray-700 hover:text-red-600" />
                </a>
            </div>
        </div>
    );
};

export default Home;
