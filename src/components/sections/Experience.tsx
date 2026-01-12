import { motion } from "framer-motion";
import { Github, Instagram, Users, Calendar, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Github,
      title: "GitHub Community GITAM",
      role: "Co-Lead of Web Development",
      period: "2025 - Present",
      highlights: [
        "Conducted and planned technical events & workshops",
        "Built mini web projects to demonstrate concepts",
        "Guided juniors and contributed to the tech community",
        "Collaborated with team leads on community initiatives",
      ],
      accent: "from-[#333] to-[#6e5494]",
    },
    {
      icon: Instagram,
      title: "Tech Content Creator",
      role: "Instagram (_mokshith_malla)",
      period: "2025 - Present",
      highlights: [
        "Built an audience of 20,000+ engaged followers",
        "Create tech education and career guidance content",
        "Help students reduce confusion and choose correct paths",
        "Share real experiences and practical learning tips",
      ],
      accent: "from-[#f09433] to-[#dc2743]",
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Leadership & <span className="gradient-text">Impact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.accent} flex items-center justify-center shrink-0`}>
                  <exp.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-sm">{exp.role}</p>
                </div>
              </div>

              {/* Period */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                    <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "20K+", label: "Instagram Followers" },
            { value: "5+", label: "Projects Built" },
            { value: "10+", label: "Students Mentored" },
            { value: "5+", label: "Events Conducted" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
