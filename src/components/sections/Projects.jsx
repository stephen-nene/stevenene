import React, { useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import skills from "../../assets/data/skills.json";


// Sample project data - you can move this to a JSON file
const projectsData = [
  {
    id: 1,
    title: "AI Chat Interface",
    description: "A modern chat interface built with React and TypeScript",
    tags: ["React", "TypeScript", "AI", "Tailwind"],
    image: "/api/placeholder/600/400",
    github: "https://github.com/username/project1",
    live: "https://project1.demo",
    color: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "Full-featured admin dashboard with dark mode",
    tags: ["Next.js", "MongoDB", "Redux", "JWT"],
    image: "/api/placeholder/600/400",
    github: "https://github.com/username/project2",
    live: "https://project2.demo",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Social Media Analytics",
    description: "Real-time analytics dashboard with charts",
    tags: ["React", "D3.js", "Firebase", "Material-UI"],
    image: "/api/placeholder/600/400",
    github: "https://github.com/username/project3",
    live: "https://project3.demo",
    color: "from-orange-500 to-pink-500",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management platform",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "WebSocket"],
    image: "/api/placeholder/600/400",
    github: "https://github.com/username/project4",
    live: "https://project4.demo",
    color: "from-blue-500 to-indigo-500",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-96 h-[28rem] rounded-xl overflow-hidden"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
      />
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />

      <div className="relative h-full p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-white/90 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-colors"
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-gray-900 hover:bg-white/90 transition-colors"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-gr ay-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <p className="mt-2 text-gray-400">Drag to explore my recent work</p>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-gray-400"
          >
            <span>Scroll or drag</span>
            <ArrowRight />
          </motion.div>
        </div>

        <motion.div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto cursor-grab click:cursor-grabbing pb-8"
          drag="x"
          dragConstraints={containerRef}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{
            touchAction: "none",
          }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
