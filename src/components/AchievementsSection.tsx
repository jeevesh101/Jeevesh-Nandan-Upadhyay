import { Trophy, Medal, Plane, ScrollText } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2023",
    subtitle: "1st Place — VIT University",
    detail: "Ranked 1st among 350+ competing teams nationally",
  },
  {
    icon: Medal,
    title: "Maria Phillip Futures Leader Debate",
    subtitle: "1st Rank Chennai, 3rd Tamil Nadu",
    detail: "Top debater at state-level championship, 2022",
  },
  {
    icon: Plane,
    title: "Robozar DRONE+ — SLIET Techfest",
    subtitle: "1st Place",
    detail: "Engineered an autonomous medical aid drone (5 km range, 5 kg payload)",
  },
  {
    icon: ScrollText,
    title: "Patents Filed — India",
    subtitle: "ECONET & EmotiGen",
    detail: "Filed patents for recycling platform and emotion-aware AI, 2023–2024",
  },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="achievements" className={`section-padding grid-bg transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary font-mono">04.</span> Achievements
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-primary font-semibold mb-2">{item.subtitle}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
