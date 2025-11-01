import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import logo_cbc from "../assets/cbc_logo.jpg";
import logo_nv from "../assets/logo_nv.png";
import logo_mills from "../assets/logo_mills.jpg";

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Mills",
      period: "Nov 2024 – Present",
      description:
        "Led digital transformation initiatives across core projects, centralizing critical information and enhancing user experience through intuitive interfaces. Implemented scalable microservices with Java, Spring Boot, React, and React Native. Mentored junior developers, guiding the team toward software design best practices.",
      icon: logo_mills,
      link: "https://www.mills.com.br/"
      
    },
    {
      title: "Mid Software Software Developer",
      company: "Release Sistemas (NV Tools)",
      period: "Oct 2023 – Nov 2024",
      description:
        "Delivered custom automation solutions using VBScript/ JavaScript on ERP systems for private organizations, focusing on performance optimization. Provided technical support and guidance for multiple concurrent projects and clients, ensuring quick high-quality deliverables and client satisfaction.",
      icon: logo_nv,
      link: "https://nvtools.com.br/"
    },
    {
      title: "Junior Software Developer",
      company: "CBC - Companhia Brasileira de Cartuchos",
      period: "Mar 2023 – Oct 2023",
      description:
        "Contributed to internal systems using React and Python, improving operational efficiency, system reliability and experience. Participated in code reviews, and collaborated with cross-functional teams to deliver innovative solutions.",
      icon: logo_cbc,
      link: "https://www.cbc.com.br/"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1a1a2e] mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex flex-col-reverse md:flex-row gap-6 items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:text-left" : "md:text-left"
                }`}
              >
                <Card className="p-6 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full mb-3">
                    {exp.period}
                  </div>
                  <h3 className="text-[#1a1a2e] mb-2">{exp.title}</h3>
                  <div className="text-blue-600 mb-3">{exp.company}</div>
                  <p className="text-gray-600 text-justify leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              </div>
              
              <div className="flex relative items-center justify-center w-full md:w-auto">
                <div className="block md:hidden absolute bottom-0 w-full top-1/2 h-1 bg-blue-200 z-0"/>
                {/* Timeline dot */}
                <motion.a
                  whileHover={{ 
                      scale: 1.05,  
                      transition: { delay: 0, duration: 0.3 },
                  }}
                  className="w-16 z-10 h-16 bg-white border-2 border-blue-500 rounded-full items-center justify-center shadow-lg z-10 flex-shrink-0 overflow-hidden cursor-pointer relative group"
                  href={exp.link}
                  target="_blank"
                >
                  <img src={exp.icon} alt="Ícone da experiência" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity"></div>
                </motion.a >
              </div>
              {/* Spacer */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
