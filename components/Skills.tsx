"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SiHtml5, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiGraphql, SiMongodb, SiPrisma, SiCplusplus, SiGit, SiGithub, SiPostman, SiVite, SiVercel, SiPhp, SiLaravel, SiDjango, SiMysql, SiSqlite, SiNetlify, SiRender, SiCpanel } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaAws, FaWindows, FaLinux } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { SkillCard } from "./ui/SkillCard";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss } from "react-icons/fa6";
import { Layout, Server, Database, Settings } from "lucide-react";
import { motion, Variants } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        icon: Layout,
        color: "#61dafb",
        skills: [
            { name: "HTML", icon: SiHtml5, color: "#e34f26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { name: "CSS", icon: FaCss, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178c6", url: "https://www.typescriptlang.org/" },
            { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000", url: "https://nextjs.org/" },
            { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8", url: "https://tailwindcss.com/" },
            { name: "Redux", icon: SiRedux, color: "#764abc", url: "https://redux.js.org/" },
            { name: "Vite", icon: SiVite, color: "#646cff", url: "https://vitejs.dev/" },
        ]
    },
    {
        title: "Backend",
        icon: Server,
        color: "#68a063",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "#68a063", url: "https://nodejs.org/" },
            { name: "Express.js", icon: SiExpress, color: "#68a063", url: "https://expressjs.com/" },
            { name: "PHP", icon: SiPhp, color: "#777BB4", url: "https://www.php.net/" },
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20", url: "https://laravel.com/" },
            { name: "Python", icon: FaPython, color: "#306998", url: "https://www.python.org/" },
            { name: "DJango", icon: SiDjango, color: "#092E20", url: "https://www.djangoproject.com/" },
            { name: "C++", icon: SiCplusplus, color: "#00599c", url: "https://cplusplus.com/" },
        ]
    },
    {
        title: "Database",
        icon: Database,
        color: "#4169E1",
        skills: [
            { name: "SQL", icon: SiSqlite, color: "#00758F", url: "https://en.wikipedia.org/wiki/SQL" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1", url: "https://www.mysql.com/" },
            { name: "Postgresql", icon: BiLogoPostgresql, color: "#4169E1", url: "https://www.postgresql.org/" },
            { name: "MongoDB", icon: SiMongodb, color: "#47a248", url: "https://www.mongodb.com/" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748", url: "https://www.prisma.io/" },
            { name: "Firebase", icon: IoLogoFirebase, color: "#ffca28", url: "https://firebase.google.com/" },
        ]
    },
    {
        title: "Tools & Others",
        icon: Settings,
        color: "#f34f29",
        skills: [
            { name: "VS Code", icon: VscVscode, color: "#007acc", url: "https://code.visualstudio.com/" },
            { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
            { name: "GitHub", icon: SiGithub, color: "#000000", url: "https://github.com/" },
            { name: "Postman", icon: SiPostman, color: "#ff6c37", url: "https://www.postman.com/" },
            { name: "cPanel", icon: SiCpanel, color: "#FF6C2C", url: "https://cpanel.net/" },
            { name: "Vercel", icon: SiVercel, color: "#000000", url: "https://vercel.com/" },
            { name: "Netlify", icon: SiNetlify, color: "#00C7B7", url: "https://www.netlify.com/" },
            { name: "Render", icon: SiRender, color: "#46E3B7", url: "https://render.com/" },
            { name: "Windows", icon: FaWindows, color: "#0078D6", url: "https://www.microsoft.com/windows" },
            { name: "Linux", icon: FaLinux, color: "#FCC624", url: "https://www.kernel.org/" },
        ]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

export function Skills() {
    return (
        <SectionBackground>
            <section id="skills" className="py-24 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <SectionTitle subtitle="The tech stack I've been collecting like Pokémon cards - gotta catch 'em all! 🎯">
                        Skills & Expertise
                    </SectionTitle>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
                    >
                        {skillCategories.map((category) => (
                            <motion.div
                                key={category.title}
                                variants={itemVariants}
                                className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-2xl border border-white dark:border-gray-800/50 rounded-[2rem] p-5 shadow-2xl shadow-gray-200/50 dark:shadow-none transition-all duration-500 group relative overflow-hidden"
                            >
                                {/* Subtle Background Category Color Glow */}
                                <div
                                    className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                                    style={{ backgroundColor: category.color }}
                                />

                                {/* Category Header */}
                                <div className="flex items-center gap-6 mb-12">
                                    <div
                                        className="w-16 h-16 flex items-center justify-center rounded-xl shadow-xl group-hover:scale-110 transition-transform duration-700 relative overflow-hidden"
                                        style={{ backgroundColor: `${category.color}10` }}
                                    >
                                        <category.icon size={32} color={category.color} strokeWidth={1.5} className="relative z-10" />
                                        <div
                                            className="absolute inset-0 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                                            style={{ backgroundColor: category.color }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white mb-2">
                                            {category.title}
                                        </h3>
                                        <div
                                            className="h-1.5 w-16 rounded-full transition-all duration-500 group-hover:w-24"
                                            style={{ backgroundColor: category.color }}
                                        />
                                    </div>
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5">
                                    {category.skills.map((tech) => (
                                        <SkillCard
                                            key={tech.name}
                                            name={tech.name}
                                            icon={tech.icon}
                                            color={tech.color}
                                            url={tech.url}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </SectionBackground>
    );
}