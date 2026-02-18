import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary font-mono">05.</span> Get In Touch
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mx-auto mb-8" />

        <p className="text-muted-foreground text-lg mb-10">
          I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
        </p>

        <a
          href="mailto:jeeveshnandan.upadhyay@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 font-heading text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <Mail size={18} />
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6 mt-10">
          <a
            href="tel:+919120616651"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={16} />
            +91-9120616651
          </a>
          <span className="text-border">|</span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} />
            Sultanpur, India
          </span>
        </div>

        <div className="flex items-center justify-center gap-5 mt-8">
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
    </section>
  );
};

export default ContactSection;
