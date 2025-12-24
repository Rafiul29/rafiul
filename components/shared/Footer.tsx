"use client";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Navigation */}
          <nav className="flex flex-wrap gap-4 justify-center">
            {["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Education", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                {section}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 justify-center scale-90">
            {[
              { href: "https://github.com/Ashikur07", label: "GitHub", icon: "github", color: "text-gray-900 dark:text-white" },
              { href: "https://www.linkedin.com/in/ashik43", label: "LinkedIn", icon: "linkedin", color: "text-[#0077B5]" },
              { href: "https://wa.me/01743439382", label: "WhatsApp", icon: "whatsapp", color: "text-[#25D366]" },
              { href: "mailto:ashik.ict.iu@gmail.com", label: "Email", icon: "mail", color: "text-red-600 dark:text-red-400" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group relative p-3 bg-white dark:bg-gray-900 rounded-lg hover:scale-110 transform transition-transform duration-300 border border-gray-200 dark:border-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className={`relative w-6 h-6 ${link.color}`}>
                  {/* You can replace this with Lucide/React icons */}
                  {link.icon === "github" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  )}
                  {link.icon === "linkedin" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )}
                  {link.icon === "whatsapp" && (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                    </svg>
                  )}
                  {link.icon === "mail" && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Footer Text */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © 2025 Md Rafiul Islam. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
