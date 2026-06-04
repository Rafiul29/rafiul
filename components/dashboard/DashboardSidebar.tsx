"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Briefcase,
    GraduationCap,
    Settings,
    X,
    User,
    Projector,
    Code2,
    ChevronLeft,
    ChevronRight,
    LogOut,
    FileUser,
    FileText,
    Mail
} from "lucide-react";


import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const sidebarLinks = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/projects", label: "Projects", icon: Projector },
    { href: "/dashboard/experience", label: "Experience", icon: Briefcase },
    { href: "/dashboard/education", label: "Education", icon: GraduationCap },
    { href: "/dashboard/blogs", label: "Blogs", icon: FileText },
    { href: "/dashboard/skills", label: "Skills", icon: Code2 },
    { href: "/dashboard/resumes", label: "Resumes/CVs", icon: FileUser },
    { href: "/dashboard/cover-letters", label: "Cover Letters", icon: FileText },
    { href: "/dashboard/email-templates", label: "Email Templates", icon: Mail },
    { href: "/dashboard/profile", label: "Profile", icon: User },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },

];

interface DashboardSidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
}

export function DashboardSidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }: DashboardSidebarProps) {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    };

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full transform bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } ${isCollapsed ? "w-20" : "w-64"}`}
            >
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
                    {!isCollapsed && (
                        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400 truncate ml-2">
                            Portfolio CMS
                        </Link>
                    )}
                    {isCollapsed && (
                        <div className="mx-auto text-blue-600 dark:text-blue-400 font-bold text-xl">P</div>
                    )}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Desktop Collapse Toggle */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden lg:flex items-center justify-center p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg absolute -right-3 top-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
                    >
                        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                    </button>
                </div>

                <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
                    {sidebarLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors group relative ${isActive
                                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                                    } ${isCollapsed ? "justify-center px-2" : ""}`}
                            >
                                <Icon className="w-5 h-5 min-w-[20px]" />
                                {!isCollapsed && <span>{link.label}</span>}
                                {isCollapsed && (
                                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                                        {link.label}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                    <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : "px-3 py-2"}`}>
                        <div className="w-8 h-8 min-w-[32px] rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                            <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        {!isCollapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                    Rafiul Islam
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                    Admin
                                </p>
                            </div>
                        )}
                        {!isCollapsed && (
                            <button
                                onClick={handleSignOut}
                                className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                                title="Sign Out"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                    {isCollapsed && (
                        <button
                            onClick={handleSignOut}
                            className="mt-2 w-full flex justify-center p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                            title="Sign Out"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </aside>
        </>
    );
}
