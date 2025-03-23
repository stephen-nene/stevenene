import React, { useState } from "react";
import { Tag } from "antd"; // Import Ant Design Tag
import skillsData from "../../assets/data/skills.json";

const SkillsDisplay = () => {
  const [expandedCategory, setExpandedCategory] = useState("Frontend");

  // Category colors with dark mode support
  const categoryColors = {
    Frontend: "bg-blue-500 dark:bg-blue-700",
    Backend: "bg-green-500 dark:bg-green-700",
    Databases: "bg-orange-500 dark:bg-orange-700",
    Tools: "bg-purple-500 dark:bg-purple-700",
    "Other Skills": "bg-red-500  dark:bg-red-700",
  };

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        Professional Skills
      </h1>

      <div className="grid gap-6">
        {Object.entries(skillsData.skills).map(([category, subCategories]) => (
          <div
            key={category}
            className={`bg-w hite ${categoryColors[category]} bg-opacity-50 dark:bg-opacity-60  rounded-lg shadow-md overflow-hidden transition-all duration-300`}
          >
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${categoryColors[category]} text-white`}
              onClick={() => toggleCategory(category)}
            >
              <h2 className="text-xl font-semibold">{category}</h2>
              <span className="text-2xl transform transition-transform duration-300">
                {expandedCategory === category ? "−" : "+"}
              </span>
            </div>

            {expandedCategory === category && (
              <div className="p-4">
                {Object.entries(subCategories).map(([subCategory, skills]) => (
                  <div key={subCategory} className="mb-4">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {subCategory}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Tag
                          key={skill}
                          className={`text-sm p-1.5 cursor-pointer rounded-md ${categoryColors[category]} font-medium transition-all duration-200 hover:scale-105`}
                          // color="green"
                          // color={categoryColors[category]
                          //   .split(" ")[0]
                          //   .replace("bg-", "")} // Use Ant Design Tag with dynamic colors
                        >
                          {skill}
                        </Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDisplay;
