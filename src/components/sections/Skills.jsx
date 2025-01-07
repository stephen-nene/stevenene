import React from "react";
import skills from "../../assets/data/skills.json";

export default function Skills() {
  return (
    <div className="min-h-screen bg-w hite  text-gray-800 dark:text-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>

      <div className="space-y-12">
        {/* Loop through each skill category */}
        {Object.entries(skills.skills).map(([category, details]) => (
          <div
            key={category}
            className=" p-4 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>

            {/* Loop through each subsection */}
            {Object.entries(details).map(([subcategory, items]) => (
              <div key={subcategory} className="mb-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-blue-500 text-w  dark:bg-blue-900 hover:shadow-orange-500 cursor-pointer rounded-full text-sm shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
