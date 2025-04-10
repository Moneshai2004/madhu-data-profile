
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  "Google Data Analytics",
  "Java Full Stack Developer",
  "Power BI Developer",
  "Blockchain Certification",
  "Data Analysis",
  "Digital Training on MS Office"
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">
            <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Professional certifications I've earned
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center gap-4 transform transition-transform hover:-translate-y-1"
            >
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Award size={24} />
              </div>
              <h3 className="font-medium text-lg">{cert}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
