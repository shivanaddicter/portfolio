"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    color: "from-blue-500 to-cyan-400",
    borderColor: "border-blue-500/30",
    skills: [
      { name: "Python", level: 90 },
      { name: "Scikit-Learn", level: 85 },
      { name: "Pandas & NumPy", level: 88 },
      { name: "TensorFlow", level: 72 },
      { name: "Prompt Engineering", level: 80 },
    ],
  },
  {
    category: "Web Development",
    icon: "🌐",
    color: "from-violet-500 to-purple-400",
    borderColor: "border-violet-500/30",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 88 },
      { name: "React & Next.js", level: 85 },
      { name: "Django & Flask", level: 80 },
      { name: "Bootstrap & Tailwind", level: 90 },
    ],
  },
  {
    category: "Programming Languages",
    icon: "💻",
    color: "from-emerald-500 to-teal-400",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    icon: "⚙️",
    color: "from-amber-500 to-orange-400",
    borderColor: "border-amber-500/30",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Firebase", level: 80 },
      { name: "MySQL / SQLite", level: 85 },
      { name: "IoT (ESP32, LoRa)", level: 83 },
      { name: "Streamlit", level: 78 },
    ],
  },
];

const allTech = [
  "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS",
  "React", "Next.js", "Django", "Flask", "Bootstrap", "Tailwind CSS",
  "MySQL", "SQLite", "Firebase", "Git", "GitHub", "ESP32", "LoRa",
  "Scikit-Learn", "TensorFlow", "Pandas", "NumPy", "Streamlit",
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground">
            Tech <span className="text-gradient">Arsenal.</span>
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass p-8 rounded-3xl border ${group.borderColor} hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{group.category}</h3>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                      <span className="text-sm font-bold text-foreground/50">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-foreground/40 text-sm font-semibold uppercase tracking-widest mb-8">Full Technology Stack</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {allTech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 glass border border-white/10 rounded-full text-sm font-medium text-foreground/70 hover:text-primary hover:border-primary/40 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
