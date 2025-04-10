
import { motion } from "framer-motion";
import { Code, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    title: "Java Programming Internship",
    company: "",
    period: "",
    description: "Focused on Java development, debugging, and optimization. Strengthened object-oriented programming and data structures knowledge.",
    skills: ["Java", "OOP", "Data Structures"],
    icon: <Code size={24} />,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Data Analysis & Visualization",
    company: "",
    period: "",
    description: "Data cleaning, visualization, and support in strategic decision-making using various data tools and techniques.",
    skills: ["Data Analysis", "Power BI", "Visualization"],
    icon: <BarChart size={24} />,
    color: "from-purple-400 to-purple-600"
  }
];

export default function Experience() {
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
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">
            Internships & <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Professional experiences that have shaped my skills
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-2 rounded-md bg-gradient-to-r ${exp.color} text-white`}>
                    {exp.icon}
                  </div>
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    {exp.company && (
                      <CardDescription>
                        {exp.company} {exp.period && `• ${exp.period}`}
                      </CardDescription>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
