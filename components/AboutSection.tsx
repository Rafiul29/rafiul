"use client";

export default function AboutSection() {
  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950 dark:to-slate-950">
      <section id="about">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 dark:from-blue-500 dark:via-white dark:to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              A self-motivated developer who loves building real things and constantly learning
            </p>

            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <div className="w-1 h-1 rounded-full bg-gray-600" />
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
            </div>
          </div>

          {/* Intro */}
          <div className="text-center max-w-5xl mx-auto mb-10">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Hello! 👋 I&apos;m{" "}
              <span className="text-blue-600 font-semibold">
                Md. Ashik Ali
              </span>
              , a B.Sc. Engineering student in ICT at Islamic University. I enjoy
              building responsive and functional websites and improving every day
              as a developer.
            </p>

            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow text-sm sm:text-base">
              🚀 Turning curiosity into code and code into real-world solutions
            </span>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

            {[
              {
                title: "Who I Am",
                color: "bg-blue-600",
                items: [
                  "MERN Stack developer with a love for clean UI.",
                  "React and Next.js are my comfort zone.",
                  "I keep learning and improving every day.",
                ],
              },
              {
                title: "What I Do",
                color: "bg-purple-600",
                items: [
                  "Build responsive apps with React & Next.js.",
                  "Use backend tools like Node, MongoDB, Firebase.",
                  "Create projects to sharpen skills.",
                ],
              },
              {
                title: "My Goals",
                color: "bg-green-600",
                items: [
                  "Become a full-stack developer with impact.",
                  "Work with strong teams on real projects.",
                  "Get a dev job and grow step by step.",
                ],
              },
              {
                title: "My Philosophy",
                color: "bg-orange-600",
                items: [
                  "Code should solve problems.",
                  "Keep things simple and maintainable.",
                  "Learning never stops in tech.",
                ],
              },
            ].map((card, i) => (
              <div key={i} className="relative group">
                <div
                  className={`absolute inset-0 ${card.color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition`}
                />
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    {card.title}
                  </h3>
                  <ul className="list-disc pl-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 space-y-1">
                    {card.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
