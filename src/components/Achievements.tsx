
import { motion } from "framer-motion";
import { Trophy, Code, LightbulbIcon } from "lucide-react";

const achievements = [
  {
    title: "AI & Data Science Workshops",
    description: "Participated in various workshops to enhance knowledge in artificial intelligence and data science techniques.",
    icon: <LightbulbIcon size={24} />
  },
  {
    title: "Hackathons & Coding Competitions",
    description: "Active participant in competitive programming events, developing solutions under time constraints.",
    icon: <Code size={24} />
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">
            <span className="text-primary">Achievements</span> & Activities
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-10">
            <div className="p-4 bg-primary text-white rounded-full">
              <Trophy size={32} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
