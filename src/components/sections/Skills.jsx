import React, { useState } from "react";

const SkillsDisplay = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const skillsData = {
    skills: {
      Frontend: {
        Technologies: [
          "React",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "JavaScript",
          "Responsive Design",
          "Accessibility (A11y)",
          "Component-Based Architecture",
          "React Router",
          "Redux",
          "Axios",
        ],
      },
      Backend: {
        Technologies: [
          "Node.js",
          "Flask",
          "Django",
          "Ruby on Rails",
          "REST API Design",
          "MVC Architecture",
          "Authentication & Authorization",
          "Express",
          "Gunicorn",
          "Webpack",
          "AWS S3",
          "Heroku",
          "Netlify",
        ],
      },
      Databases: {
        SQL: ["PostgreSQL", "SQLite", "MongoDB", "IndexDB"],
      },
      Tools: {
        "Version Control": [
          "Git",
          "GitHub",
          "GitFlow",
          "VS Code",
          "Codium",
          "Vim",
          "pnpm",
          "npm",
          "yarn",
          "Trello",
          "Postman",
          "DataDog",
          "Google Analytics",
        ],
      },
      "Other Skills": {
        DevOps: [
          "Docker",
          "CI/CD Pipelines",
          "Jest",
          "Enzyme",
          "Agile Methodologies",
          "Task Prioritization",
          "Image Recognition",
          "Text Extraction",
          "Remote Collaboration",
          "Client Communication",
          "Problem-Solving",
        ],
      },
    },
  };

  const categoryColors = {
    Frontend: "bg-blue-500",
    Backend: "bg-green-500",
    Databases: "bg-yellow-500",
    Tools: "bg-purple-500",
    "Other Skills": "bg-red-500",
  };

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Professional Skills
      </h1>

      <div className="grid gap-6">
        {Object.entries(skillsData.skills).map(([category, subCategories]) => (
          <div
            key={category}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${categoryColors[category]} text-white`}
              onClick={() => toggleCategory(category)}
            >
              <h2 className="text-xl font-semibold">{category}</h2>
              <span className="text-2xl">
                {expandedCategory === category ? "−" : "+"}
              </span>
            </div>

            {expandedCategory === category && (
              <div className="p-4">
                {Object.entries(subCategories).map(([subCategory, skills]) => (
                  <div key={subCategory} className="mb-4">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      {subCategory}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {skill}
                        </span>
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
