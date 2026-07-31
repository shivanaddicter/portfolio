"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, Mail, Globe } from "lucide-react";

const skills = ["AI & ML", "IoT", "Cybersecurity", "Web Dev", "Problem Solving", "Hackathons", "Innovation"];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Who I Am</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground">
            About <span className="text-gradient">Me.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-xl text-foreground/70 leading-relaxed">
              I am an AI Engineer and Full Stack Developer from <span className="text-foreground font-semibold">Madurai, Tamil Nadu</span>, 
              passionate about building intelligent systems and scalable digital experiences. 
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Currently pursuing my <span className="text-primary font-semibold">3rd Year B.Tech in AI & Data Science</span> at NPR College of Engineering and Technology. 
              I love turning complex real-world problems into clean, impactful solutions using modern technology and innovative thinking.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: "Date of Birth", value: "08 March 2007" },
                { icon: MapPin, label: "Location", value: "Madurai, Tamil Nadu" },
                { icon: Mail, label: "Email", value: "hariprasath72788@gmail.com" },
                { icon: Globe, label: "Languages", value: "Tamil, English" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass p-4 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={14} className="text-primary" />
                    <span className="text-xs text-foreground/40 font-semibold uppercase tracking-wider">{label}</span>
                  </div>
                  <p className="text-sm text-foreground/80 font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-foreground/50 text-xs font-bold uppercase tracking-widest mb-4">Interests & Passion</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm font-medium glass border border-white/10 rounded-full text-foreground/70 hover:text-primary hover:border-primary/40 cursor-default transition-colors"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tamil Quote */}
            <div className="p-6 rounded-2xl border-l-4 border-primary bg-primary/5">
              <p className="text-2xl font-bold text-foreground" lang="ta">கற்றலே வாழ்க்கை; கட்டுவதே லட்சியம்.</p>
              <p className="text-sm text-foreground/50 italic mt-2">&quot;Learning is life; building is the goal.&quot;</p>
            </div>
          </motion.div>

          {/* Right Side — Education & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Education Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            {/* Education Cards */}
            {[
              {
                degree: "B.Tech — Artificial Intelligence & Data Science",
                institution: "NPR College of Engineering & Technology (Autonomous)",
                period: "2024 – 2028",
                cgpa: "8.07 CGPA",
                status: "Pursuing",
                year: "3rd Year",
                color: "border-primary/40",
                badge: "bg-primary/20 text-primary",
              },
              {
                degree: "Higher Secondary Certificate (HSC)",
                institution: "Elango Corporation Higher Secondary School",
                period: "2022 – 2024",
                cgpa: "68.9%",
                status: "Completed",
                color: "border-emerald-500/30",
                badge: "bg-emerald-500/20 text-emerald-400",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`glass p-6 rounded-2xl border ${edu.color} hover:scale-[1.01] transition-transform`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="font-bold text-foreground text-base leading-tight">{edu.degree}</h4>
                  <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${edu.badge}`}>{edu.status}</span>
                </div>
                <p className="text-sm text-foreground/60 mb-4">{edu.institution}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-foreground/40">{edu.period}</span>
                  <span className="w-1 h-1 bg-foreground/20 rounded-full" />
                  <span className="text-primary font-bold">{edu.cgpa}</span>
                  {edu.year && (
                    <>
                      <span className="w-1 h-1 bg-foreground/20 rounded-full" />
                      <span className="text-foreground/60 font-medium">{edu.year}</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Achievement Cards */}
            <div className="flex items-center gap-3 mt-8 mb-6">
              <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <Award size={24} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Quick Facts</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "8.07", label: "Current CGPA", gradient: "from-blue-500 to-cyan-400" },
                { value: "3rd", label: "Year of Study", gradient: "from-violet-500 to-purple-400" },
                { value: "6+", label: "Live Projects", gradient: "from-emerald-500 to-teal-400" },
                { value: "10+", label: "Certifications", gradient: "from-rose-500 to-pink-400" },
              ].map((fact) => (
                <motion.div
                  key={fact.label}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass p-5 rounded-2xl border border-white/10 text-center"
                >
                  <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br ${fact.gradient}`}>{fact.value}</div>
                  <div className="text-xs text-foreground/50 mt-1.5 font-medium">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
