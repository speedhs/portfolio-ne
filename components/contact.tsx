"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-12">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free
            to reach out!
          </p>

          <div className="flex justify-center gap-8">
            <Link
              href="https://github.com/speedhs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/harsh-srivastava-speedhs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://x.com/dizzzyspeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

