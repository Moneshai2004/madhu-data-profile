
import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Car, Bus, Hospital, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Phishing Detection System",
    description: "AI-powered system that classifies emails and URLs as phishing or legitimate with high detection accuracy.",
    icon: <Shield size={24} />,
    tags: ["Python", "Machine Learning", "Security"],
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Baby Cry Monitoring System",
    description: "IoT-based project for infant safety using sensors to detect and alert caregivers about baby cries.",
    icon: <Headphones size={24} />,
    tags: ["IoT", "Sensors", "Arduino"],
    color: "from-pink-400 to-purple-500"
  },
  {
    title: "Lane Following Rover",
    description: "Autonomous vehicle with UV and IR sensors for lane tracking and obstacle avoidance.",
    icon: <Car size={24} />,
    tags: ["Robotics", "Computer Vision", "Sensors"],
    color: "from-green-400 to-teal-500"
  },
  {
    title: "Mini Bus Reservation System",
    description: "Developed booking system for efficient seat allocation and management of bus routes.",
    icon: <Bus size={24} />,
    tags: ["Java", "Database", "UI/UX"],
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Hospital Management System",
    description: "Centralized app to manage patient data, appointments, and billing for healthcare facilities.",
    icon: <Hospital size={24} />,
    tags: ["Database", "UI", "System Design"],
    color: "from-cyan-400 to-blue-500"
  }
];

export default function Projects() {
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
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="h-full"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-2 rounded-md bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start gap-2">
                  <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300">
                    <Github size={16} className="mr-1" />
                    View Code
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300">
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
