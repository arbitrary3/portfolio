import youtube from './assets/images/youtube.png';
import tetris from './assets/images/tetris.png';
import landing from './assets/images/landing.png';
import portfolio from './assets/images/portfolio.png';

type TypeScreenMode = { screenMode: number; }

export default function Projects({ screenMode }: TypeScreenMode) {

    type ProjectsCards = [string, string, string, string, string[], ...string[]];

    //GENERATING PROJECTS FUNCTION
    const generateProjects = (array: ProjectsCards[]) => {
        //array arguments [project name, project description, project image, project link, tools array]

        return array.map((project,index) => {
            return (
                <div  key={index} className={`${screenMode >= 3 ? "p-6" : "max-w-[500px] p-[35px] "} flex flex-col justify-between gap-[3em] rounded-[10px] w-full bg-projectbackground shadow-[0_0_20px_#000000)] transform transition-transform duration-300`}>
                    <a className="flex flex-col justify-between gap-[3em]" href={project[3]} rel="noreferrer" target="_blank">
                        <img className="hover:scale-135 hover:rounded-none transform transition-transform duration-400 w-full rounded-lg bg-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10" src={project[2]} />
                        <div className="flex flex-col gap-[20px] leading-[2em]">
                            <p className="text-[25px] font-bold">{project[0]}</p>
                            <p className="font-extralight text-gray-400 leading-5">{project[1]}</p>
                        </div>
                    </a>
                    <div className="flex flex-wrap gap-[10px]">
                        {project[4].map((tools,index) => {
                            return (
                                <div key={index} className="w-max py-1 px-3 border-[2px] font-extralight tracking-wide border-solid border-tagscolor rounded-lg text-tagscolor hover:text-white hover:border-white transform transition-transform duration-200">
                                    {tools}
                                </div>
                            )
                        }) || null}
                    </div>
                    <button className="transform transition-transform duration-300 hover:scale-110 hover:shadow-[20px_10px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)] btn-primary text-[21px] font-bold rounded-[30px] py-2 px-4 text-gray-300 border border-transparent hover:border-gray-500"
                            onClick={() => window.open(project[5], "_blank")}>
                        <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                        <span className="relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                            View Source Code
                        </span>
                    </button>
                </div>
            )
        })
    }

    //RENDERING
    return (
        <div id="projects" className="flex flex-col gap-[80px] justify-center items-center w-full h-max my-[140px] z-20 p-7">
            <div className="flex flex-col gap-[5px] justify-center">
                <p className={`${screenMode >= 3 ? "text-3xl" : "text-[46px]"} font-[600] tracking-widest text-center`}>Projects</p>
                <p className={`${screenMode >= 3 ? "text-1xl text-left" : "text-[20px] text-center"} font-[300] text-gray-500`}>These are the personal projects I've worked on to show my skills. I plan to make more and post it here.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-[60px]">
                {generateProjects([
                    ["YouTube Clone", "A clone of the official YouTube homepage.  Videos shown on the homepage changes based on the current trending videos.", youtube,"https://arbitrary3.github.io/youtube-homepage",["HTML", "CSS", "JavaScript", "ReactJS","Responsive Web Design","Tailwind CSS","SSR"],"https://github.com/arbitrary3/youtube-homepage/"],
                    ["Tetris game", "Made using ReactJS framework. The game controls are designed to be smooth and fast-paced for a better gaming experience.", tetris, "https://arbitrary3.github.io/tetris", ["HTML", "CSS", "JavaScript", "ReactJS","Responsive Web Design","Tailwind CSS", "Game Development","SSR"],"https://github.com/arbitrary3/tetris"],
                    ["Restaurant Landing Page", "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", landing, "https://arbitrary3.github.io/seafood-and-grills", ["HTML", "CSS", "JavaScript", "ReactJS","Responsive Web Design","Tailwind CSS","SSR"],"https://github.com/arbitrary3/seafood-and-grills"],
                    ["My Portfolio Page", "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", portfolio, "https://arbitrary3.github.io/portfolio", ["HTML", "CSS", "TypeScript", "ReactJS","Responsive Web Design","Tailwind CSS", "UI/UX","SSR"],"https://github.com/arbitrary3/portfolio"],
                ])}
            </div>
        </div>
    )
}