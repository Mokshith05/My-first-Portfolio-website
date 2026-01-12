import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Flexbox", "React"],
    },
    {
      title: "Backend & Data",
      skills: ["Python", "DBMS", "SQL", "APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      {/* Background pattern */}
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
            Tech Stack
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Currently exploring</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["TypeScript", "Node.js", "AI/ML", "Next.js", "TailwindCSS"].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
