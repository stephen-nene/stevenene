import { useState } from 'react'
import './App.css'


import Contact from './Contact';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-site bg-no-repeat bg-cover bg-center overflow-hidden'>
      <Contact />
      <div className='h-[150px]'></div>
    </div>
    </>
  )
}

export default App
