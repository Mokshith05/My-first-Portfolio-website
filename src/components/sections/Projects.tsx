import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive personal portfolio built with React and TailwindCSS featuring smooth animations and dark theme.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location search, forecasts, and beautiful UI using Weather API integration.",
      tech: ["JavaScript", "API", "CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Manager App",
      description: "Full-featured task management application with CRUD operations, filtering, and local storage persistence.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "E-commerce Landing Page",
      description: "Responsive landing page for an e-commerce platform with modern design principles and Bootstrap framework.",
      tech: ["HTML", "Bootstrap", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Student Database System",
      description: "Python-based student management system with DBMS integration for efficient data handling and queries.",
      tech: ["Python", "SQL", "DBMS"],
      github: "#",
    },
    {
      title: "GitHub Profile Finder",
      description: "Web app to search and display GitHub user profiles with their repositories and contribution stats.",
      tech: ["JavaScript", "GitHub API", "CSS"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 decorated-grid opacity-20" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects I've built to learn, experiment, and solve real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
