"use client";

import Link from "next/link";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center font-black text-white text-lg">H</div>
              <span className="text-xl font-black text-foreground">Hariprasath<span className="text-primary">.</span></span>
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
              Fullstack Developer & Future AI Engineer. Building smart solutions for a better tomorrow.
            </p>
            <p className="text-primary font-bold text-sm" lang="ta">
              கற்றலே வாழ்க்கை; கட்டுவதே லட்சியம்.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-3">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-foreground/60 hover:text-primary transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-6">Connect</h3>
            <div className="space-y-3 text-sm mb-6">
              <a href="mailto:hariprasath72788@gmail.com" className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" /> hariprasath72788@gmail.com
              </a>
              <div className="flex items-center gap-3 text-foreground/60">
                <MapPin size={14} className="text-primary" /> Madurai, Tamil Nadu, India
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { Icon: FaGithub, href: "https://github.com/shivanaddicter", label: "GitHub" },
                { Icon: FaLinkedin, href: "https://linkedin.com/in/hariprasath-l-5b6b40312", label: "LinkedIn" },
                { Icon: FaInstagram, href: "https://instagram.com/hari_prasathl", label: "Instagram" },
                { Icon: FaXTwitter, href: "https://x.com/Hari_prasathl", label: "X (Twitter)" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 flex items-center justify-center glass border border-white/10 rounded-xl text-foreground/60 hover:text-primary hover:border-primary/40 transition-all hover:scale-110">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Hariprasath L. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-foreground/40 hover:text-primary text-sm font-medium transition-colors group"
          >
            Back to top
            <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
