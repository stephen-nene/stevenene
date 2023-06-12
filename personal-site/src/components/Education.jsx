import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import Moringa from '../assets/moringa.png'
import uop from '../assets/uop.webp'
import alx from '../assets/ALX.webp'
import saintee from '../assets/saintee.png'

import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const schools = [
  {
    // name: "Moringa School",
    description: "Full Stack Web Development Participated in debugging, coding, and hackathons",
    start: "Sep 2022",
    end: "Apr 2023",
    logo: Moringa,
    skills: "API Integration, Ruby, Computer Science",
    link: "https://moringaschool.com/"
  },
  {
    // name: "University of the People",
    description: "Bachelor's degree in Computer Science",
    start: "2023",
    end: "2027",
    logo: uop,
    skills: "Software Development, Database Design, Software Testing",
    link: "https://www.uopeople.edu/"
  },
  {
    // name: "ALX",
    description: "Associate Software Engineering Program",
    start: "2022",
    end: "2024",
    logo: alx,
    skills: "Ruby Programming,Low-level coding Computer Science",
    link: "https://www.alxafrica.com//"
  },
  {
    // name: "St Joseph's HighSchool",
    description: "Member of Student Council, participated in contests,",
    start: "2016",
    end: "2021",
    logo: saintee,
    skills: "Leadership, Self-drive, KCSE",
    link: "https://stjosephgithunguri.sc.ke/"

  }
];



const Education = () => {
  return (
    <section className='section' id='education' >
      <div className='container mx-auto'>
        <div className='flex-col '>

          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' >
            <h2 className='h2 text-accent mb-5'>Where i got educated</h2>
            <h3 className='h3 max-w-[450px] mb-15'>Mostly it is self taught but i still value the learning instititutions i attended</h3>
          </motion.div>

          {/* schools */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1'>
            {/* school txt */}
            <div className=''>
              {schools.map((school, index) => {
                return (
                  <div
                    className='border-b border-white/20 h-[146px]vmb-[38px] mb-4 flex'
                    key={index}>
                    <div className='max-w-[3000px] '>
                      <div className="top mb-3">
                        <img src={school.logo} alt={school.name} className="logo h-10 w-19" />

                        <h4 className="text-[20px] tracking-wider font-primary font-semibold">{school.name}</h4>
                        <p className="">{school.start} - {school.end}</p>
                      </div>

                      <p className='font-primary font-light  mb-2'>{school.description}</p>
                      <p className='text-[15px] font-extralight  mb-4'><b>Skills: </b> {school.skills}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href={school.link} className='btn w-9 h-9 mb-[9px] flex justify-center items-center' target="_blank" rel="noopener noreferrer">
                        <BsArrowUpRight />
                      </a>
                      <a href={school.link} className='text-accent text-sm' target="_blank" rel="noopener noreferrer">
                        Learn-More
                      </a>
                    </div>

                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
