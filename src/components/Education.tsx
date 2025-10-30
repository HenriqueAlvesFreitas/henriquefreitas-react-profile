import { GraduationCap, BookOpen } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function Education() {
  const education = [
    {
      degree: "MBA in Software Engineering",
      institution: "FIAP",
      period: "In Progress",
      description:
        "Advanced studies in software architecture, DevOps, cloud computing, and enterprise systems. Focus on modern architectural patterns, scalability, and software quality.",
      status: "current",
    },
    {
      degree: "Technologist in Systems Analysis and Development",
      institution: "FIAP",
      period: "2023",
      description:
        "Comprehensive education in software development, databases, algorithms, and system design. Graduated with distinction and recognition for academic excellence.",
      status: "completed",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1a1a2e] mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card
                className={`p-8 h-full border-gray-200 hover:shadow-xl transition-all duration-300 ${
                  edu.status === "current"
                    ? "border-blue-500 bg-gradient-to-br from-blue-50 to-white"
                    : "hover:border-blue-500"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                    edu.status === "current"
                      ? "bg-blue-400"
                      : "bg-gray-200"
                  }`}
                >
                  {edu.status === "current" ? (
                    <BookOpen className="w-7 h-7 text-white" />
                  ) : (
                    <GraduationCap className="w-7 h-7 text-gray-600" />
                  )}
                </div>
                
                {/* Degree */}
                <h3 className="text-[#1a1a2e] mb-2">{edu.degree}</h3>

                {/* Institution */}
                <div className="text-blue-400 mb-2">{edu.institution}</div>

                {/* Period */}
                {edu.status === "current" ? 
                  <div className="inline-block px-3 py-1 bg-blue-400 text-white rounded-full mb-4">
                    In Progress
                  </div>
                :
                  <div className="text-gray-500 mb-4">{edu.period}</div>
                }
                

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
