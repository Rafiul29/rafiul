import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import {
  SiReact, SiNodedotjs, SiFirebase, SiTailwindcss, SiTypescript,
  SiNextdotjs, SiMongodb, SiPrisma, SiShadcnui, SiFramer,
  SiSocketdotio, SiStripe, SiAppwrite, SiHtml5, SiCss3,
  SiJavascript, SiRedux, SiExpress, SiPhp, SiLaravel,
  SiPython, SiDjango, SiSqlite, SiMysql, SiCplusplus,
  SiPostgresql,
  SiInertia,
  SiBootstrap,
  SiJquery
} from 'react-icons/si';
import { ProjectCard } from './ui/ProjectCard';
import { TbBrandDjango } from "react-icons/tb";
// Define reusable tech stack icons & colors
export const techStacks = {
  // Original Stacks
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#000000' }, // Added Black
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#010101' }, // Added Black
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
  html: { icon: SiHtml5, name: "HTML", color: '#e34f26' },
  css: { icon: SiCss3, name: "CSS", color: '#1572b6' },
  javascript: { icon: SiJavascript, name: "JavaScript", color: '#ffd600' },
  redux: { icon: SiRedux, name: "Redux", color: '#764abc' },
  express: { icon: SiExpress, name: "Express.js", color: '#61DAFB' },
  php: { icon: SiPhp, name: "PHP", color: '#777BB4' },
  laravel: { icon: SiLaravel, name: "Laravel", color: '#FF2D20' },
  python: { icon: SiPython, name: "Python", color: '#306998' },
  django: { icon: SiDjango, name: "Django", color: '#092E20' },
  drf: {
    icon: TbBrandDjango,
    name: "Django REST Framework",
    color: '#092e20'
  },
  sql: { icon: SiSqlite, name: "SQL", color: '#00758F' },
  mysql: { icon: SiMysql, name: "MySQL", color: '#4479A1' },
  postgresql: { icon: SiPostgresql, name: "PostgreSQL", color: '#4169E1' },
  cpp: { icon: SiCplusplus, name: "C++", color: '#00599c' },
  inertia: {
    icon: SiInertia,
    name: "Inertia.js",
    color: '#9553e9'
  },
  bootstrap: { icon: SiBootstrap, name: "Bootstrap", color: '#7952b3' },
  jquery: { icon: SiJquery, name: "jQuery", color: '#0769ad' },
};



// Define projects data
const projects = [
  {
    title: 'Apex Learning',
    description: 'A comprehensive full-stack platform connecting students with expert tutors. Features real-time booking, session tracking, and a robust admin dashboard.',
    image: '/images/projects/apex-learning.png',
    link: 'https://apexlearning-edu.vercel.app/',
    github: 'https://github.com/Rafiul29/apexlearning-client.git',
    techStack: [
      techStacks.next,
      techStacks.javascript,
      techStacks.typescript,
      techStacks.shadcn,
      techStacks.tailwind,
      techStacks.express,
      techStacks.prisma,
      techStacks.postgresql,
    ],
  },
  {
    title: 'News Paper',
    description: 'A modern news portal offering real-time updates and a responsive reading experience. Optimized specifically for Bangla audiences with a clean UI.',
    image: '/images/projects/news-paper.png',
    link: 'https://newspaper1.zipsoftbd.com/',
    github: '',
    techStack: [
      techStacks.laravel,
      techStacks.react,
      techStacks.inertia,
      techStacks.mysql,
      techStacks.tailwind,
      techStacks.shadcn,
    ],
  },
  {
    title: 'UrbanHut',
    description: 'A premium furniture e-commerce site featuring brand management and dynamic filtering. Built for high-performance browsing and a secure checkout flow.',
    image: '/images/projects/urbanhut.png',
    link: 'https://ecommerce1.zipsoftbd.com',
    github: 'https://github.com/Rafiul29/urbanhut.git',
    techStack: [
      techStacks.laravel,
      techStacks.mysql,
      techStacks.javascript,
      techStacks.bootstrap,
      techStacks.jquery
    ],
  },
  {
    title: 'Shopswing',
    description: 'An intuitive e-commerce solution enabling customers to browse products and manage carts seamlessly. Focused on speed and a frictionless user journey.',
    image: '/images/projects/shopswing.png',
    link: 'https://shopswing.zipsoftbd.com/',
    github: 'https://github.com/Rafiul29/shopswing.git',
    techStack: [
      techStacks.laravel,
      techStacks.react,
      techStacks.inertia,
      techStacks.mysql,
      techStacks.tailwind,
      techStacks.shadcn,
    ],
  },
  {
    title: 'Tasty Trails',
    description: 'A dynamic food delivery app where users can track orders in real-time. Streamlines the bridge between hungry customers and efficient kitchen management.',
    image: '/images/projects/tasty-trails.png',
    link: 'https://tasty-trails-client.vercel.app/',
    github: 'https://github.com/Rafiul29/tasty-trails-client.git',
    techStack: [
      techStacks.django,
      techStacks.react,
      techStacks.redux,
      techStacks.tailwind,
      techStacks.postgresql,
      techStacks.drf,
    ],
  }
];

export function Projects() {
  return (<SectionBackground>
    <section id="projects">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="My code babies - they're not perfect, but they're mine and I love them">Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  </SectionBackground>
  );
}
