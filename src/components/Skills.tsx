import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import {
  Code2,
  Database,
  Cloud,
  Boxes,
  GitBranch,
  Users,
  MessageSquare,
  Lightbulb,
  Waves,
  Handshake,
  ShieldCheck,
  GraduationCap,
  RefreshCw,
  TrendingUp,
  Timer,
} from "lucide-react";

export function Skills() {
  const technicalSkills = [
  { name: "Java", icon: Code2 },
  { name: "React", icon: Code2 },
  { name: "React-Native", icon: Code2 },
  { name: "Spring Boot", icon: Code2 },
  { name: "Angular", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "HTML5", icon: Code2 },
  { name: "CSS3", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "Docker", icon: Boxes },
  { name: "Kubernetes", icon: Boxes },
  { name: "Azure", icon: Cloud },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Hibernate", icon: Database },
  { name: "JPA", icon: Database },
  { name: "Maven", icon: GitBranch },
  { name: "Git", icon: GitBranch },
  { name: "CI/CD", icon: GitBranch },
  { name: "Microservices", icon: Boxes },
  { name: "RESTful APIs", icon: Boxes },
  { name: "Event-Driven Architecture", icon: Boxes },
  { name: "DDD (Domain-Driven Design)", icon: Boxes },
  { name: "Clean Architecture", icon: Boxes },
  ];

  const softSkills = [
  { name: "Collaboration", icon: Users, hint: "Works cross-functionally to unblock and deliver." },
  { name: "Clear Communication", icon: MessageSquare, hint: "Aligns scope, risks, and decisions with non-tech stakeholders." },
  //{ name: "Stakeholder Management", icon: Handshake, hint: "Builds trust, manages expectations, and handles trade-offs." },
  { name: "Problem Solving", icon: Lightbulb, hint: "Breaks down ambiguity and ships pragmatic solutions." },
  //{ name: "Leadership & Ownership", icon: ShieldCheck, hint: "Takes responsibility end-to-end; drives initiatives to completion." },
  { name: "Mentoring & Knowledge Sharing", icon: GraduationCap, hint: "Uplifts the team with coaching, reviews, and docs." }, 
  { name: "Adaptability", icon: RefreshCw, hint: "Handles change fast—new priorities, tech, or constraints." },
  { name: "Results-Driven", icon: TrendingUp, hint: "Focuses on outcomes, impact, and measurable value." },
  { name: "Time Management", icon: Timer, hint: "Prioritizes effectively and meets deadlines." },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1a1a2e] mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full">
              <h3 className="text-[#1a1a2e] mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-blue-500" />
                Technical Skills
              </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { delay: 0, duration: 0.3 },
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="w-full justify-start px-4 py-2 bg-blue-50 text-blue-500 hover:bg-blue-100 flex items-center gap-2 cursor-default"
                  >
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 h-full">
              <h3 className="text-[#1a1a2e] mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-500" />
                Soft Skills
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ 
                      x: 5,
                      transition: { delay: 0, duration: 0.4 }, 
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <skill.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
