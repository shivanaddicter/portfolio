"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Cybershield AI",
    category: "AI / Cybersecurity",
    description: "Advanced cybersecurity suite employing Machine Learning for proactive threat, malware, and phishing detection with real-time risk scoring and predictive security insights.",
    tech: ["Python", "Machine Learning", "Cybersecurity", "Data Analytics"],
    gradient: "from-rose-500/20 to-pink-600/10",
    border: "border-rose-500/20 hover:border-rose-500/40",
    tag: "🛡️",
  },
  {
    title: "Crop Yield Prediction",
    category: "AI / AgriTech",
    description: "Intelligent agricultural platform utilizing ML to forecast crop yields based on hyper-local weather patterns and soil composition, with an interactive Django dashboard.",
    tech: ["Python", "Django", "Scikit-Learn", "HTML/CSS"],
    gradient: "from-emerald-500/20 to-green-600/10",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    tag: "🌾",
  },
  {
    title: "Student Dashboard",
    category: "Full Stack / EdTech",
    description: "Comprehensive educational portal with QR-based attendance tracking, real-time GPS bus monitoring, and centralized resource management to streamline academic workflows.",
    tech: ["Django", "SQLite", "JavaScript", "Tailwind CSS"],
    gradient: "from-blue-500/20 to-cyan-600/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    tag: "🎓",
  },
  {
    title: "Haya Health Care",
    category: "AI / Healthcare",
    description: "Predictive healthcare diagnostic tool for kidney disease risk assessment through advanced health parameter analysis with automated report generation and batch processing.",
    tech: ["Python", "Streamlit", "Machine Learning", "Pandas"],
    gradient: "from-amber-500/20 to-yellow-600/10",
    border: "border-amber-500/20 hover:border-amber-500/40",
    tag: "🏥",
  },
  {
    title: "Living Root Internet",
    category: "IoT / Cloud",
    description: "Innovative IoT ecosystem for real-time underground environment monitoring. Uses ESP32 microcontrollers and LoRaWAN gateways to stream sensor data to Firebase cloud.",
    tech: ["IoT", "LoRa", "ESP32", "Firebase"],
    gradient: "from-violet-500/20 to-purple-600/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
    tag: "📡",
  },
  {
    title: "Thermoshield Ecobrick",
    category: "Sustainability / IoT",
    description: "Sustainable construction initiative using agricultural waste for fire-resistant, naturally cooling interlocking bricks integrated with IoT sensors for structural monitoring.",
    tech: ["Material Science", "IoT", "Sensors", "Sustainability"],
    gradient: "from-teal-500/20 to-cyan-600/10",
    border: "border-teal-500/20 hover:border-teal-500/40",
    tag: "♻️",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What I&apos;ve Built</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground">
              Featured <span className="text-gradient">Projects.</span>
            </h2>
          </div>
          <a
            href="https://github.com/shivanaddicter"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-foreground/50 hover:text-primary transition-colors"
          >
            <FaGithub size={16} /> View all on GitHub
          </a>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className={`group glass rounded-3xl border ${project.border} bg-gradient-to-br ${project.gradient} flex flex-col overflow-hidden transition-all duration-300`}
            >
              {/* Card Header */}
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{project.tag}</span>
                  <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider">{project.category}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-7 pb-7">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-foreground/60">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                  <a href="https://github.com/shivanaddicter" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-foreground/50 hover:text-primary transition-colors group/btn">
                    <FaGithub size={14} />
                    <span className="group-hover/btn:underline">Source</span>
                  </a>
                  <a href="#"
                    className="flex items-center gap-2 text-xs font-semibold text-foreground/50 hover:text-primary transition-colors ml-auto group/btn">
                    <span className="group-hover/btn:underline">Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
