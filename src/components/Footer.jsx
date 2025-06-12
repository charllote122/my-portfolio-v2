const Footer = () => {
    return (
        <footer className="bg-white shadow-md px-4 py-3">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p className="text-center md:text-left">
                    © {new Date().getFullYear()} Web Developer. All rights reserved.
                </p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a
                        href="https://github.com/charllote122"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="/contact"
                        className="hover:text-blue-600 transition"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
  