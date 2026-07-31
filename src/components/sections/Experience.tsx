"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Machine Learning Intern",
    company: "Elysium Technologies Pvt. Ltd.",
    date: "June 2026",
    description: [
      "Engineered robust data pipelines with advanced preprocessing and feature extraction to enhance model accuracy.",
      "Trained and deployed state-of-the-art ML models to solve complex real-world datasets.",
      "Designed comprehensive data visualizations, translating raw metrics into strategic business insights.",
      "Leveraged Python, Scikit-Learn, Pandas, and NumPy to optimize analytical workflows.",
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Data Visualization"],
    color: "border-primary/40 hover:border-primary/70",
    iconBg: "bg-primary/20 border-primary/30",
    iconColor: "text-primary",
    badge: "bg-primary/20 text-primary",
    badgeText: "Internship",
  },
];

const education = [
  {
    type: "edu",
    degree: "B.Tech — AI & Data Science",
    institution: "NPR College of Engineering & Technology (Autonomous)",
    date: "2024 – 2028",
    detail: "CGPA: 8.07 | 3rd Year",
    color: "border-cyan-500/40 hover:border-cyan-500/70",
    iconBg: "bg-cyan-500/20 border-cyan-500/30",
    iconColor: "text-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-400",
    badgeText: "Current",
  },
  {
    type: "edu",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Arulmigu Palaniandavar Arts College, Palani",
    date: "2022 – 2024",
    detail: "Score: 89.8%",
    color: "border-emerald-500/40 hover:border-emerald-500/70",
    iconBg: "bg-emerald-500/20 border-emerald-500/30",
    iconColor: "text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-400",
    badgeText: "Completed",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">My Journey</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground">
            Experience &{" "}
            <span className="text-gradient">Education.</span>
          </h2>
        </motion.div>

        {/* Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
              <Briefcase size={22} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass p-8 rounded-3xl border ${exp.color} transition-colors`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${exp.badge}`}>{exp.badgeText}</span>
                      <span className="text-foreground/40 text-sm">{exp.date}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-foreground">{exp.role}</h4>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${exp.iconBg}`}>
                    <Briefcase size={22} className={exp.iconColor} />
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-xs font-medium glass border border-white/10 rounded-full text-foreground/60">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
              <GraduationCap size={22} className="text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass p-8 rounded-3xl border ${edu.color} transition-colors flex flex-wrap items-start justify-between gap-6`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${edu.badge}`}>{edu.badgeText}</span>
                    <span className="text-foreground/40 text-sm">{edu.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-foreground/60">{edu.institution}</p>
                  <p className="text-primary font-semibold text-sm mt-3">{edu.detail}</p>
                </div>
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${edu.iconBg}`}>
                  <GraduationCap size={22} className={edu.iconColor} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
