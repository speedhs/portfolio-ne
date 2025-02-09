"use client";
import { useEffect, useState } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I'm a Software Engineer with a passion for building innovative solutions. Currently pursuing my B.Tech in
            Computer Science and Engineering at Shiv Nadar Institute of Eminence, I specialize in full-stack development
            with expertise in Python, Golang, and TypeScript.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            With experience at True Beacon and SaralX, I've worked on various projects ranging from risk management
            systems to client communication modules. I'm passionate about creating efficient, scalable solutions that
            solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
