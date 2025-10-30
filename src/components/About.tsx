import { Code2, Users, Lightbulb, Target } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Good use of DDD and clean code principles",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Mentoring and collaborating with development teams",
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
              Henrique is a Brazilian software developer with over <span className="text-blue-600">3 years of experience</span> designing and building internal applications for various companies. He has progressed rapidly in his career thanks to <span className="text-blue-600">efficiency</span> and <span className="text-blue-600">strong teamwork</span>, focusing on improving productivity and optimizing business operations through unique, scalable, and high-quality software solutions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Driven by a passion for <span className="text-blue-600">software development</span> and clean code, Henrique also has hands-on experience supporting development teams to establish coding standards and enhance collaboration. He enjoys working with agile methodologies and continuously seeks to deliver efficient, maintainable, and impactful software that drives real results.
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
