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

          <div className="max-w-4xl mx-auto mb-16 text-center">
            {/* <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
             As a Full-Stack Engineer, I thrive at the intersection of complex logic and seamless user experience. Over the years, I have built a diverse portfolio of high-traffic applications—ranging from E-commerce platforms and Newspaper portals to specialized POS systems and School Management suites.
            </p> */}

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a Full-Stack Developer, I thrive at the intersection of complex logic and seamless user experience. Over the years, I have built a diverse portfolio of high-traffic applications—ranging from E-commerce platforms and Newspaper portals to specialized POS systems and School Management suites.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey has led me to a deep specialization in <span className="text-blue-600 font-semibold">enterprise-grade SaaS products</span>. I am passionate about architecting multi-tenant systems where data integrity and scalability are the top priorities, ensuring that complex academic or business ecosystems remain performant and secure at scale.
            </p>
            <div className="mt-8 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-6 py-2 rounded-full border border-blue-200 dark:border-blue-800 shadow-sm">
                🚀 Building the future of educational infrastructure
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
                <div className="relative h-full bg-white dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-5 space-x-4">
                    <div className={`p-3 ${color} rounded-lg shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-3">
                    {description.map((point, index) => (
                      <li key={index} className="leading-snug">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}