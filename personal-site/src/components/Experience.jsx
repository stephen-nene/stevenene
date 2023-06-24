import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'


import { motion } from "framer-motion"
import { fadeIn } from "../variants"


const Companies = [
  {
    name: "Mark Dairy ",
    description: "IT Support Specialist",
    start: "Sep 2019",
    end: "to-date",
    tasks: [
      "Provide technical support to end-users, troubleshooting hardware and software issues. ",
      "Assist in the integration of APIs to improve system functionality and enhance user experience. ",
      // "Utilize Ruby programming language for software development. ",
      // "Apply computer science principles to analyze and solve complex technical problems. "
      ],
    link: "https://markdairy.com/"
  },
  {
    name: "Sparksfoundation",
    description: "Web-developer  internship",
    start: "jan 2023",
    end: " june 2023",
    tasks: [
      "Develop responsive and user-friendly web applications using HTML, CSS, and JavaScript",
      "Implement dynamic website features and functionalities",
      // "Collaborate with designers to transform visual designs into functional web interfaces",
      // "Conduct thorough testing and debugging to ensure website functionality across different browsers and devices"
      ],
    link: "https://www.sparksfoundation.org/"
  },
  {
    name: "Internsavy",
    description: "Web-developer  internship",
    start: "aug 2022",
    end: "dec 2023",
    tasks: [
      "Gain hands-on experience in web development by working on real-world projects",
      "Develop and maintain websites using modern front-end technologies",
      // "Collaborate with a team of developers to implement new features and optimize existing code",
      // "Perform regular code reviews and provide constructive feedback"
      ],
    link: "https://www.internsavy.com/"
  },
  {
    name: "Freelancer",
    description: "Freelance Developer",
    start: "2016",
    end: "2021",
    tasks: [
    // "Participated in various hackathons, collaborating with teams to develop innovative solutions within tight deadlines",
    "Contributed to open-source projects and various hackathons ",
    "Successfully completed multiple projects on platforms like Upwork, delivering high-quality work to clients",
    // "Engaged in online and remote jobs, demonstrating self-drive and the ability to work independently",
    // "Utilized leadership skills to coordinate and manage project tasks, ensuring timely completion"
    ],
    link: "https://github.com/stephen-nene/"
    }
];


const Experience = () => {
  return (
    <div className='section' id='experience' >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-3 lg:mb-0' >
            <h2 className='h2 text-accent mb-1'>Job- experience</h2>
            {/* <h3 className='h3 max-w-[450px] mb-1'>Mostly it is self taught but i still value the learning instititutions i attended</h3> */}
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
              {Companies.map((school, index) => {
                return (
                  <div
                    className='border-b border-white/20 h-[146px]vmb-[38px] mb-4 flex'
                    key={index}>
                    <div className='max-w-[476px] '>
                      <div className="top mb-3">
                        {/* <img src={school.logo} alt={school.name} className="logo h-10 w-19" /> */}

                        <h4 className="text-[20px] tracking-wider font-primary font-semibold">{school.name}</h4>
                        <p className="">{school.start} - {school.end}</p>
                      </div>

                      <p className='font-primary font-light  mb-2'>{school.description}</p>
                      <p className='text-[15px] font-extralight  mb-4'><b>Tasks: </b> {school.tasks}</p>
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
    </div>
  );
};

export default Experience;
