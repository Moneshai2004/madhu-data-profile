
import { motion } from "framer-motion";
import { BookOpen, School } from "lucide-react";

const educations = [
  {
    title: "B.Tech, Artificial Intelligence and Data Science",
    institution: "Velammal Institute of Technology",
    period: "2022–Present",
    grade: "GPA: 8.4",
    icon: <School />,
  },
  {
    title: "Higher Secondary Education",
    institution: "Sethu Bhaskara Metric Hr Secondary School",
    period: "2020–2022",
    grade: "GPA: 8.0",
    icon: <BookOpen />,
  },
  {
    title: "Secondary Education",
    institution: "Sethu Bhaskara Metric Hr Secondary School",
    period: "2018–2020",
    grade: "GPA: 8.1",
    icon: <BookOpen />,
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300">
            My academic journey and qualifications
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10">
                  {edu.icon}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-gray-400 dark:text-gray-400">{edu.period}</p>
                    <p className="text-primary font-medium mt-2">{edu.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
