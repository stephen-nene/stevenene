import { useState } from 'react'
import './App.css'

// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Experience';
// import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-site bg-no-repeat bg-cover bg-center overflow-hidden'>
      <Nav />
      <Header />
      <Banner />
      <About/>  {/* whoAmI */}
      <Education />
      <Projects /> {/* projects */}
      <Certifications/>
      <Skills /> {/* skills */}
      {/* <Blogs /> */}
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
    </>
  )
}

export default App
