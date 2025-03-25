import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import projectsData from "../../assets/data/projectsData.json";

import Img from "../../assets/images/project.jpg";
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-96 h-[29rem] rounded-xl overflow-hidden shadow-xl"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          project.color
        } opacity-90 transition-opacity duration-300 ${
          isHovered ? "opacity-80" : "opacity-90"
        }`}
      />

      <div className="relative h-full p-6 flex flex-col justify-between">
        <div>
      <img
        src={Img||project.image}
        alt={project.title}
        className=" object-cover "
      />
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-white/90 mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="flex gap-4 my-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-all"
              >
                <Github size={18} />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-gray-900 hover:bg-white/90 transition-all"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.children[index];
    if (!card) return;

    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    const scrollPosition = card.offsetLeft - (containerWidth - cardWidth) / 2;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projectsData.length;
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + projectsData.length) % projectsData.length;
    scrollToIndex(prevIndex);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // You could add logic here to snap to the nearest card
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <p className="mt-2 text-gray-400">Explore my recent work</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div
            ref={containerRef}
            className="flex gap-6 overflow-x-hidden pb-8 scrollbar-hide"
            drag="x"
            dragConstraints={containerRef}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            dragElastic={0.1}
          >
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {/* Mobile navigation buttons */}
          <div className="md:hidden flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
