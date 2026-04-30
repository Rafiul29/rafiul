"use client";

import React from "react";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
  color?: string;
  url?: string;
}

export function SkillCard({ name, icon: Icon, color, url }: SkillCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex flex-col items-center justify-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Dynamic Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl"
        style={{ backgroundColor: color }}
      />

      {/* Icon Container */}
      <div
        className="relative z-10 p-3 rounded-xl transition-all duration-300 group-hover:scale-110 mb-2"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon
          size={32}
          color={color}
          className="filter transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
        />
      </div>

      {/* Skill Name */}
      <span className="relative z-10 text-[10px] font-bold text-gray-500 dark:text-gray-400 tracking-wider uppercase group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-center leading-tight">
        {name}
      </span>
    </motion.a>
  );
}