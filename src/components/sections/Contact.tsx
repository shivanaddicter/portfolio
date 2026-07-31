"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const socials = [
  { Icon: FaGithub, href: "https://github.com/shivanaddicter", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://linkedin.com/in/hariprasath-l-5b6b40312", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://instagram.com/hari_prasathl", label: "Instagram" },
  { Icon: FaXTwitter, href: "https://x.com/Hari_prasathl", label: "X (Twitter)" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Let&apos;s Talk</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground">
            Get In <span className="text-gradient">Touch.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/60 max-w-2xl mx-auto">
            I&apos;m actively looking for internships and opportunities. Whether you have a project, question, or just want to say hello — my inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hariprasath72788@gmail.com", href: "mailto:hariprasath72788@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Madurai, Tamil Nadu, India", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href}
                    className="flex items-center gap-5 glass p-5 rounded-2xl border border-white/10 hover:border-primary/40 transition-all group">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 font-semibold uppercase tracking-wider">{label}</p>
                      <p className="text-foreground/80 font-medium mt-0.5">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-5">Follow Me</h3>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-12 h-12 flex items-center justify-center glass border border-white/10 rounded-xl text-foreground/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all hover:scale-110">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass p-6 rounded-2xl border border-green-500/30 bg-green-500/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </div>
                <span className="font-bold text-green-400">Currently Available</span>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Open to internship opportunities, freelance projects, and full-time positions. Based in Madurai — available for remote work.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form className="glass p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
              <p className="text-foreground/50 text-sm">I&apos;ll respond within 24 hours.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">Your Name</label>
                  <input id="name" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/60 focus:bg-primary/5 transition-all text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">Email Address</label>
                  <input id="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/60 focus:bg-primary/5 transition-all text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">Your Message</label>
                <textarea id="message" rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Hariprasath, I wanted to reach out about..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/60 focus:bg-primary/5 transition-all text-sm resize-none" />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-primary rounded-2xl font-bold text-white text-base hover:bg-blue-500 transition-all shadow-2xl shadow-primary/30"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
