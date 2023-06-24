import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../assets/styles/intro.css"

import THM from '../assets/images/certs/cyber-advent.png';
import IBM2 from '../assets/images/certs/IBM2.png';
import IBM1 from '../assets/images/certs/IBM1.png';
import GITs from '../assets/images/certs/GoogleIT.png';
import AZURE from '../assets/images/certs/AZURE.png';
import sysad from '../assets/images/certs/sysad.png';
import OS from '../assets/images/certs/OS.png';
import bronze from '../assets/images/certs/bronze.png';




const Certifications = () => {

  const certs = [
    {
      name: 'Google IT support',
      image: GITs,
      provider: 'Google',
      date: 'Jun 2022',
      skills: [],
      credentialId: 'Z8Q7Z8Z2BCGD',
    },
    {
      name: 'System administartion ',
      image: sysad,
      provider: 'Coursera x Google',
      date: 'Mar 2023',
      skills: ['Servers ,', 'networking ,', 'Cloud Computing ,', 'disaster management '],
      credentialId: 'SPKQJ7CE26T4',
    },


    {
      name: 'Microsoft Azure AI Fundamentals',
      image: AZURE,
      provider: 'Microsoft learning 365',
      date: 'Mar 2023',
      skills: ['Cloud-computing', 'Machine Learning', 'Artificial Intelligence (AI)'],
      credentialId: '',
    },

    {
      name: 'Operating System Power User',
      image: OS,
      provider: 'Coursera x Google',
      date: 'May 2022',
      skills: ["terminal ,",'system-config ,','logging ,','system-managemnet'],
      credentialId: 'GK56WWCE9JTK',
    },
    {
      name: 'Quantum computing',
      image: IBM1 ,
      provider: 'IBM x QubitxQubit',
      date: 'Mar 2022',
      skills: ['qubit ,', 'Python ,', 'Quantum Computing ,'],
      credentialId: '',
    },
    {
      name: 'Quantum computing',
      image: IBM2 ,
      provider: 'IBM x QubitxQubit',
      date: 'Mar 2022',
      skills: ['qubit ,', 'Python ,', 'Quantum Computing ,'],
      credentialId: '',
    },
    {
      name: 'TryHackMe Cyber Advent',
      image: THM,
      provider: 'TryHackMe',
      date: 'Dec 2022',
      skills: ['Cybersecurity ,', 'Penetration Testing ,', 'Network Security'],
      credentialId: 'CHRISTMAN-CYBER-VENET',
    },
  ];


  return (
    <>
    <section className="section " id="certifications">
      {/* <h2 className="h2 leading-tight text-accent w-full">Certifications</h2> */}
      <div className="container flex justify-center items-center">

        <Carousel>
          {certs.map((cert, index) => (
            <div key={index} className="card">
              <img src={cert.image} alt={cert.name} className="card-img-top" />
              <div className="card-body">
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="">Provider: {cert.provider}</p>
              <p className="">Date: {cert.date}</p>
              <p className="">Skills: {cert.skills}</p>
              <p className="">Credential ID: {cert.credentialId}</p>
              </div>
            </div>
          ))}
        </Carousel>
        
      </div>
    </section>
    </>

  );
};

export default Certifications;
