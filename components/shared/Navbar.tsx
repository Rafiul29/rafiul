"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../../hooks/ThemeToggle";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useAnimatedLogo } from "@/hooks/useAnimatedLogo";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    // const { isDark, setIsDark } = useTheme();
    const { isLogoAnimating, handleLogoClick } = useAnimatedLogo();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            { threshold: 0.3 } // Adjust threshold as needed
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        // { href: '#github', label: 'GitHub' },
        // { href: '#leetcode', label: 'Leetcode' },
        // { href: '#badges', label: 'Badges' },
        // { href: '#blogs', label: 'Blogs' },
        { href: '#experience', label: 'Experience' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#education', label: 'Education' },
    ];


    return (
        <nav
            className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl
                    ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md outline outline-1 outline-blue-600' : 'bg-transparent'}`}
        >
            <div className="flex items-center justify-between h-12 px-4">
                {/* Logo */}
                <div className="cursor-pointer  text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105" onClick={handleLogoClick}>
                    {/* <img src="/assets/favicon.png" alt="Logo" className="h-8 w-auto" /> */}
                    Md Rafiul Islam
                </div>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-5 items-center relative">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
                        >
                            {link.label}
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400"
                                    transition={{ type: 'spring', stiffness: 500, damping: 20 }} // Faster animation
                                />
                            )}
                        </Link>
                    ))}

                    <ThemeToggle />
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
                    >
                        Request a Project
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden items-center space-x-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {
                isOpen && (
                    <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 rounded-b-xl shadow-lg">
                        <div className="px-4 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-3 py-2 rounded-md text-sm text-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                                    onClick={() => {
                                        setIsOpen(false);
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Request a Project
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Link>
                        </div>
                    </div>
                )
            }
        </nav >
        // <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl bg-transparent">
        //     <div className="flex items-center justify-between h-12 px-4">

        //         {/* Logo */}
        //         <div className="cursor-pointer">
        //             <Image
        //                 src="/assets/favicon.png"
        //                 alt="Logo"
        //                 width={40}
        //                 height={40}
        //                 className="h-10 w-auto"
        //                 priority
        //             />
        //         </div>

        //         {/* Desktop Menu */}
        //         <div className="hidden lg:flex flex-1 justify-center items-center space-x-5 lg:ml-10">
        //             {[
        //                 "home",
        //                 "about",
        //                 "skills",
        //                 "experience",
        //                 "projects",
        //                 "certifications",
        //                 "education",
        //                 "contact",
        //             ].map((item) => (
        //                 <Link
        //                     key={item}
        //                     href={`#${item}`}
        //                     className="relative text-sm text-gray-600 dark:text-gray-300
        //                  hover:text-blue-600 dark:hover:text-blue-400
        //                  transition-all hover:scale-105"
        //                 >
        //                     {item.charAt(0).toUpperCase() + item.slice(1)}
        //                 </Link>
        //             ))}
        //         </div>

        //         {/* Right Section */}
        //         <div className="hidden lg:flex items-center gap-3">
        //             <Link
        //                 href="https://github.com/Ashikur07"
        //                 target="_blank"
        //                 className="flex items-center gap-2 px-3 py-1.5 rounded-lg
        //                bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
        //             >
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
        //                 GitHub
        //             </Link>

        //             {/* Theme Button */}

        //             <ThemeToggle />


        //         </div>

        //         {/* Mobile Menu Button */}
        //         <div className="flex lg:hidden">
        //             <button
        //                 aria-label="Toggle menu"
        //                 className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
        //             >
        //                 ☰
        //             </button>
        //         </div>

        //     </div>
        // </nav>
    );
}
