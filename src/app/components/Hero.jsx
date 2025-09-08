"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Balachandran</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Computer Science Student & Full Stack Developer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Passionate about building web and mobile applications to solve real-world problems through clean, scalable code.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/Balachandran2729"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/balachandran2729"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="mailto:balachandran2729@gmail.com"
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image 
                  src="/me.jpg" 
                  alt="Balachandran C" 
                  width={300} 
                  height={300}
                  className="object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                Open to Opportunities
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}