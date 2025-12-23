"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl bg-transparent">
            <div className="flex items-center justify-between h-12 px-4">

                {/* Logo */}
                <div className="cursor-pointer">
                    <Image
                        src="/assets/favicon.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="h-10 w-auto"
                        priority
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-1 justify-center items-center space-x-5 lg:ml-10">
                    {[
                        "home",
                        "about",
                        "skills",
                        "experience",
                        "projects",
                        "certifications",
                        "education",
                        "contact",
                    ].map((item) => (
                        <Link
                            key={item}
                            href={`#${item}`}
                            className="relative text-sm text-gray-600 dark:text-gray-300
                         hover:text-blue-600 dark:hover:text-blue-400
                         transition-all hover:scale-105"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                    ))}
                </div>

                {/* Right Section */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="https://github.com/Ashikur07"
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                       bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        GitHub
                    </Link>

                    {/* Theme Button */}

                    <ThemeToggle />


                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        aria-label="Toggle menu"
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                    >
                        ☰
                    </button>
                </div>

            </div>
        </nav>
    );
}
