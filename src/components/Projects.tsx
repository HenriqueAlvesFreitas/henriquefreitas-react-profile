import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ExternalLink, Apple, ShoppingBag,
    Building2,
  Code2,       // Java
  Leaf,        // Spring Boot
  Database,    // MongoDB / PostgreSQL
  Cloud,       // AWS
  ServerCog,   // Kafka / infra
  Hexagon,     // Angular
  Waves,       // SonarQube
  GitBranch,   // GitHub / Actions
  Workflow,    // Microservices
  Ship,        // Docker
  Boxes,       // Kubernetes
  Atom,        // React
  Cog,
 } from "lucide-react";



export function Projects() {
  
  const projects = [
  {
    title: "PCL",
    description: "MBA capstone project connecting nutritionists with healthy meal providers. Built a comprehensive platform enabling seamless communication, meal planning, and order management with real-time updates and personalized recommendations.",
    icon: Apple,
    color: "from-green-500 to-teal-500",
    technologies: [
      { name: "React", icon: Atom },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "Spring Boot", icon: Leaf },
      { name: "Pub/Sub", icon: ServerCog },
      { name: "Microservices", icon: Workflow },
      { name: "Azure", icon: Cloud },
      { name: "MySQL", icon: Database },
      { name: "SQLServer", icon: Database },
      { name: "Kubernetes", icon: Boxes },
      { name: "VBScript", icon: Code2 },
      { name: "ERP Automation", icon: Cog },
      { name: "Git", icon: GitBranch },
    ],
  },
    {
    title: "MCC",
    description:
      "Architected and implemented a scalable microservice-based system integrating complex banking operations. Designed an event-driven architecture handling thousands of transactions daily with high availability and security compliance.",
    icon: Building2,
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Java", icon: Code2 },
      { name: "Spring Boot", icon: Leaf },
      { name: "React", icon: Atom },
      { name: "TypeScript", icon: Code2 },
      { name: "Postgres", icon: Database },
      { name: "S3", icon: Database },
      { name: "Azure", icon: Cloud },
      { name: "Kubernetes", icon: Boxes },
      { name: "Git", icon: GitBranch },
    ],
  },

  {
    title: "e-MCM",
    description:
      "Led digital transformation initiative for a major retail business. Developed a modern e-commerce platform with inventory management, real-time order tracking, and integrated payment systems, resulting in a 40% increase in online sales.",
    icon: ShoppingBag,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", icon: Atom },
      { name: "TypeScript", icon: Code2 },
      { name: "SQLServer", icon: Database },
      { name: "Azure", icon: Cloud },
      { name: "Git", icon: GitBranch },
    ],
  },
 
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1a1a2e] mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-6 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-[#1a1a2e] mb-3 flex items-center justify-between">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

              {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => {
                    const Icon = tech.icon; // lucide-react component
                    return (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 inline-flex items-center gap-1.5"
                        title={tech.name}
                      >
                        {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                        <span>{tech.name}</span>
                      </Badge>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
