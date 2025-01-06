import React from "react";
import skills from "../../assets/data/skills.json";

export default function Skills() {
  return (
    <div className="min-h-screen bg-w hite dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>

      <div className="space-y-12">
        {/* Loop through each skill category */}
        {Object.entries(skills.skills).map(([category, details]) => (
          <div
            key={category}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>

            {/* Loop through each subsection */}
            {Object.entries(details).map(([subcategory, items]) => (
              <div key={subcategory} className="mb-6">
                <h3 className="text-xl font-medium mb-2">{subcategory}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-blue-500 text-white dark:bg-blue-600 rounded-full text-sm shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
