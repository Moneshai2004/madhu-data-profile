
import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";

const languages = [
  {
    name: "English",
    level: "Fluent",
    progress: 90
  },
  {
    name: "Tamil",
    level: "Fluent",
    progress: 95
  }
];

export default function Languages() {
  return (
    <section id="languages" className="py-16 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">
            <span className="text-primary">Languages</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <LanguagesIcon size={24} />
            </div>
            <h3 className="text-xl font-medium">Language Proficiency</h3>
          </div>
          
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{lang.level}</span>
                </div>
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
