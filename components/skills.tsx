const skills = {
  Languages: ["Python", "SQL", "Golang", "TypeScript"],
  Frameworks: ["React", "Node.js", "Next.js", "Frappe", "Django"],
  "Tools & Technologies": ["PostgreSQL", "MongoDB", "Git", "Docker", "AWS"],
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skills
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="text-center opacity-0 translate-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-6">{category}</h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-full px-4 py-2 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

