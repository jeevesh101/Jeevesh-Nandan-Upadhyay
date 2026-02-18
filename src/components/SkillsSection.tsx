const skillCategories = [
  {
    title: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "Transfer Learning", "Computer Vision", "NLP", "RAG", "LLMs", "Speech Processing", "Recommender Systems"],
  },
  {
    title: "Languages",
    skills: ["Python", "R", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Web & Full-Stack",
    skills: ["React.js", "Node.js", "Express.js", "RESTful APIs", "JWT"],
  },
  {
    title: "Data & Cloud",
    skills: ["PostgreSQL", "MySQL", "AWS S3", "Docker", "Apache Spark", "Kafka", "Hadoop", "GitLab CI/CD"],
  },
  {
    title: "Tools & Other",
    skills: ["Tableau", "Power BI", "Git", "Bright Data", "Cryptography", "Generative AI", "Big Data"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative grid-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary font-mono">02.</span> Tech Stack
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-300 group"
            >
              <h3 className="font-heading text-lg font-semibold text-primary mb-4 group-hover:glow-text transition-all">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
