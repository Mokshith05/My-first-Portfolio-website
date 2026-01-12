import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code, Users } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: GraduationCap, label: "GITAM University", value: "CS Student" },
    { icon: MapPin, label: "Location", value: "Visakhapatnam, India" },
    { icon: Code, label: "Focus", value: "Web Dev + AI" },
    { icon: Users, label: "Community", value: "20K+ Followers" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Building the future,
              <br />
              <span className="gradient-text">one project at a time</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hey! I'm Mokshith, a Computer Science student at GITAM University with a deep passion for web development, artificial intelligence, and creating content that actually helps people.
              </p>
              <p>
                I believe in <span className="text-foreground font-medium">learning in public</span> and <span className="text-foreground font-medium">building real skills</span> through hands-on projects. Every line of code I write is a step toward mastering my craft.
              </p>
              <p>
                Beyond coding, I've built a community of 20,000+ students on Instagram where I share tech education, career guidance, and help beginners cut through the noise to focus on what truly matters.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4"
                >
                  <Icon className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="font-medium text-foreground">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
              
              {/* Main card */}
              <div className="absolute inset-4 glass-card p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">Builder Mindset</h3>
                      <p className="text-sm text-muted-foreground">Projects over tutorials</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-border" />
                  
                  <blockquote className="text-muted-foreground italic">
                    "I don't just learn concepts — I build with them. Every project is a stepping stone to becoming a better developer."
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      M
                    </div>
                    <div>
                      <p className="font-medium text-sm">Mokshith Ayyal Malla</p>
                      <p className="text-xs text-muted-foreground">Full Stack Developer in Progress</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-2xl"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
