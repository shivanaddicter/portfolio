"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Star } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const roles = ["Fullstack Developer", "AI & DS Student", "Future AI Engineer", "IoT Enthusiast", "Problem Solver"];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[120px] animate-blob animation-delay-2000" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 w-fit"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                Open to Internships & Opportunities
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-foreground/50 text-lg font-medium mb-3 tracking-wide">Hello, I&apos;m</p>
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-none">
                <span className="block text-foreground">Hariprasath</span>
                <span className="block text-gradient mt-1">L</span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-3">
                {["AI & DS Student", "Fullstack Developer", "Future AI Engineer"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-foreground/70">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-foreground/60 leading-relaxed max-w-xl"
            >
              Passionate AI & Data Science student with strong foundation in Machine Learning, Full Stack Development, and IoT. Actively participating in hackathons, symposiums and workshops to enhance technical and leadership skills.
              <span className="text-foreground/80 font-medium"> &ldquo;Code. Learn. Innovate. Impact.&rdquo;</span>
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 text-foreground/50 text-sm"
            >
              <MapPin size={14} className="text-primary" />
              <span>Madurai, Tamil Nadu, India</span>
              <span className="mx-2 text-foreground/20">|</span>
              <Mail size={14} className="text-primary" />
              <span>+91 8667338545</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#projects"
                className="group flex items-center gap-2 px-8 py-4 bg-primary rounded-2xl font-semibold text-white hover:bg-blue-500 transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="/resume"
                className="flex items-center gap-2 px-8 py-4 glass rounded-2xl font-semibold text-foreground hover:bg-white/10 transition-all border border-white/10">
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-4 border-t border-white/5"
            >
              <span className="text-xs text-foreground/40 font-medium uppercase tracking-wider">Connect</span>
              {[
                { Icon: FaGithub, href: "https://github.com/shivanaddicter", label: "GitHub" },
                { Icon: FaLinkedin, href: "https://linkedin.com/in/hariprasath-l-5b6b40312", label: "LinkedIn" },
                { Icon: FaInstagram, href: "https://instagram.com/hari_prasathl", label: "Instagram" },
                { Icon: FaXTwitter, href: "https://x.com/Hari_prasathl", label: "Twitter" },
                { Icon: Mail, href: "mailto:hariprasath72788@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-foreground/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all hover:scale-110">
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats Card Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-6"
          >
            {/* Main Profile Card */}
            <div className="glass rounded-3xl p-8 border border-white/10 glow-blue relative overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 shimmer pointer-events-none rounded-3xl" />
              
              <div className="relative flex flex-col items-center text-center gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary via-blue-400 to-violet-600 flex items-center justify-center text-5xl font-black text-white pulse-glow">
                    H
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-2 border-card flex items-center justify-center">
                    <Star size={12} fill="white" className="text-white" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-foreground">Hariprasath L</h2>
                  <span className="text-primary font-medium mt-1">AI Developer · ML Engineer · Full Stack Developer · IoT Innovator</span>
                  <p className="text-foreground/50 text-sm mt-2">NPR College of Engineering & Technology</p>
                </div>

                {/* Tamil */}
                <div className="w-full p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <p className="text-base font-bold text-foreground" lang="ta">கற்றலே வாழ்க்கை; கட்டுவதே லட்சியம்.</p>
                  <p className="text-xs text-foreground/50 mt-1 italic">Learning is life; building is the goal.</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "8.07", label: "CGPA", color: "from-blue-500 to-cyan-400" },
                { value: "6+", label: "Projects", color: "from-violet-500 to-purple-400" },
                { value: "10+", label: "Certifications", color: "from-emerald-500 to-green-400" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass rounded-2xl p-5 border border-white/10 text-center"
                >
                  <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/50 font-medium mt-1 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Floating Tech Pills */}
            <div className="flex flex-wrap gap-2">
              {["Python", "React", "Django", "Next.js", "TensorFlow", "IoT", "MySQL", "Git"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 text-xs font-medium glass border border-white/10 rounded-full text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border border-foreground/20 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
