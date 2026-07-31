"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled ? "glass border-b border-white/5 py-3 shadow-2xl shadow-black/20" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center font-bold text-white text-sm">H</div>
          <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Hariprasath<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-all">
              {link.name}
            </Link>
          ))}
          <a href="/resume"
            className="ml-3 px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-primary/30">
            Resume
          </a>
        </nav>

        <button className="md:hidden text-foreground p-2 hover:bg-white/5 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full glass border-b border-white/5 flex flex-col py-4 gap-1 md:hidden">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}
                className="px-6 py-3 text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="px-6 pt-3 border-t border-white/5 mt-2">
              <a href="/resume" className="block text-center py-3 bg-primary text-white rounded-full font-semibold text-sm">Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
