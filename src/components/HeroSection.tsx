import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/jeevesh-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="font-heading text-sm text-primary tracking-widest uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Jeevesh Nandan
            <br />
            <span className="text-gradient">Upadhyay</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            AI/ML Engineer & Full-Stack Developer building patented, production-grade intelligent systems with up to{" "}
            <span className="text-primary font-semibold">95% accuracy</span>.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="px-7 py-3 font-heading text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 font-heading text-sm font-semibold rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5 mt-8 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { icon: Github, href: "https://github.com/jeevesh", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/jeevesh", label: "LinkedIn" },
              { icon: Mail, href: "mailto:jeeveshnandan.upadhyay@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-border transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
              <img
                src={profilePhoto}
                alt="Jeevesh Nandan Upadhyay"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-primary/10 animate-glow-pulse" />
            <div className="absolute -inset-6 rounded-full border border-primary/5 animate-glow-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
