import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Responsive Website Development",
      issuer: "Online Platform",
      date: "2024",
    },
    {
      title: "Dynamic Web Applications (JavaScript)",
      issuer: "Online Platform",
      date: "2025",
    },
    {
      title: "Database Management Systems",
      issuer: "Online Platform",
      date: "2024",
    },
    {
      title: "MCP Exploration Project",
      issuer: "Online Platform",
      date: "2025",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Credentials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Certifications & <span className="gradient-text">Courses</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              <span className="text-xs text-primary/70">{cert.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
