
import { motion } from "framer-motion";
import { 
  Code, Database, ChartBar, Terminal, 
  Globe, Bot, BarChart, FileSpreadsheet 
} from "lucide-react";

const skills = [
  {
    category: "Programming",
    items: ["Python", "Java", "SQL", "HTML"],
    icon: <Code size={24} />,
    color: "from-blue-400 to-blue-600"
  },
  {
    category: "Data Tools",
    items: ["Power BI", "MS Office"],
    icon: <ChartBar size={24} />,
    color: "from-yellow-400 to-orange-500"
  },
  {
    category: "Automation",
    items: ["Selenium"],
    icon: <Bot size={24} />,
    color: "from-green-400 to-emerald-600"
  },
  {
    category: "Web Technologies",
    items: ["HTML"],
    icon: <Globe size={24} />,
    color: "from-purple-400 to-purple-600"
  }
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Here are some technologies and tools I've been working with
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-md bg-gradient-to-r ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <h3 className="ml-3 text-xl font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
