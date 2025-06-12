import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
];

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header className="bg-white shadow-md px-4 py-3 fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">Web Developer</div>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-medium border-b-2 border-blue-600 pb-1 transition"
                                    : "text-gray-700 hover:text-blue-600 transition"
                            }
                            end={link.path === "/"}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-xl font-bold text-blue-600">Menu</span>
                    <button onClick={() => setSidebarOpen(false)}>
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-medium"
                                    : "text-gray-700 hover:text-blue-600 transition"
                            }
                            end={link.path === "/"}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
