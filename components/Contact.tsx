import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';

import { Github, Linkedin, Mail } from 'lucide-react';
import { ContactForm } from './ui/ContactForm';

export function Contact() {
  return (
    <SectionBackground>
      <section id="contact">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Ready to build something scalable? Whether it's a project inquiry or just a tech chat, I'm just a message away.">Let's Connect</SectionTitle>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Currently accepting new projects and collaboration opportunities. If you're looking for a developer who prioritizes code integrity and enterprise performance, let’s talk! Your message goes directly to my workspace.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rafiulislamcse29@gmail.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Mail className="w-6 h-6" />
                  <span>rafiulislamcse29@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Rafiul29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-6 h-6" />
                  <span>github.com/Rafiul29</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rafiul-islam-cse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>linkedin.com/in/rafiul-islam-cse</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
