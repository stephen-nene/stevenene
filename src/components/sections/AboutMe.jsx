import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import { Code2, Database, Layout, GitBranch, Server } from "lucide-react";
import about2 from "../../assets/images/about2.webp";

export default function AboutMe() {
  return (
    <>
      <div className="w-full p-4 flex justify-between items-center bg-g ray-200 dark:bg-gray-800 shadow-md">
        <h1 className="text-3xl font-bold">About Me</h1>
        <FaLightbulb
          size={28}
          className="text-yellow-500 dark:text-yellow-300"
        />
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray -100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
        {/* Header Section */}

        {/* Main Content */}
        <motion.div
          className="container mx-auto p-6 flex flex-col md:flex-row gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-lg leading-7">
              Hi, I’m Steve! I have a strong passion for software development
              and solving real-world challenges. My journey has been defined by
              impactful projects and hands-on learning:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Database
                  name="check-circle"
                  className="inline-block mr-2 text-blue-500"
                />
                Developed a financial tracker app, honing skills in React, data
                visualization, and state management.
              </li>
              <li>
                {/* <LucideIcon
                name="check-circle"
                className="inline-block mr-2 text-blue-500"
              /> */}
                Integrated e-commerce functionality into Klinsept’s website,
                improving backend development with APIs and PostgreSQL.
              </li>
              <li>
                {/* <LucideIcon
                name="check-circle"
                className="inline-block mr-2 text-blue-500"
              /> */}
                Built SeeAI, leveraging Flask, image recognition AI, and
                Cloudinary for seamless user experiences.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={about2} alt="About Me" className="rounded-lg shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
