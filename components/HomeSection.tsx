"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br  from-gray-50 via-slate-100/60 to-blue-50/60 dark:from-black dark:via-gray-950 dark:to-slate-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:ml-28">

          {/* Text Content */}
          <div className="flex flex-col items-center text-center space-y-4 order-2 md:order-1 lg:pl-14">
            <div className="space-y-2">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
                Hey! <span className="animate-wave inline-block">👋</span> I&apos;m
              </div>

              <h1 className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Md Ashikur Rahaman
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                I&apos;m a{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Front-End Developer
                </span>
              </p>
            </div>

            <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
              I am a passionate developer focused on building dynamic and
              responsive web applications with modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://drive.google.com/file/d/1So9CZssa9kMehBOpI8aZrPV5AgBJiSk8/view"
                target="_blank"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition hover:scale-105"
              >
                View Resume
              </a>

              <Link
                href="#contact"
                className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:scale-105 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 md:order-2 flex items-center justify-center">
            <div className="absolute w-[350px] h-[350px] bg-blue-400/60 dark:bg-blue-600/70 rounded-full blur-[90px] animate-pulse" />

            <div className="w-48 h-48 md:w-[350px] md:h-[350px] rounded-full bg-white dark:bg-gray-950 shadow-lg border overflow-hidden z-10">
              <Image
                src="/assets/UpdateProfile1.png"
                alt="Md Ashikur Rahaman"
                width={350}
                height={350}
                className="object-cover rounded-full hover:scale-105 transition-transform"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about">
            ⬇️
          </Link>
        </div>
      </div>
    </section>
  );
}
