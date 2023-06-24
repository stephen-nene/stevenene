import React from "react";

import Image from "../assets/images/1.webp";

import { FaGithub, FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { Link } from "react-scroll";
import resume from "../assets/stephen-Njoroge.pdf"
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[44px] font-bold leading-[0.8] lg:text-[110px]"
            >
              STEPHEN <span>NENE</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="mb-6 text-[34px] lg:text-[60px] font font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I work in </span>
              <TypeAnimation
                sequence={[
                  "Backend",
                  2000,
                  "FrontEnd",
                  2000,
                  "CyberSecurity",
                  2000,
                  "AI",
                  2000,
                ]}
                speed={30}
                style={{ color: "rgb(56,171,37)" }}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 max-w-lg mx-auto lg:mx-0"
            >
              The least experienced can be the most experienced too. Dont fight
              back , fight forward.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-10 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}>
                <button className="btn btn-lg">
                  Contact-me
                </button>
              </Link>
              <a href={resume} className="text-gradient btn-link" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:ms-0"
            >
              <a href="https://github.com/stephen-nene">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/stevenene/">
                <FaLinkedin />
              </a>
              <a href="#2">
                <FaDiscord />
              </a>
              <a href="#2">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[300px] lg:max-w-[300px] "
          >
            <img src={Image} alt="landing page" className="rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
