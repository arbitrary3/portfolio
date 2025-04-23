import fcc1 from './assets/icons/fcc1.png';
import fcc2 from './assets/icons/fcc2.png';
import fcc3 from './assets/icons/fcc3.png';
//import fcc from './assets/icons/fcc.png';

type TypeScreenMode = { screenMode: number; }

export default function About({ screenMode }: TypeScreenMode) {

    const generateCards = (array: string[][]) => {
        return array.map((card,index) => {
            return (
                <a key={index} href={card[2]} 
                   className={`${screenMode >=3 ? "w-[100%]" : "w-[250px]"} flex items-center h-[76px] gap-[15px] bg-[rgb(21,21,21)] shadow-md rounded-xl px-5 py-3 hover:scale-110 transition-all duration-300`}
                   target="_blank"
                >
                    <img className="invert" src={card[3]} />

                    <div className="text-gray-300">
                        <h3 className="text-[12px] font-[500] w-[150px]">{card[0]}</h3>
                        <p className="text-[10px] font-[200]">
                            {card[1]}
                        </p>
                    </div>
                </a>
            )
        })
    }

    return(
        <div id="about" className={`${screenMode >= 3 ? "px-4" : "grid grid-cols-2 pl-[80px]"} gap-[40px] justify-center items-center w-full h-[80%] my-[140px] z-20`}>
            <div className="flex flex-col gap-[30px]">
                <p className={`${screenMode >= 3 ? "text-center text-[20px]" : "text-[32px]"}  font-[600] tracking-wide leading-[1.2em]`}>
                    I am a Web Developer based in Tacloban City, Philippines.
                </p>
                <p className={`${screenMode >= 3 ? "text-center" : ""} text-[20px] text-gray-400 font-[300] tracking-wide leading-[1.3em]`}>
                    I approach my developing process with accuracy and precision to the wireframe, meticulously making sure as much as detail as possible is accurate to the desired output. I mainly use ReactJS, but I'm not against stepping out of my comfort zone with using other frameworks like Vue.
                </p>

                <div className="flex flex-col gap-[20px]">
                    <p className={`${screenMode >= 3 ? "text-center" : ""} font-bold`}>Certifications</p>
                    <div className={`${screenMode >=3 ? "flex-col px-[30px]" : ""} flex flex-wrap gap-[19px] justify content-start items-center`}>
                        {generateCards([
                            ["Responsive Web Design", "FreeCodeCamp", "https://www.freecodecamp.org/certification/dadullairuwin/responsive-web-design",fcc1],
                            ["JavaScript Algorithms and Data Structures", "FreeCodeCamp", "https://www.freecodecamp.org/certification/dadullairuwin/javascript-algorithms-and-data-structures-v8",fcc2],
                            ["Front End Development Libraries", "FreeCodeCamp", "https://www.freecodecamp.org/certification/dadullairuwin/front-end-development-libraries",fcc3]
                        ])}
                    </div>
                </div>
            </div>

            {screenMode < 3 ? (
                    <div className="relative about-gradient aspect-square h-[65%] rounded-[50%] my-auto">
                        <div className="absolute top-0 left-[50%] w-[110%] h-full aspect-auto about-gradient"></div>
                    </div>
                ) : null
        }
        </div>
    )
}