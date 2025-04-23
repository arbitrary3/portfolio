import { useEffect, useRef, useState } from 'react';
import reactIco from './assets/icons/React.png';
import tailwindIco from './assets/icons/tailwind.png';
import HTMLIco from './assets/icons/html.png';
import CSSIco from './assets/icons/css.png';
import JSIco from './assets/icons/js.png';
import TSIco from './assets/icons/typescript.png';
import vsIco from './assets/icons/vscode.webp';
import nextIco from './assets/icons/next.png';
import bootstrapIco from './assets/icons/bootstrap.png';
import figmaIco from './assets/icons/figma.png';
import sk1 from './assets/images/sk1.png';
import sk2 from './assets/images/sk2.png';
import sk3 from './assets/images/sk3.png';

const items = [
    ["React.JS", reactIco], 
    ["Tailwind CSS", tailwindIco], 
    ["HTML", HTMLIco], 
    ["CSS", CSSIco],
    ["JavaScript", JSIco], 
    ["TypeScript", TSIco], 
    ["Visual Code Studio", vsIco], 
    ["Next.JS", nextIco], 
    ["Bootstrap", bootstrapIco], 
    ["Figma", figmaIco]
];

type TypeScreenMode = { screenMode: number; }

export default function Tools({ screenMode }: TypeScreenMode) {
    const sectionRef = useRef(null);
    const angleRef = useRef(0);
    const radius = screenMode === 4 ? 150 : (screenMode === 3 ? 180 : (window.screen.width * 400 / 2048));
    const [isVisible, setIsVisible] = useState(false);
    const [introDone, setIntroDone] = useState(false);
  
    // Observe section visibility
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Only trigger once
          }
        },
        { threshold: 0.4 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, []);

    const carouselRef = useRef<HTMLDivElement | null>(null);
  
    // Carousel logic
    useEffect(() => {
        if (!isVisible) return;
        

        const nodeList = carouselRef.current?.querySelectorAll<HTMLDivElement>('.carousel-item');
        if (!nodeList) return;

        const itemEls: HTMLDivElement[] = Array.from(nodeList);
        const itemCount = itemEls.length;

        function render(): void {
        for (let i = 0; i < itemCount; i++) {
            const theta = (360 / itemCount) * i + angleRef.current;
            const rad = (theta * Math.PI) / 180;
            const x = Math.sin(rad) * radius;
            const z = Math.cos(rad) * radius;

            const scale = 0.5 + 0.5 * ((z + radius) / (2 * radius));
            const opacity = 0.3 + 0.7 * ((z + radius) / (2 * radius));

            const el = itemEls[i];
            el.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${theta}deg) scale(${scale})`;
            el.style.opacity = `${opacity}`;
        }
        }
  
      let animationId: number;
      function spin() {
        angleRef.current += introDone ? 0.1 : 2;
        render();
        animationId = requestAnimationFrame(spin);
      }
  
      render();
      spin();

      setTimeout(() => {
        setIntroDone(true);
      }, 1000)
  
      return () => cancelAnimationFrame(animationId);
    }, [isVisible, introDone, screenMode, radius]);

    const generateCards = (array: string[][]) => {
        return array.map((card,index) => {
            return (
                <div key={index} className={`${screenMode >= 3 ? "" : "max-w-[320px]"} w-full hover:scale-105 transform transition-transform duration-300 h-300px] flex flex-col gap-[30px] justify-between items-center bg-[#3a1a92]/80 px-[30px] pt-[30px] pb-[50px] rounded-2xl`}>
                    <div className="flex justify-center items-center w-[80px] h-[80px] bg-white rounded-[50px] shadow-[0px_0px_60px_rgba(0,0,0,0.5)]">
                      <img src={card[2]} className={`${index === 1 ? "w-[45%]" : "w-[65%]"} m-auto`} />
                    </div>
                    <p className="font-bold text-[18px] text-center">{card[0]}</p>
                    <p className="font-[300] text-gray-300 text-[16px] text-center">{card[1]}</p>
                </div>
            )
        })
    }

  return (
    <div id="tools" ref={sectionRef} className="relative flex flex-col gap-[80px] items-center w-full h-max my-[80px] z-20">
      <p className="text-[46px] font-[600] tracking-widest">Tools</p>

      
        <div className="relative flex w-[30vw] h-[200px] mx-auto [perspective:1000px]">
          <div ref={carouselRef} className={`${screenMode >= 3 ? (screenMode === 4 ? "left-[-85%]" : "left-[-60%]") : (screenMode === 1 ? "left-[-28%]" : "left-[-30%]")} flex justify-center absolute top-[-130px]  right-0 bottom-0 [transform-style:preserve-3d]`}>
            {items.map((item, index) => (
              <div key={index} className="carousel-item hover:scale-115 group flex flex-col justify-center items-center cursor-pointer my-auto w-[120px] h-[120px] absolute top-1/2 left-1/2 text-2xl transition-transform duration-300"
                  style={{ transform: 'translateZ(0px)' }}
              >
                <p className={`${screenMode >= 3 ? "max-w-[50px] opacity-100 top-[-30px]" : "opacity-0 group-hover:opacity-100 top-[-20px]"} absolute w-max text-[16px] text-white text-center font-[400]`}>{item[0]}</p>
                <img src={item[1]} className={`my-auto w-[80px] object-fill transform transition-transform duration-300 ${(index===7) ? "invert" : ""}`} />
              </div>
            ))}
          </div>
        </div> 

      <div className="flex flex-wrap justify-center items-stretch gap-[25px] w-full px-8">
          {generateCards([
            ["Front-End Development","I accurately build responsive websites from wireframes, mainly with ReactJS, and NextJS.",sk1],
            ["UI/UX Design","I create clean, intuitive, and professional design that puts mobile and user experience first",sk2],
            ["Testing and Debugging","Identifying issues and solving performance, and optimization issues using browser dev tools and basic testing methods.",sk3],
          ])}
      </div>
    </div>
  );
}
