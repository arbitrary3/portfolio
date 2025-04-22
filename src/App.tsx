import './App.css'
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import Projects from './Projects.tsx';
import Tools from './Tools.tsx'
import About from './About.tsx';
import Form from './Form.tsx';
import Footer from './Footer.tsx';

import background from './assets/images/background.jpg';

function App() {

  return (
    <>
      <div className="relative flex flex-col text-white w-full h-full">
        <img className="fixed top-0 left-0 z-0 w-full opacity-30" src={background} />
        <div className="flex flex-col w-[100%] h-max z-50">
          <Navbar />
        </div>
        <div className="flex flex-col w-[100%] h-screen z-20">
          <Hero />
        </div>
        <div className="w-full h-max bg-black z-20">
          <About />
          <Tools />
          <Projects />
        </div>
        <div className="z-20">
          <Form />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
