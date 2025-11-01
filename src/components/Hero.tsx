import { ChevronDown, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import cv from "../assets/cv-henrique-freitas.pdf";
import profile from "../assets/profile_pic.png";


const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = cv; // caminho relativo à pasta public
  link.download = "Henrique-Freitas-CV.pdf"; // nome do arquivo baixado
  link.click();
};

const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if(element){
      element.scrollIntoView({ behavior: "smooth" })
    }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      {/* Animated background pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1759159347914-88541fa4bd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBwYXR0ZXJuJTIwYmx1ZXxlbnwxfHx8fDE3NjA0NDAwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center"></div>
      </div> */}

      <div className="absolute inset-0 opacity-10">
        <div className={`absolute inset-0 md:bg-image bg-image-mobile bg-cover bg-center`}></div>
      </div>
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-40 h-40 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl">
              <img
                src={profile}
                alt="Henrique Freitas"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white mb-4"
          >
            Henrique Freitas
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-blue-500 mb-6"
          >
            Senior Full Stack Software Developer
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-300 max-w-2xl mb-10"
          >
            Passionate about building scalable, high-quality software solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2 cursor-pointer"
               onClick={handleDownloadCV}
            >
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border border-white text-white hover:bg-white/10 hover:text-white gap-2 shadow-none"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            onClick={()=>{
              scrollToSection('#about')
            }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white w-8 h-8 cursor-pointer" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
