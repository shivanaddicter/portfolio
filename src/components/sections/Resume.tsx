"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Download, ArrowLeft, GraduationCap, Briefcase, Code, Award, BookOpen, Star, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export function ResumeContent() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Top Actions */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/" className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-sm font-medium">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-primary/30"
          >
            <Download size={16} /> Download / Print
          </button>
        </div>

        {/* Resume Card */}
        <div className="glass rounded-3xl border border-white/10 overflow-hidden print:bg-white print:text-black print:border-gray-200 print:shadow-none">

          {/* Header */}
          <div className="bg-gradient-to-r from-primary/20 via-blue-600/10 to-violet-600/20 p-10 border-b border-white/10 print:bg-blue-50">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center text-4xl font-black text-white shrink-0">
                H
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight print:text-gray-900">
                  HARIPRASATH L
                </h1>
                <p className="text-primary font-bold text-lg mt-1">AI & DATA SCIENCE STUDENT</p>
                <div className="flex flex-wrap gap-3 mt-3 text-sm text-foreground/60">
                  <span className="flex items-center gap-1"><span className="text-foreground/40">AI Developer</span></span>
                  <span className="text-foreground/30">|</span>
                  <span>ML Engineer</span>
                  <span className="text-foreground/30">|</span>
                  <span>Full Stack Developer</span>
                  <span className="text-foreground/30">|</span>
                  <span>IoT Innovator</span>
                </div>
              </div>
            </div>

            {/* Contact Row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-foreground/70">
              <a href="mailto:hariprasath72788@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" /> hariprasath72788@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="text-primary" /> +91 8667338545
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" /> Madurai, Tamil Nadu, India
              </span>
              <a href="https://github.com/shivanaddicter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <FaGithub size={14} className="text-primary" /> github.com/shivanaddicter
              </a>
              <a href="https://linkedin.com/in/hariprasath-l-5b6b40312" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <FaLinkedin size={14} className="text-primary" /> linkedin.com/in/hariprasath-l
              </a>
              <a href="https://instagram.com/hari_prasathl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <FaInstagram size={14} className="text-primary" /> @hari_prasathl
              </a>
            </div>
          </div>

          <div className="p-10 space-y-10">
            {/* About */}
            <section>
              <SectionTitle icon={BookOpen} title="ABOUT ME" />
              <p className="text-foreground/70 leading-relaxed">
                Passionate AI & Data Science student with strong foundation in Machine Learning, Full Stack Development, and IoT. I enjoy building real-world solutions that solve meaningful problems. Actively participating in hackathons, symposiums and workshops to enhance my technical and leadership skills.
              </p>
            </section>

            {/* Education */}
            <section>
              <SectionTitle icon={GraduationCap} title="EDUCATION" />
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-foreground text-base">B.Tech — Artificial Intelligence & Data Science</h3>
                    <p className="text-foreground/60 text-sm">NPR College of Engineering and Technology (Autonomous)</p>
                    <p className="text-foreground/50 text-sm">Affiliated to Anna University, Chennai</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-foreground/50">2024 – 2028</p>
                    <p className="font-bold text-primary">CGPA: 8.07 (Till 3rd Year)</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-foreground text-base">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-foreground/60 text-sm">Arulmigu Palaniandavar Arts College, Palani</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-foreground/50">2022 – 2024</p>
                    <p className="font-bold text-primary">Score: 89.8%</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <SectionTitle icon={Briefcase} title="EXPERIENCE" />
              <div className="flex flex-col md:flex-row md:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-bold text-foreground text-base">Machine Learning Intern</h3>
                  <p className="text-primary font-medium text-sm">Elysium Technologies Pvt. Ltd.</p>
                </div>
                <p className="text-sm text-foreground/50 shrink-0">June 2026 – June 2026</p>
              </div>
              <ul className="space-y-2 text-foreground/70 text-sm">
                {[
                  "Worked on data preprocessing, feature engineering and model training.",
                  "Implemented ML models for real-world datasets.",
                  "Analyzed data and generated visualizations for insights.",
                  "Gained hands-on experience in Python, ML and data analysis.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Skills */}
            <section>
              <SectionTitle icon={Code} title="TECHNICAL SKILLS" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {[
                  { label: "Programming", value: "Python, Java, HTML, CSS, JavaScript" },
                  { label: "Frameworks", value: "Django, Flask, Bootstrap" },
                  { label: "Databases", value: "MySQL, SQLite" },
                  { label: "Tools & Technologies", value: "Git & GitHub, VS Code, Streamlit, Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn" },
                  { label: "Soft Skills", value: "Problem Solving, Teamwork, Adaptability, Time Management, Continuous Learning" },
                  { label: "Languages", value: "Tamil (Native), English (Professional)" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="font-bold text-foreground text-xs uppercase tracking-wider">{label}</span>
                    <p className="text-foreground/70 mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <SectionTitle icon={Star} title="FEATURED PROJECTS" />
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Student Dashboard", desc: "QR Attendance, Live Bus Tracking, Study Materials, Assignments & Analytics", tech: "Django, SQLite, HTML, CSS, JS" },
                  { title: "Crop Yield Prediction System", desc: "Weather & Soil Analysis, ML Model Training, Yield Prediction, Interactive Dashboard", tech: "Python, Django, Scikit-Learn" },
                  { title: "Haya Health Care", desc: "Kidney Disease Prediction, Health Parameter Analysis, Reports & Visualizations, CSV Upload & Download", tech: "Python, Streamlit, ML" },
                  { title: "Living Root Internet", desc: "Underground Root Network, IoT Sensor Monitoring, LoRa/Wi-Fi Gateway, Cloud Dashboard", tech: "IoT, LoRa, ESP32, Firebase" },
                  { title: "Thermoshield Ecobrick", desc: "Fire-Resistant Eco Brick, Agricultural Waste Utilization, Cooling & Interlocking Design", tech: "Material Science, IoT" },
                  { title: "Cybershield AI", desc: "AI-Based Threat Detection, Malware & Phishing Detection, Risk Scoring & Prediction", tech: "Python, ML, Cybersecurity" },
                ].map((project, i) => (
                  <div key={i} className="glass p-4 rounded-xl border border-white/10 print:border-gray-200">
                    <h4 className="font-bold text-foreground text-sm">{project.title}</h4>
                    <p className="text-foreground/60 text-xs mt-1 leading-relaxed">{project.desc}</p>
                    <p className="text-primary text-xs font-medium mt-2">Tech: {project.tech}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <SectionTitle icon={Award} title="CERTIFICATIONS" />
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-foreground/70">
                {[
                  "Machine Learning Internship — Elysium Technologies",
                  "Python Full Stack Developer — Elysium Academy",
                  "Applied AI (Statistics to NLP) — GUVI × HCL",
                  "Build & Deploy AI Apps with Google AI Studio — GUVI × HCL",
                  "Building a Chatbot Using Python — GUVI × HCL",
                  "Prompt Engineering — Infosys Springboard",
                  "AI Basics Webinar — evo1tive",
                  "UI/UX Webinar — Brand Monk Academy",
                  "Digital Marketing Webinar — Brand Monk Academy",
                  "Data Analytics & AI Tools — Reecsar Pvt. Ltd. × NPR College",
                  "Python Programming — MSME-TDC",
                  "Java Programming — MSME-TDC",
                ].map((cert, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

            {/* Achievements */}
            <section>
              <SectionTitle icon={Award} title="ACHIEVEMENTS" />
              <ul className="space-y-2 text-sm text-foreground/70">
                {[
                  "Runner-Up — National Level Technical Quiz (ULTRIZ'25)",
                  "Participant — ULTRIZ'25 Technical Symposium",
                  "Participant — NEURAVERSE'26, Sethu Institute of Technology",
                  "Participant — THIRAN 2026 Hackathon, Sri Eshwar College",
                  "Participant — Science Tech Fest 2025, Dhanalakshmi Srinivasan University",
                  "CDIO Project Based Learning — NPR College R&D Cell",
                  "Marathon Awareness Program — Participation Certificate",
                  "Active participant in multiple workshops, webinars and technical events",
                ].map((ach, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {ach}
                  </li>
                ))}
              </ul>
            </section>

            {/* Interests */}
            <section>
              <SectionTitle icon={Heart} title="INTERESTS" />
              <div className="flex flex-wrap gap-2">
                {["AI & ML", "Cybersecurity", "IoT", "Web Dev", "Reading", "Travel"].map((i) => (
                  <span key={i} className="px-4 py-1.5 text-sm font-medium glass border border-white/10 rounded-full text-foreground/70 print:border-gray-200">
                    {i}
                  </span>
                ))}
              </div>
            </section>

            {/* Footer Quote */}
            <div className="text-center pt-6 border-t border-white/10 print:border-gray-200">
              <p className="text-primary font-semibold italic">
                &ldquo;My goal is to leverage technology and innovation to create impactful solutions and contribute to society.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5 pb-2 border-b border-white/10 print:border-gray-200">
      <Icon size={18} className="text-primary" />
      <h2 className="text-sm font-black text-foreground tracking-widest uppercase">{title}</h2>
    </div>
  );
}
