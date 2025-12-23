const experiences = [
  {
    title: "Webmaster",
    company: "IEEE IU Student Branch",
    period: "Sep 2025 - Present",
    description: [
      "Serving as the Webmaster of IEEE IU Student Branch at Islamic University, Bangladesh.",
      "Responsible for maintaining and improving the branch’s official website, managing digital content.",
      "Ensuring seamless online communication for events and updates.",
    ],
    skills: ["Next.js", "React", "Tailwind CSS", "Web Management", "Content Optimization"],
    color: "blue",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-blue-600 dark:text-blue-400"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    title: "Web Developer (Team Project)",
    company: "ICT Department, Islamic University",
    period: "Mar 2025 - May 2025",
    description: [
      "Built the official website for the ICT Department’s 25-year Silver Jubilee celebration.",
      "Led front-end and contributed to backend features including real-time registration handling.",
      "Project had 500+ registrations, completed by 4-member team, deployed with SSL & payment integration.",
    ],
    skills: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "Vercel", "SSL Payment"],
    color: "blue",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-blue-600 dark:text-blue-400"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    title: "Lab Assistant - Frontend Development",
    company: "EDGE Program, ICT Division",
    period: "May 2024 - Feb 2025",
    description: [
      "Worked as a lab assistant in the EDGE Program held at Islamic University, ICT Department.",
      "Program sponsored by ICT Division, Digital Bangladesh, Bangladesh Computer Council (BCC), and EDGE.",
      "Provided hands-on training in HTML, CSS, Tailwind, JavaScript, and React, with mentoring.",
    ],
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Mentoring", "Teaching"],
    color: "blue",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-blue-600 dark:text-blue-400"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
];

export default function Experience() {
  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950 dark:to-slate-950">
      <section id="experience">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 dark:from-blue-500 dark:via-white dark:to-blue-500 bg-clip-text text-transparent leading-tight tracking-tight">
              Experience
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-3xl font-medium mx-auto">
              My journey as a passionate developer solving real-world problems
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-400 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 opacity-80" />
              <div className="w-1 h-1 rounded-full bg-gray-600 dark:bg-gray-300 opacity-60" />
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 opacity-80" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-400 to-transparent" />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="opacity-100 transform translate-y-0 transition duration-500">
                <div className="relative group pl-6 sm:pl-10">
                  <div
                    className={`absolute left-[-16px] top-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-gray-200 dark:border-gray-800`}
                  />
                  <div className="relative bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl">
                    <div className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">{exp.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                          <p className="text-base text-blue-600 dark:text-blue-400">{exp.company}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                        </div>
                      </div>
                      <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm font-medium bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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
}
