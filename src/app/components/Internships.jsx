"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Internships() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const internships = [
    {
      company: "KGiSL",
      role: "MERN FullStack Intern",
      duration: "2 Months",
      description: "Developed a full-stack web application for the KG Microcollege Placement Team using Next.js during internship."
    },
    {
      company: "Tech Sakthi Solution",
      role: "Digital Marketing Intern",
      duration: "1 Month",
      description: "Completed an internship in Digital Marketing, gaining hands-on experience in SEO, content strategy, and online advertising."
    },
    {
      company: "DURGA-TECH",
      role: "Full-Stack Development Intern",
      duration: "1 Month",
      description: "Developed responsive web applications using HTML, CSS, JavaScript, and frameworks like React. Collaborated in team environments."
    }
  ];

  return (
  <section id="internships" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Internship Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              className="mb-10 relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500"></div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{internship.role}</h3>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {internship.duration}
                  </span>
                </div>
                <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{internship.company}</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{internship.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}