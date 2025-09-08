"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Placement Management System",
      description: "Full-stack Placement Management System for KG Microcollege using Next.js and Oracle SQL to streamline and digitize the placement workflow.",
      tech: ["Next.js", "Tailwind CSS", "Oracle SQL"],
      github: "https://github.com/Balachandran2729/Placement-Management-System",
      demo: "#"
    },
    {
      title: "Sea Border Intrusion Detection System",
      description: "GPS-based system with ESP32 to alert fishermen on sea border crossings. Includes GSM SMS alerts, OLED display, and voice warnings.",
      tech: ["ESP32", "Arduino", "MongoDB", "Dezongo"],
      github: "https://github.com/Balachandran2729/Sea-Border-Intrusion-Detection-System",
      demo: "#"
    },
    {
      title: "RoutePlus-College Bus Tracking App",
      description: "Real-time bus tracking app using React Native, Firebase, and GPS-enabled ESP32 to display live bus locations with geofencing.",
      tech: ["React Native", "Firebase", "ESP32", "GPS"],
      github: "https://github.com/Balachandran2729/RoutePlus",
      demo: "#"
    },
    {
      title: "DevConnect-Student Project Upload Website",
      description: "Full-stack profile management system using React, Node.js/Express, and MongoDB with live editing capabilities.",
      tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Balachandran2729/DevConnect",
      demo: "#"
    },
    {
      title: "API-Driven Dynamic Page Rendering in Next.js",
      description: "Reusable Next.js UI component for API documentation pages with live JSON payload preview and animated dynamic fields.",
      tech: ["Next.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/Balachandran2729/PageRouting",
      demo: "https://pagerouting.vercel.app/"
    },
    {
      title: "Smart Helpdesk Web Application",
      description: "MERN stack app with agentic triage workflow for faster support featuring role-based access and Docker deployment.",
      tech: ["MERN Stack", "JWT", "Docker"],
      github: "https://github.com/Balachandran2729/Smart-Helpdesk-Web-Application",
      demo: "#"
    },
    {
      title: "Task Distribution System",
      description: "Full-stack MERN application for automated task distribution among agents with admin authentication and fair allocation algorithm.",
      tech: ["MERN", "JWT", "Next.js", "MongoDB"],
      github: "https://github.com/Balachandran2729/Task-Distribution-System",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}