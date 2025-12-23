"use client";

export default function Education() {
  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950 dark:to-slate-950">
      <section id="education">
        <div className="container mx-auto px-8">
          <div className="mb-10 relative">
            <div className="flex flex-col text-center items-center">
              <h2 className="relative group">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 dark:from-blue-500 dark:via-white dark:to-blue-500 bg-clip-text text-transparent leading-tight tracking-tight">
                  Education
                </span>
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-3xl font-medium">
                Where I learned theory and then forgot half of it while learning to actually code 😅
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

          <div className="max-w-5xl mx-auto space-y-10">
            {/* B.Sc Card */}
            <div >
              <div className="relative group bg-white dark:bg-gray-900 p-4 sm:p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-graduation-cap w-6 h-6 text-blue-600 dark:text-blue-400">
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                      <path d="M22 10v6" />
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                      B.Sc. in Information and Communication Technology
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Islamic University, Kushtia - 7003
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4">
                          <path d="M8 2v4" />
                          <path d="M16 2v4" />
                          <rect width="18" height="18" x="3" y="4" rx="2" />
                          <path d="M3 10h18" />
                        </svg>
                        <span className="text-sm">2020 - Current</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" className="lucide lucide-award w-4 h-4">
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                        <span className="text-sm">CGPA: 3.53</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[38px] bottom-0 w-[2px] h-10 bg-blue-300 dark:bg-blue-700 transform translate-y-full"></div>
              </div>
            </div>

            {/* HSC Card */}
            <div >
              <div className="relative group bg-white dark:bg-gray-900 p-4 sm:p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-graduation-cap w-6 h-6 text-blue-600 dark:text-blue-400">
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                      <path d="M22 10v6" />
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                      Higher Secondary Certificate (HSC)
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Agrani School and College
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4">
                          <path d="M8 2v4" />
                          <path d="M16 2v4" />
                          <rect width="18" height="18" x="3" y="4" rx="2" />
                          <path d="M3 10h18" />
                        </svg>
                        <span className="text-sm">2017 - 2019</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round" className="lucide lucide-award w-4 h-4">
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                        <span className="text-sm">GPA: 4.92</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
