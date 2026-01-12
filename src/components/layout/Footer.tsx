import { Heart, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: "https://github.com/Mokshith05", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mokshithmalla", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/_mokshith_malla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    //{ icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="font-display font-bold text-lg">
            <span className="text-primary">M</span>okshith
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made by Mokshith © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
