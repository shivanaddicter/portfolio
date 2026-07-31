"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Trophy, Star } from "lucide-react";

const certifications = [
  { title: "Machine Learning Internship", issuer: "Elysium Technologies", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { title: "Python Full Stack Developer", issuer: "Elysium Academy", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { title: "Applied AI (Statistics to NLP)", issuer: "GUVI × HCL", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  { title: "Build & Deploy AI Apps with Google AI Studio", issuer: "GUVI × HCL", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { title: "Building a Chatbot Using Python", issuer: "GUVI × HCL", color: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/20" },
  { title: "Prompt Engineering", issuer: "Infosys Springboard", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
  { title: "AI Basics Webinar", issuer: "evo1tive", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
  { title: "UI/UX Webinar", issuer: "Brand Monk Academy", color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
  { title: "Digital Marketing Webinar", issuer: "Brand Monk Academy", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
  { title: "Data Analytics & AI Tools", issuer: "Reecsar Pvt. Ltd. × NPR College", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  { title: "Python Programming", issuer: "MSME-TDC", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  { title: "Java Programming", issuer: "MSME-TDC", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
];

const achievements = [
  { title: "Runner-Up — National Level Technical Quiz (ULTRIZ'25)", icon: "🥈", highlight: true },
  { title: "Participant — ULTRIZ'25 Technical Symposium", icon: "🏆", highlight: false },
  { title: "Participant — NEURAVERSE'26, Sethu Institute of Technology", icon: "🧠", highlight: false },
  { title: "Participant — THIRAN 2026 Hackathon, Sri Eshwar College", icon: "⚡", highlight: false },
  { title: "Participant — Science Tech Fest 2025, Dhanalakshmi Srinivasan University", icon: "🚀", highlight: false },
  { title: "CDIO Project Based Learning — NPR College R&D Cell", icon: "🔬", highlight: false },
  { title: "Marathon Awareness Program — Participation Certificate", icon: "🏃", highlight: false },
  { title: "Active participant in multiple workshops, webinars and technical events", icon: "📚", highlight: false },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-16">
            Certifications<span className="text-gradient">.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`glass p-5 rounded-2xl border ${cert.bg} flex items-start gap-3 transition-all cursor-default`}
              >
                <CheckCircle2 size={18} className={`${cert.color} shrink-0 mt-0.5`} />
                <div>
                  <p className="text-foreground/90 font-semibold text-sm leading-snug">{cert.title}</p>
                  <p className={`text-xs font-medium mt-1.5 ${cert.color} opacity-80`}>{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">Milestones</p>
            <div className="flex-1 h-px bg-primary/20" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-16">
            Achievements<span className="text-gradient">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 glass p-5 rounded-2xl border transition-all ${item.highlight ? "border-amber-500/40 bg-amber-500/5" : "border-white/10 hover:border-primary/30"}`}
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <p className={`font-medium leading-snug ${item.highlight ? "text-amber-400" : "text-foreground/80"}`}>
                  {item.title}
                  {item.highlight && (
                    <span className="ml-2 text-xs font-bold bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30">🌟 Highlight</span>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="glass p-10 rounded-3xl border border-primary/20 bg-primary/5 max-w-3xl mx-auto">
            <div className="text-4xl text-primary mb-6 font-serif">&ldquo;</div>
            <p className="text-xl md:text-2xl font-semibold text-foreground/90 leading-relaxed italic">
              My goal is to leverage technology and innovation to create impactful solutions and contribute to society.
            </p>
            <div className="mt-6 text-primary font-bold">— Hariprasath L</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
