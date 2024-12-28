import React from "react";
import Heros from "../sections/Heros";
import AboutMe from "../sections/AboutMe";
import Blogs from "../sections/Blogs";
import More from "../sections/More";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";

import { Element } from "react-scroll";

export default function Portfolio() {
  return (
    <div>
      <Element name="Heros">
        <div className="bg-rose-600 dark:bg-rose-950">
          <Heros more="x" />
        </div>
      </Element>
      <Element name="AboutMe">
        <div className="bg-orange-500 dark:bg-orange-900">
          <AboutMe />
        </div>
      </Element>
      <Element name="Skills">
        <div className="bg-yellow-500 dark:bg-yellow-900">
          <Skills />
        </div>
      </Element>
      <Element name="Projects">
        <div className="bg-green-500 dark:bg-green-900">
          <Projects />
        </div>
      </Element>
      <Element name="Blogs">
        <div className="bg-blue-500 dark:bg-blue-900">
          <Blogs />
        </div>
      </Element>
      <Element name="Contact">
        <div className="bg-indigo-500 dark:bg-indigo-900">
          <Contact />
        </div>
      </Element>
      <Element name="More">
        <div className="bg-violet-500 dark:bg-violet-900">
          <More />
        </div>
      </Element>
    </div>
  );
}

