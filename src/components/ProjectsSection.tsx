import { ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "ECONET",
    subtitle: "Eco-Friendly Marketplace",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AWS S3", "CI/CD"],
    description:
      "Full-stack eco-friendly marketplace integrating thrift & recycled stores with AI-based waste fraud detection. JWT auth, RESTful APIs, and GitLab CI/CD pipeline.",
    highlight: "Patent Filed",
    year: "2023–2024",
  },
  {
    title: "EmotiGen",
    subtitle: "Emotion-Aware AI Platform",
    tags: ["Python", "Genetic Algorithms", "TESS", "CREMA-D", "RAVDESS"],
    description:
      "Voice-to-text platform using genetic algorithms achieving 95% emotion recognition accuracy. Modules for formal letter generation and classroom note-taking.",
    highlight: "Patent Filed • 95% Accuracy",
    year: "2023",
  },
  {
    title: "ATRIA-CT",
    subtitle: "Medical Imaging Pipeline",
    tags: ["Python", "U-Net", "EfficientNetB0"],
    description:
      "Medical imaging pipeline for RSNA 2023: DICOM preprocessing, U-Net segmentation, and EfficientNetB0 classification across 1.5M+ CT scans with 94% accuracy.",
    highlight: "1.5M+ CT Scans • 94% Accuracy",
    year: "2023",
  },
  {
    title: "FinVision",
    subtitle: "Stock Market Analytics",
    tags: ["R", "ARIMA", "KNN", "Neural Networks"],
    description:
      "Stock analytics tool for Goldman Sachs data (2016–2024) using ARIMA, KNN, and neural networks. Benford's Law for anomaly detection, achieving 93% forecasting accuracy.",
    highlight: "93% Accuracy",
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary font-mono">03.</span> Projects
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-xl p-8 hover:glow-border transition-all duration-500 group relative overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <span className="text-xs font-heading text-muted-foreground">{project.year}</span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>

              {project.highlight && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
                  <FileText size={12} />
                  {project.highlight}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary/60 text-muted-foreground font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
