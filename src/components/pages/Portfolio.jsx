import React, { useState, useEffect } from "react";
import { FloatButton } from "antd";
import Heros from "../sections/Heros";
import AboutMe from "../sections/AboutMe";
import Blogs from "../sections/Blogs";
import More from "../sections/More";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import { Element } from "react-scroll";

import { FaArrowUp } from "react-icons/fa";


export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Sections */}
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

      {/* Floating Button for Scroll to Top */}
      {isScrolled && (
        <FloatButton
          shape="circle"
          icon={<FaArrowUp/>}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ right: 20, bottom: 20 }}
        />
      )}
    </div>
  );
}
