import './App.css'
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import About from './About.tsx';
import Tools from './Tools.tsx';
import Projects from './Projects.tsx';
//import Certifications from './Certifications.tsx';
import Form from './Form.tsx';
import Footer from './Footer.tsx';

import background from './assets/images/background.jpg';
import { useEffect, useState } from 'react';

function App() {
  const [screenMode, setScreenMode] = useState(0); //0 = 1536px; 1 = 1280px; 2 = 1024px; 3 = 768px; 4 = 640px

  useEffect(() => {
    window.addEventListener('resize',handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  const handleResize = () => {
    if (window.screen.width <= 640) { setScreenMode(4); } else
    if (window.screen.width <= 768) { setScreenMode(3); } else
    if (window.screen.width <= 1024) { setScreenMode(2); } else
    if (window.screen.width <= 1280) { setScreenMode(1); } else
    { setScreenMode(0); }
  }

  return (
    <>
      <div className="relative flex flex-col gap-[30px] text-white w-full h-full overflow-x-hidden">
        <img className={`${screenMode >= 3 ? "scale-280" : "w-full"} fixed top-0 left-0 z-0 opacity-30`} 
             src={background} 
        />
        <p className="fixed top-0 left-1 z-500 font-bold">{`screenMode: ${screenMode}; screenSize: ${window.screen.width}`}</p>
        <div className="flex flex-col w-[100%] h-max z-50">
          <Navbar screenMode={screenMode} />
        </div>
        <div className="flex flex-col w-[100%] h-[80vh] z-20">
          <Hero screenMode={screenMode} />
        </div>
        <div className="flex flex-col gap-[30px] mt-[50px] w-full h-max bg-black z-20">
          <About screenMode={screenMode} />
          <Tools screenMode={screenMode} />
          <Projects screenMode={screenMode} />
        </div>
        <div className="z-20">
          <Form screenMode={screenMode} />
        </div>
        <Footer screenMode={screenMode} />
      </div>
    </>
  )
}

export default App
