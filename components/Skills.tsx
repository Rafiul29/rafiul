const skills = [
    {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        color: "#e34f26",
    },
    {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        color: "#1572b6",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        color: "#f7df1e",
    },
    {
        name: "React",
        link: "https://react.dev",
        color: "#61dafb",
    },
    {
        name: "Next.js",
        link: "https://nextjs.org",
        color: "#000000",
    },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com",
        color: "#38bdf8",
    },
];

export default function Skills() {
    return (
        <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950 dark:to-slate-950">
            <section id="skills">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 dark:from-blue-500 dark:via-white dark:to-blue-500 bg-clip-text text-transparent">
                            Skills
                        </h2>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            The tech stack I've been collecting like Pokémon cards 🎯
                        </p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mt-4"><div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div><div className="w-2 h-2 rounded-full bg-blue-600"></div><div className="w-1 h-1 rounded-full bg-gray-600"></div><div className="w-2 h-2 rounded-full bg-blue-600"></div><div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div></div>

                    {/* Skills Grid */}
                    <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="w-[calc((100%-2rem)/3)] sm:w-[calc((100%-4.5rem)/4)] md:w-[calc((100%-6rem)/6)]"
                                style={{ opacity: 1, transform: "translateY(0)" }}
                            >
                                <a
                                    href={skill.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    style={{ ["--glow-color" as any]: skill.color }}
                                >
                                    {/* Glow */}
                                    <span
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition"
                                        style={{ backgroundColor: skill.color }}
                                    />

                                    {/* Icon Placeholder */}
                                    <div
                                        className="w-12 h-12 rounded-full mb-2"
                                        style={{ backgroundColor: skill.color }}
                                    />

                                    <span className="relative text-sm font-semibold text-gray-800 dark:text-gray-200">
                                        {skill.name}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
