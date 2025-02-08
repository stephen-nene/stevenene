import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, Tooltip, Modal } from "antd";
import skills from "../../assets/data/skills.json";

const SkillCarousel = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();

  const getRotationRadius = (totalItems) => {
    return Math.max(250, Math.min(totalItems * 35, 350));
  };

  // Flatten all skills into a single list with category & subcategory
  const skillList = [];
  Object.entries(skills.skills).forEach(([category, details]) => {
    Object.entries(details).forEach(([subcategory, items]) => {
      items.forEach((item) => {
        skillList.push({ name: item, category, subcategory });
      });
    });
  });

  const totalItems = skillList.length;
  const radius = getRotationRadius(totalItems);

  useEffect(() => {
    controls.start("rotate");
  }, [controls]);

  const containerVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.2,
      zIndex: 10,
      boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 p-8 overflow-hidden">
      <h1 className="text-4xl font-bold mb-16 text-center">Skills</h1>

      <div className="relative h-[600px]">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          variants={containerVariants}
          animate={controls}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          {skillList.map((skill, index) => {
            const angle = (index * 360) / totalItems;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={skill.name}
                className="absolute cursor-pointer"
                style={{
                  x: x - 60,
                  y: y - 60,
                  rotate: -angle,
                }}
                whileHover="hover"
                whileTap="tap"
                variants={cardVariants}
              >
                <Tooltip
                  title={`${skill.category} → ${skill.subcategory}`}
                  placement="top"
                  className="block"
                >
                  <motion.div
                    onClick={() => {
                      setSelectedSkill(skill.name);
                      setSelectedCategory(
                        `${skill.category} → ${skill.subcategory}`
                      );
                      setIsModalOpen(true);
                    }}
                    className="relative group"
                  >
                    <Card
                      hoverable
                      className="w-32 h-32 flex flex-col items-center justify-center text-center 
                               bg-gradient-to-br from-emerald-300 to-emerald-400 
                               dark:from-emerald-700 dark:to-emerald-900 
                               shadow-lg rounded-lg transform transition-all duration-300
                               group-hover:shadow-emerald-500/50 dark:group-hover:shadow-emerald-400/30"
                    >
                      <motion.p
                        className="text-sm font-semibold"
                        animate={{
                          scale: isHovering ? 1.1 : 1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {skill.name}
                      </motion.p>
                      <motion.div
                        className="absolute inset-0 bg-emerald-500/10 rounded-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </Card>
                  </motion.div>
                </Tooltip>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Modal
        title={
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">{selectedSkill}</span>
          </div>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        className="skill-modal"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {selectedCategory}
          </p>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <p className="text-sm">
              More details about {selectedSkill} can go here.
            </p>
          </div>
        </motion.div>
      </Modal>
    </div>
  );
};

export default SkillCarousel;
