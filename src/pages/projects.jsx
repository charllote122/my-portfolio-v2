const Projects = () => {
    const projects = [
        {
            title: "Productify",
            description: "Productify is a clean and responsive multipage landing website for a SaaS product. It’s built using only HTML5 and CSS3, featuring a modern layout, smooth hover effects, and fully responsive design across devices.",
            link: "https://github.com/charllote122/productify",
        },
        {
            title: "To-Do App",
            description: "A simple task manager built with React and Tailwind CSS.It allows users to add, mark complete, delete, and filter tasks(All, Active, Completed).",
            link: "https://github.com/charllote122/todoApp",
        },
        {
            title: "Digital Clock",
            description: "A beautiful and simple digital clock using HTML, CSS, and JavaScript.",
            link: "https://github.com/charllote122/DigitalClock",
        },
        {
            title: "Calculator",
            description: "A basic calculator with a clean UI built using vanilla JavaScript.",
            link: "https://github.com/charllote122/calculator",
        },
        {
            title: "Compound Interest Calculator",
            description: "Calculates compound interest with user inputs and displays results.",
            link: "https://github.com/charllote122/CompoundInterestCalc",
        },
    ];

    return (
        <div className="min-h-screen px-4 py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 border rounded-xl shadow hover:shadow-md hover:bg-blue-50 transition"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
  