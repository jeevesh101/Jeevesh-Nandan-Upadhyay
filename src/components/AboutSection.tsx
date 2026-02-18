import { GraduationCap, MapPin, Award } from "lucide-react";

const stats = [
  { value: "8.12", label: "CGPA", sub: "VIT Chennai" },
  { value: "95%", label: "Accuracy", sub: "EmotiGen" },
  { value: "2", label: "Patents", sub: "Filed" },
  { value: "1st", label: "SIH 2023", sub: "National Win" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary font-mono">01.</span> About Me
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mb-12" />

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-5">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Computer Science & Business Analytics graduate from{" "}
              <span className="text-foreground font-medium">Vellore Institute of Technology (VIT), Chennai</span> with an Integrated MTech (Dual Degree).
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My passion lies in building <span className="text-primary">scalable, data-driven intelligent systems</span> — from emotion-aware AI platforms to medical imaging pipelines processing 1.5M+ CT scans. I thrive at the intersection of AI/ML and full-stack development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary" /> Sultanpur, India
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                <GraduationCap size={14} className="text-primary" /> MTech CSE, VIT
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                <Award size={14} className="text-primary" /> 2 Patents Filed
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-6 text-center hover:glow-border transition-all duration-300 group"
              >
                <div className="text-3xl font-heading font-bold text-primary group-hover:glow-text transition-all">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mt-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
