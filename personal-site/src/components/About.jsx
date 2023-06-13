import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section flex justify-center items-center" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-92 lg:flex-row lg:items-center lg:gap-x-91 lg:gap-y-1">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            className="flex-1 bg-about bg-contain bg-no-repeat h-[250px] mix-blend-lighten bg-top mb-10 lg:mb-88 "
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex-1"
          >
            {/* desc */}
            <div className="mb-10">
              <h2 className="h2 text-accent">About me.</h2>
              <h3 className="mb-6">
                I'm Stephen Njoroge Nene, a recent software engineering graduate with a strong passion for technology.
              </h3>
              <p className="mb-3">
                Proficient in full stack development, I specialize in Ruby on Rails, React, JavaScript, HTML, CSS,
                Python, C++, and Rust. I'm also deeply interested in emerging tech like quantum computing,
                cybersecurity, AI, ML, and cloud computing. I have a self-taught background and thrive on continuous
                learning, always seeking to push boundaries and stay up-to-date with industry trends.
              </p>
              <p className="mb-3">
                I'm driven by a curiosity to create innovative applications and I'm committed to expanding my knowledge
                and skills. With a dedication to growth, I embrace new challenges and strive to deliver solutions that
                exceed expectations.
              </p>
            </div>
            {/* desc */}
            {/* stats */}
            <div className=" flex gap-x-1 lg:gap-x-25 mb-90">
              <div className="">
                <div className="text-[30px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of Experience
                </div>
              </div>
              <div>
                <div className="text-[30px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects completed
                </div>
              </div>
              <div>
                <div className="text-[30px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-2px]">
                  Satisfied customers
                </div>
              </div>
            </div>
            {/* stats */}
          </motion.div>
          {/* text */}
        </div>
      </div>
    </section>
  );
};

export default About;




// {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
// {/* overlay */}
// <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-none duration-300 '></div>
// {/* img */}
// <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
// <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
//   <span className='text-gradient '>UI/UX Design</span></div>
// <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
//   <span className='text-2xl text-white'>Project Title</span>
// </div>
// </div>

// <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
// {/* overlay */}
// <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-none duration-300 '></div>
// {/* img */}
// <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
// <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
//   <span className='text-gradient '>UI/UX Design</span></div>
// <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
//   <span className='text-2xl text-white'>Project Title</span>
// </div>
// </div>

// <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
// {/* overlay */}
// <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-none duration-300 '></div>
// {/* img */}
// <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
// <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
//   <span className='text-gradient '>UI/UX Design</span></div>
// <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
//   <span className='text-2xl text-white'>Project Title</span>
// </div>
// </div> */}