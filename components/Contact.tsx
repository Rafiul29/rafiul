"use client";

export default function Contact() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form submitted! You can connect this to an email API.");
  };

  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
      <section id="contact">
        <div className="container mx-auto px-4">
          <div className="mb-10 relative">
            <div className="flex flex-col text-center items-center">
              <h2 className="relative group">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 dark:from-blue-500 dark:via-white dark:to-blue-500 bg-clip-text text-transparent leading-tight tracking-tight">
                  Get In Touch
                </span>
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-3xl font-medium">
                Got a cool project idea? Want to collaborate? Or just want to say hi? Drop me a line!
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-400 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 opacity-80"></div>
                <div className="w-1 h-1 rounded-full bg-gray-600 dark:bg-gray-300 opacity-60"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 opacity-80"></div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-400 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Info */}
            <div
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"

            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Whether you've got a crazy project idea, want to collaborate on something awesome, or just want to chat about tech over coffee ☕ - I'm all ears! And yes, this actually goes straight to my inbox.
              </p>
              <div className="space-y-4">
                <a href="mailto:ashik.ict.iu@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>ashik.ict.iu@gmail.com</span>
                </a>
                <a href="https://github.com/Ashikur07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-6 h-6">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>https://github.com/Ashikur07</span>
                </a>
                <a href="https://www.linkedin.com/in/ashik43" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-6 h-6">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>https://www.linkedin.com/in/ashik43</span>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"

            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-5 h-5">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input type="text" id="name" name="name" required placeholder="Enter your name" className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <input type="email" id="email" name="email" required placeholder="Enter your email" className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block font-medium mb-2">Message</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-gray-400">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z" />
                      </svg>
                    </div>
                    <textarea id="message" name="message" required placeholder="Enter your message" rows={5}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"></textarea>
                  </div>
                </div>
                <button type="submit" className="w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7" />
                    <path d="M16 3h5v5" />
                    <path d="m16 8 5-5" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
