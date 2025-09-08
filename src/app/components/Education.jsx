"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: "B.E - Computer Science and Engineering",
      institution: "Akshaya College of Engineering and Technology",
      year: "2023 - 2026",
      gpa: "7.5 CGPA"
    },
    {
      degree: "Diploma - Electronics and Communication Engineering",
      institution: "Nachimuthu Polytechnic College",
      year: "2017 - 2020",
      gpa: "61%"
    },
    {
      degree: "SSLC",
      institution: "Sankar Ponnar Higher Secondary School",
      year: "2016 - 2017",
      gpa: "84%"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-10 relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500"></div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-1">{edu.institution}</h4>
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                  <span className="font-medium">{edu.year}</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {edu.gpa}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}