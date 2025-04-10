
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a fresher pursuing B.Tech in Artificial Intelligence and Data Science at Velammal Institute of Technology with a GPA of 8.4. I have strong skills in Python, Java, and Power BI.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm highly motivated to apply my knowledge to real-world problems, especially in web development and AI-based systems. My goal is to build innovative solutions that leverage the power of data and artificial intelligence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
