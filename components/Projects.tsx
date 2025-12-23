// Projects.jsx
import React from "react";
import { Github, ExternalLink, Code, Database, Monitor } from "lucide-react";

const projects = [
    {
        title: "ICT Reunion",
        description:
            "Worked in a team project for ICT’s 25-year reunion at Islamic University. Developed frontend and supported backend. Successfully handled over 500 user registrations.",
        image: "/project/project_main.png",
        liveLink: "https://www.ictiu.ac.bd",
        githubLink: "",
        tech: [
            { name: "React", icon: <Code size={20} /> },
            { name: "Tailwind CSS", icon: <Monitor size={20} /> },
            { name: "MongoDB", icon: <Database size={20} /> },
            { name: "Vite", icon: <ExternalLink size={20} /> },
        ],
    },
    {
        title: "LearnQuest",
        description:
            "A full-featured learning platform with authentication, course management, assignments, payments, feedback, notifications, and analytics—built using React and Vite for speed and scalability.",
        image: "/project/project1.png",
        liveLink: "https://assignment-12-by-ashik.netlify.app",
        githubLink: "https://github.com/Ashikur07/e-learning-platform",
        tech: [
            { name: "React", icon: <Code size={20} /> },
            { name: "Tailwind CSS", icon: <Monitor size={20} /> },
            { name: "MongoDB", icon: <Database size={20} /> },
            { name: "Vite", icon: <ExternalLink size={20} /> },
        ],
    },
];

const Projects = () => {
    return (
        <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950 dark:to-slate-950">
            <section id="projects" className="py-16">
                <div className="container mx-auto px-8">
                    <div className="mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 dark:from-blue-500 dark:via-white dark:to-blue-500 bg-clip-text text-transparent">
                            Projects
                        </h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
                            My code babies - they're not perfect, but they're mine and I love them
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative">
                                <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-blue-500/10">
                                    <div className="relative overflow-hidden p-4 pb-0">
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={project.image}
                                                alt={`Screenshot of ${project.title}`}
                                                className="border border-[#b4b0b0] w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                                loading="lazy"
                                            />
                                        </a>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                                            <div className="flex gap-3">
                                                {project.githubLink && (
                                                    <a
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                                                        aria-label="View GitHub Repository"
                                                    >
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                                                    aria-label="View Live Project"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            </div>
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-3 mt-4">
                                            {project.tech.map((tech, idx) => (
                                                <div className="relative" key={idx}>
                                                    <div className="peer p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                                                        {tech.icon}
                                                    </div>
                                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 
                          opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                                                        {tech.name}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
