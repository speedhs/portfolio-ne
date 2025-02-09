import { Github, Globe } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Daikoku",
    description:
      "A collaborative platform linking companies to agile software solutions and students to practical projects, fostering symbiotic industry-student partnerships.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/speedhs/Daikoku/",
    live: null,
  },
  {
    title: "Edos",
    description:
      "An Operating System based on Arch Linux, developed with consideration of lower economic levels who don't have good compute on their laptops.",
    tech: ["Bash", "Linux"],
    github: null,
    live: "https://edos.netlify.app/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Projects
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors opacity-0 translate-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-white/10 rounded-full px-3 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Globe size={20} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

