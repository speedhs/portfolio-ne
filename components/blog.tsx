"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const blogPosts = [
  {
    title: "Finding my way...maybe by discussing Products",
    description:
      "I will be discussing product ideas that I have (almost 5 everyday) which could potentially be something I might work on in future.",
    link: "https://dizzzyspeed.substack.com/p/finding-my-waymaybe-by-discussing",
    date: "Jun 08, 2024",
  },
  {
    title: "Squad - Photo Sharing App",
    description:
      "Exploring the concept of a photo sharing application focused on group dynamics and shared experiences.",
    link: "https://dizzzyspeed.substack.com/p/squad-photo-sharing-app",
    date: "Recent",
  },
  {
    title: "BeMyGuide - The Tinder for City Guides",
    description: "A unique take on city exploration through a Tinder-like interface for finding local guides.",
    link: "https://dizzzyspeed.substack.com/p/bemyguide-the-tinder-for-city-guides",
    date: "Recent",
  },
];

export function Blog() {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        const rect = blogSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleIndex(blogPosts.length);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="blog" className="py-20 md:py-32 bg-black/50">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            visibleIndex >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Blog
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visibleIndex >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{post.description}</p>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <ArrowUpRight className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          ))}
          <div
            className={`text-center pt-8 transition-all duration-700 ${
              visibleIndex >= blogPosts.length ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="https://dizzzyspeed.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
