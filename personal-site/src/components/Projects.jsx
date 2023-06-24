import React from 'react';

import { motion } from "framer-motion"
import { fadeIn } from "../variants"

import Img1 from '../assets/images/portfolio-img1.png'

const Projects = () => {
  return (
    <section className='section' id='projects' >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-11 mb-3 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br />work</h2>
              <p className='max-w-sm mb-5'>
                With a dedication to growth, I embrace new challenges and strive to deliver solutions that
                exceed expectations.
              </p>
              <button className='btn btn-sm'>All projects</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-none duration-300 '></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>UI/UX Design</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-none duration-300 '></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>UI/UX Design</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>Project Title</span>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-none duration-300 '></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>UI/UX Design</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
