export function Experience() {
  const experiences = [
    {
      company: "AlgoTest (YC S22)",
      role: "Founding Backend Engineer",
      period: "February 2025 - Present",
      location: "Gurugram, Haryana, India · On-site",
      description: ["Working on Broker Interfaces", "Full-time position at YC-backed startup"],
    },
    {
      company: "True Beacon",
      role: "Software Engineer - Product",
      period: "June 2024 - Present",
      location: "Bangalore, Karnataka, India",
      description: [
        "Worked on Risk Management System to track orders and positions from brokers",
        "Implemented Strategy Template Code to unify deployments across all strategies",
        "Developed Lead Management System using Frappe framework",
        "Migrated broker communication service from v1 to v2 reducing latency",
        "Tech Stack: Python, AWS, Prefect, Frappe, Go, Docker",
      ],
    },
    {
      company: "True Beacon",
      role: "Software Engineering Intern",
      period: "December 2023 - May 2024",
      location: "Bangalore, Karnataka, India",
      description: [
        "Built automation pipeline for Fund Accounting using Python and Prefect",
        "Created Client Communications Module for bulk mails with dynamic PDF generation",
        "Revamped client data pipeline improving data flow efficiency",
        "Configured and deployed open source software on AWS with load balancers",
        "Tech Stack: Python, AWS, Prefect, Frappe, Django, Docker",
      ],
    },
    {
      company: "SaralX",
      role: "Web Development Intern",
      period: "May 2023 - July 2023",
      location: "Remote",
      description: [
        "Developed multi-select filters for Admin Dashboard improving UX",
        "Created responsive UI flows with theme integration",
        "Built client dashboard from scratch increasing client retention",
        "Tech Stack: MongoDB, React.js, Express.js, Node.js, TypeScript, Next.js",
      ],
    },
    {
      company: "Shiv Nadar Institution of Eminence",
      role: "Teaching Assistant - Data Structures and Algorithms",
      period: "August 2023 - December 2023",
      location: "Greater Noida, Uttar Pradesh, India",
      description: [
        "Conducted weekly tutorial sessions for 60+ students",
        "Created and graded assignments and quizzes",
        "Helped students understand complex DSA concepts",
        "Maintained office hours for doubt clearing sessions",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[200px_1fr] md:gap-8">
                <div className="text-gray-400 mb-4 md:mb-0">
                  <div className="font-medium">{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <div className="text-gray-400 mb-4">{exp.company}</div>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

