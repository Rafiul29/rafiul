import { SectionBackground } from "./ui/SectionBackground";
import { SectionTitle } from "./ui/SectionTitle";
import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "Solution architect focused on scalable systems.",
      "Specialized in multi-tenant SaaS platforms.",
      "Bridging robust backend with fluid UI/UX.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "Technical Expertise",
    description: [
      "Laravel, Node/Express, and Django expert.",
      "Type-safe UIs with Next.js and React.",
      "Advanced DB management with Prisma.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Mission",
    description: [
      "Solving business and educational challenges.",
      "Optimizing for high-traffic enterprise data.",
      "Innovating with AI and modern architecture.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "Engineering Mindset",
    description: [
      "Focus on clean and maintainable code.",
      "Prioritizing architectural simplicity.",
      "Enhancing security and user experience.",
    ],
    color: "bg-orange-600",
  },
];

export default function AboutSection() {
  return (
    <SectionBackground>
      <section id="about" className="py-12">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Engineering high-performance solutions with a versatile modern stack">
            About Me
          </SectionTitle>

          <div className="max-w-5xl mx-auto mb-16 text-center">
            {/* About Description Section */}
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-12">
              <p>
                As a <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Developer</span>,
                I thrive at the intersection of complex logic and seamless user experience. Over the years,
                I have built a diverse portfolio of high-traffic applications, ranging from high-performance
                <span className="text-gray-900 dark:text-white font-medium ml-1">E-commerce platforms</span> to specialized
                <span className="text-gray-900 dark:text-white font-medium ml-1">management suites</span>.
              </p>

              <p>
                I am passionate about architecting <span className="italic">scalable systems</span> where
                data integrity and security are top priorities, ensuring that complex digital ecosystems
                remain performant under load.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                <p className="mb-4">
                  Currently, I am expanding my technical expertise by mastering
                  <span className="inline-flex items-center mx-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    Docker
                  </span>
                  and
                  <span className="inline-flex items-center mx-1 px-3 py-1 rounded-full text-sm font-medium bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300">
                    AWS
                  </span>
                  to build more resilient, cloud-native infrastructures.
                </p>

                <p>
                  Driven by a forward-thinking approach, I am also deeply interested in the integration of
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold ml-1">
                    AI and Machine Learning
                  </span>
                  to create smarter, more personalized digital experiences.
                </p>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {aboutSections.map(({ icon: Icon, title, description, color }) => (
                <div key={title} className="relative group">
                  <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
                  <div className="relative h-full bg-white dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left">
                    <div className="flex items-center mb-5 space-x-4">
                      <div className={`p-3 ${color} rounded-lg shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
                    </div>
                    <ul className="text-sm sm:text-base list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-3">
                      {description.map((point, index) => (
                        <li key={index} className="leading-snug">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </SectionBackground>
  );
}