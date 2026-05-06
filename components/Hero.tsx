"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactInfo } from "./hero/ContactInfo";
import { ActionButtons } from "./hero/ActionButtons";
import { SocialLinks } from "./hero/SocialLinks";
import { TypeWriter } from "./ui/TypeWriter";

export default function Hero() {

  const roles = [
    // "Passionate Software Engineer",
    "Passionate Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Interested in AI/ML",
    "Problem Solver",
    "Tech Explorer"
  ];

  return (

    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-100/60 to-blue-50/60 dark:from-black dark:via-gray-950 dark:to-slate-950">

        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000" />


        {/* Top Right Decorative Shape */}
        <div className="absolute top-0 h-[150px] w-[200px] rotate-12  rounded-3xl  bg-gradient-to-l from-blue-600/60 to-sky-400/40 blur-3xl filter opacity-10 dark:opacity-30 lg:-right-20 lg:top-44 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]">
        </div>

        {/* Bottom Left Decorative Shape */}
        <div className="absolute -left-64 bottom-44 h-[150px] w-[900px] -rotate-45 rounded-3xl  bg-gradient-to-r from-violet-600/80 to-indigo-800/80 blur-3xl filter opacity-10 dark:opacity-30 lg:-left-20 lg:bottom-24 lg:h-28 lg:w-[250px]lg:-rotate-12 xl:h-40 xl:w[400px]">
        </div>

      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
                Hey! <span className="inline-block origin-[70%_70%] animate-wave">👋</span> I'm
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Md Rafiul Islam
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-400 max-w-5xl">
              {/* I am a passionate developer with a keen interest in building dynamic and responsive web applications. My expertise lies in creating seamless user experiences using modern web technologies. */}
              {/* As a Full-Stack Developer, I thrive on solving architectural challenges. My expertise lies in crafting secure, enterprise-grade applications using Modern Web Technologies. I am passionate about clean code, data integrity, and creating fluid interfaces that work perfectly across all devices. */}
              As a Passionate Full-Stack Developer, I don't just write code; I architect solutions. I thrive on solving complex structural challenges and crafting secure, enterprise-grade applications using a modern web stack. My commitment to clean code and data integrity ensures long-term scalability, while my focus on fluid, responsive interfaces guarantees a seamless experience for every user, on every device.
            </p>
            <ActionButtons />
            <SocialLinks />
          </div>

          <div className="relative order-1 md:order-2 flex items-center justify-center">


            {/* Floating solid circular elements */}
            {/* <div className="absolute w-20 h-20 bg-blue-600 top-0 left-0 rounded-full animate-floating" />
            <div className="absolute w-20 h-20 bg-purple-600 bottom-0 right-0 rounded-full animate-floating delay-150" />
            <div className="absolute w-16 h-16 bg-green-500 top-4 right-4 rounded-full animate-floating delay-300" />
            <div className="absolute w-16 h-16 bg-yellow-500 bottom-4 left-4 rounded-full animate-floating delay-450" /> */}

            <div className="absolute -top-8 -left-8 w-32 h-32 md:w-44 md:h-44 bg-pink-400/30 dark:bg-pink-600/20 rounded-full blur-2xl rotate-12 z-0"></div>

            <div className="absolute bottom-0 right-0 w-24 h-24 md:w-36 md:h-36 bg-purple-400/30 dark:bg-purple-700/40 rounded-full blur-2xl rotate-45 z-0"></div>

            <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] rounded-full bg-blue-400/20 dark:bg-blue-600/30 blur-[90px] z-0 animate-pulse"></div>

            <div className="w-48 h-48 md:w-[350px] md:h-[350px] flex items-center justify-center rounded-full bg-white dark:bg-gray-950 shadow-lg border-2 border-gray-200 dark:border-gray-800 overflow-hidden z-10">
              <img
                src="/profile.png"
                alt="Rafiul Islam"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105" />
            </div>
          </div>



        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>

    </section>

  );
}
