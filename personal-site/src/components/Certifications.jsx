import React, { useRef, useState } from 'react';
import Img1 from '../assets/images/portfolio-img1.png';

const Certifications = () => {

  const certs = [
    {
      name: 'Microsoft Learn Student Ambassadors',
      image: 'Microsoft Learn Student Ambassadors logo',
      provider: 'Microsoft',
      date: 'Apr 2023',
      skills: ['Web Services API', 'Artificial Intelligence (AI)', 'Cloud Computing'],
      credentialId: 'SPKQJ7CE26T4',
    },
    {
      name: 'Build a computer vision app with Azure Cognitive Services',
      image: 'Coursera logo',
      provider: 'Coursera',
      date: 'Mar 2023',
      skills: ['Web Services API', 'Artificial Intelligence (AI)', 'Cloud Computing'],
      credentialId: 'SPKQJ7CE26T4',
    },
    {
      name: 'Microsoft Azure AI Fundamentals',
      image: 'Microsoft learning 365 logo',
      provider: 'Microsoft learning 365',
      date: 'Mar 2023',
      skills: ['Cloud-computing', 'Machine Learning', 'Artificial Intelligence (AI)'],
      credentialId: '',
    },
    {
      name: 'Google IT support',
      image: 'Google logo',
      provider: 'Google',
      date: 'Jun 2022',
      skills: [],
      credentialId: 'Z8Q7Z8Z2BCGD',
    },
    {
      name: 'Technical Support Fundamentals',
      image: 'Coursera logo',
      provider: 'Coursera',
      date: 'May 2022',
      skills: [],
      credentialId: 'GK56WWCE9JTK',
    },
    {
      name: 'Quantum computing',
      image: 'IBM logo',
      provider: 'IBM',
      date: 'Mar 2022',
      skills: ['qubit', 'Python (Programming Language)', 'Quantum Computing'],
      credentialId: '',
    },
    {
      name: 'TryHackMe Cyber Advent of Christmas',
      image: 'TryHackMe logo',
      provider: 'TryHackMe',
      date: 'Dec 2022',
      skills: ['Cybersecurity', 'Penetration Testing', 'Network Security'],
      credentialId: 'CHRISTMAN-CYBER-VENET',
    },
  ];
  

  return (
    <div className="section" id="certifications">
      <div>
        <h2 className="h2 leading-tight text-accent">Certifications</h2>
        <div className="flex flex-col carousel-container">
          <div className="carousel">
            {certs.map((cert, index) => {
              return (
                <div key={index} className="card">
                  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-none duration-300 '></div>
                    {/* img */}
                    <p>cert {index +1}</p>
                    {/* <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" /> */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                      <span className='text-gradient'>UI/UX Design</span>
                    </div>
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                      <span className='text-2xl text-white'>Project Title</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
