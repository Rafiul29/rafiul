"use client";

import { Menu, Search, Bell } from "lucide-react";
import ThemeToggle from "../../hooks/ThemeToggle";

interface DashboardHeaderProps {
    onMenuClick: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 lg:px-8">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                >
                    <Menu className="w-6 h-6" />
                </button>

                <div className="relative hidden md:block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="w-4 h-4 text-gray-400" />
                    </span>
                    <input
                        type="text"
                        className="block w-full py-2 pl-10 pr-3 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:text-gray-100"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                </button>

                <ThemeToggle />

                <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
                    <div className="hidden sm:block text-right">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            Rafiul Islam
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Admin
                        </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-blue-50 dark:ring-gray-800">
                        RI
                    </div>
                </div>
            </div>
        </header>
    );
}
