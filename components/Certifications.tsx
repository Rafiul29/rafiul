"use client";
import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CertificationCard } from "./ui/CertificationCard";

const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "Jan 19, 2023",
    link: "https://www.freecodecamp.org/certification/fccde550765-5a0a-4615-b950-482ea212bb28/javascript-algorithms-and-data-structures",
    image: "/images/certifications/javascript-algorithms-and-data-structures.png",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "May 4, 2023",
    link: "https://www.freecodecamp.org/certification/fccde550765-5a0a-4615-b950-482ea212bb28/responsive-web-design",
    image: "/images/certifications/responsive-web-design.png",
  },
  {
    title: "React (Basic) Certificate",
    issuer: "HackerRank",
    date: "Jan 11, 2023",
    link: "https://www.hackerrank.com/certificates/3cf669e5706d",
    image: "/images/certifications/react-basic.png",
  },
  {
    title: "JavaScript (Basic) Certificate",
    issuer: "HackerRank",
    date: "Jun 24, 2024",
    link: "https://pwskills.com/learn/certificate/1e3f9e1e-9108-4685-bfa0-6325856f3823/",
    image: "/images/certifications/javascript-basic.png",
  },
  {
    title: "Cascading Style Sheets (CSS)",
    issuer: "HackerRank",
    date: "Jan 24, 2024",
    link: "https://www.hackerrank.com/certificates/8fad4ab6e7b4",
    image: "/images/certifications/css.png",
  },
  {
    title: "Master Git and Github - Beginner to Expert",
    issuer: "Udemy",
    date: "May 11, 2023",
    link: "https://www.udemy.com/certificate/UC-cb6ca2a1-deab-4bee-a1ac-7f07fe87d4f7/",
    image: "/images/certifications/git-github.jpg",
  },

];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };

  return (<SectionBackground>
    <section id="certifications">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="A collection of specialized courses I actually mastered and completed—proven skills beyond just bookmarks.">Certifications & Learning</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-2 md:px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  </SectionBackground>
  );
}
