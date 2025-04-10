
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              <span className="text-primary">Madhu</span> / Madhumitha S
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              Aspiring Data Scientist & Web Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 italic">
              "Passionate about building AI-based solutions and web
              applications."
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:madhus272004@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>madhus272004@gmail.com</span>
              </a>
              <a
                href="tel:9344176421"
                className="flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>9344176421</span>
              </a>
            </div>

            <div className="flex gap-4">
              <Button asChild variant="default">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/resume.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors dark:bg-gray-800"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors dark:bg-gray-800"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-400 rounded-full blur opacity-70"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80 border-4 border-white dark:border-gray-800">
                {/* Replace with your actual photo */}
                <img
                  src="public/mine.jpg"
                  alt="Madhumitha S"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
