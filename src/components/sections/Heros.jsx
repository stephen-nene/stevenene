import { Cpu,Wrench, DatabaseZap, ExternalLink, Mail } from "lucide-react";
import {
  Server,
  Globe,
  LayoutPanelTop,
  Lock,
  FlaskConical,
  Leaf,
  Brain,
  BrainCircuit,
  Terminal,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
// import {
//   Cpu,
//   DatabaseZap,
//   ExternalLink,
//   Mail,
//   Server,
//   Globe,
//   Lock,
//   Leaf,
//   Brain,
//   BrainCircuit,
//   LayoutPanelTop,
//   Terminal,
//   Wrench,
//   FlaskConical,
// } from "lucide-react";

import img from "../../assets/images/1.webp";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg- gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-fuchsia-950 overflow-hidden">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

      <div className="w-full md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Available for Projects, Jobs
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900 dark:text-white">
                Turning Code
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                into Impact 🌟
              </span>
            </h1>

            <div className="flex items-center gap-2">
              <Terminal />
              <p className="text-lg sm:text-xl text- gray-600 dark:text-gray-300 leading-relaxed">
                Hello World! I'm Steve Nene, a passionate Full-Stack Engineer
                who turns complex challenges into elegant solutions. From
                crafting pixel-perfect frontends to optimizing cloud
                infrastructure, I bring ideas to life through clean, efficient
                code and innovative architecture. Let's build something
                extraordinary together! 💻✨
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-4 py-4">
              {generalInterests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {interest.icon}
                  <span className="text-gray-700 dark:text-gray-200">
                    {interest.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <ScrollLink
                to="work"
                smooth
                duration={600}
                className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ExternalLink size={20} />
                View My Work
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth
                duration={600}
                className="cursor-pointer px-6 py-3 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </ScrollLink>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-fuchsia-500 p-1">
              <img
                src={img}
                alt="Profile"
                className="rounded-full object-contain w-full h-full"
              />
            </div>

            {/* Floating Decoration Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-4 top-1/4 bg-blue-500 w-8 h-8 rounded-full opacity-50"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-4 bottom-1/4 bg-fuchsia-500 w-6 h-6 rounded-full opacity-50"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const generalInterests = [
  { name: "Software Dev", icon: <Cpu className="text-purple-500" /> },
  { name: "Web Dev", icon: <Globe className="text-blue-400" /> },
  { name: "Frontend", icon: <LayoutPanelTop className="text-blue-400" /> },
  { name: "Backend", icon: <Server className="text-green-500" /> },
  { name: "DevOps", icon: <Wrench className="text-gray-600" /> },
  { name: "Databases", icon: <DatabaseZap className="text-green-500" /> },
  { name: "Problem Solver", icon: <Brain className="text-purple-600" /> },
  {
    name: "Crazy Debugger",
    icon: <FlaskConical className="text-orange-500" />,
  },
  { name: "AI & ML", icon: <BrainCircuit className="text-yellow-500" /> },
  { name: "Cybersec", icon: <Lock className="text-red-500" /> },
  { name: "Nature Enthusiast", icon: <Leaf className="text-green-600" /> },
];
