import { Code2, Users, Lightbulb, Target } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Expert in DDD and clean code principles",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Mentoring and guiding development teams",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Driving digital transformation initiatives",
    },
    {
      icon: Target,
      title: "Agile Mindset",
      description: "Experienced in agile methodologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1a1a2e] mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              Henrique is a Brazilian software engineer with over a <span className="text-blue-600">8 years of experience</span> building enterprise systems for financial and public-sector clients. His journey in software development has been marked by a relentless pursuit of excellence and innovation.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              He is passionate about <span className="text-blue-600">software architecture</span>, clean code, and team leadership. With deep expertise in Domain-Driven Design (DDD), clean architecture patterns, and agile methodologies, Henrique transforms complex business requirements into elegant, scalable solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Currently pursuing an <span className="text-blue-600">MBA in Software Engineering</span> at FIAP, he continues to expand his knowledge and stay at the forefront of technology trends, always seeking to deliver value through quality software.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  <highlight.icon className="w-10 h-10 text-blue-500 mb-3" />
                  <h4 className="text-[#1a1a2e] mb-2">{highlight.title}</h4>
                  <p className="text-gray-600">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
