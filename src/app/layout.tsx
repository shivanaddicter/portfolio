import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hariprasath L | AI Engineer & Full Stack Developer",
  description: "Portfolio of Hariprasath L, an AI & Data Science student specializing in Machine Learning, Full Stack Web Development, and IoT solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
