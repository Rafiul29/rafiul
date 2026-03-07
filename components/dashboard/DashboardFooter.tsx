"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function DashboardFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {currentYear} MD Rafiul Islam. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/Rafiul29"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/rafiul-islam-cse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        <Twitter className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                    <Link href="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
