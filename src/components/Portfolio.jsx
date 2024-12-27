import React from "react";
import Heros from "./Heros";
import AboutMe from "./AboutMe";
import Blogs from "./Blogs";
import More from "./More";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

export default function Portfolio() {
  return (
    <div>
      {/* Rainbow background colors with dark mode variants */}
      <div className="bg-red-500 dark:bg-red-900" id="Heros">
        <Heros more="x" />
      </div>
      <div className="bg-orange-500 dark:bg-orange-900" id="AboutMe">
        <AboutMe />
      </div>
      <div className="bg-yellow-500 dark:bg-yellow-900" id="Skills">
        <Skills />
      </div>
      <div className="bg-green-500 dark:bg-green-900" id="Projects">
        <Projects />
      </div>
      <div className="bg-blue-500 dark:bg-blue-900" id="Blogs">
        <Blogs />
      </div>
      <div className="bg-indigo-500 dark:bg-indigo-900" id="Contact">
        <Contact />
      </div>
      <div className="bg-violet-500 dark:bg-violet-900" id="More">
        <More />
      </div>
    </div>
  );
}
