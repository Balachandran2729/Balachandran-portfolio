"use client"
import { useState, useEffect } from "react";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Internships from "@/app/components/Internships";
import Contact from "@/app/components/Contact";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-primary)' }}>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Internships />
      <Contact />
    </div>
  );
}