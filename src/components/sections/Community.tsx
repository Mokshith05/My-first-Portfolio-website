import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Community = () => {
  const stats = [
    { icon: Users, value: "20K+", label: "Followers" },
    { icon: Heart, value: "30K+", label: "Total Likes" },
    { icon: MessageCircle, value: "100K+", label: "Comments" },
    { icon: TrendingUp, value: "500K+", label: "Reach" },
  ];

  const contentTypes = [
    "🎯 Tech Career Guidance",
    "💡 Coding Tips & Tricks",
    "📚 Learning Resources",
    "🚀 Student Success Stories",
    "🔥 Tech News & Trends",
    "💬 Q&A Sessions",
  ];

  return (
    <section id="community" className="py-24 relative bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 decorated-grid opacity-20" />

      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f09433]/20 via-[#e6683c]/10 to-transparent rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Content Creator
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Building a
              <br />
              <span className="gradient-text">Tech Community</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              I help students navigate the overwhelming world of tech through relatable content,
              practical advice, and real experiences. No fluff, no gatekeeping — just honest guidance
              from someone who's on the same journey.
            </p>

            {/* Content types */}
            <div className="flex flex-wrap gap-3 mb-8">
              {contentTypes.map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm"
                >
                  {type}
                </span>
              ))}
            </div>

            <Button variant="glow" size="lg" asChild>
              <a href="https://www.instagram.com/_mokshith_malla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Follow on Instagram
              </a>
            </Button>
          </motion.div>

          {/* Right - Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 glow-box">
              {/* Instagram-style header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] p-0.5">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="font-display font-bold text-xl">M</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">_mokshith_malla</h3>
                  <p className="text-sm text-muted-foreground">Tech Content Creator</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ icon: Icon, value, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold gradient-text">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic text-center">
                  "Helping students find their path in tech, one post at a time."
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#f09433]/30 to-[#dc2743]/30 rounded-3xl -z-10"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
