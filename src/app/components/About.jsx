"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
  <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Computer Science student with hands-on experience in the MERN stack and React Native. 
              My journey in technology has been driven by a desire to create solutions that make a real difference in people's lives.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With expertise in building full-stack applications, I focus on writing clean, scalable code that solves real-world problems. 
              Whether it's developing a placement management system or creating a smart helpdesk application, I approach each project with attention to detail and user experience.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me reading books, playing cricket, or exploring new technologies. 
              I believe in continuous learning and staying updated with industry trends to deliver innovative solutions.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Education</h3>
              <p className="text-gray-700 dark:text-gray-300">B.E Computer Science & Engineering</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Akshaya College of Engineering & Technology</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">3+ Internships</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Full Stack Development</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Projects</h3>
              <p className="text-gray-700 dark:text-gray-300">10+ Projects</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Full Stack Applications</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Skills</h3>
              <p className="text-gray-700 dark:text-gray-300">MERN Stack</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">React Native, Next.js</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}