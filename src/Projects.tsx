import youtube from './assets/images/youtube.png';
import tetris from './assets/images/tetris.png';
import landing from './assets/images/landing.png';
import portfolio from './assets/images/portfolio.png';

export default function Projects() {

    type ProjectsCards = [string, string, string, string, string[], ...string[]];

    //GENERATING PROJECTS FUNCTION
    const generateProjects = (array: ProjectsCards[]) => {
        //array arguments [project name, project description, project image, project link, tools array]

        return array.map((project,index) => {
            return (
                <div  key={index} className="flex flex-col justify-between gap-[3em] rounded-[10px] w-full p-[35px] bg-projectbackground shadow-[0_0_20px_#000000)] hover:scale-105 transform transition-transform duration-300 ">
                    <a className="flex flex-col justify-between gap-[3em]" href={project[3]} rel="noreferrer" target="_blank">
                        <img className="hover:scale-135 hover:rounded-none transform transition-transform duration-400 w-full rounded-lg bg-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10" src={project[2]} />
                        <div className="leading-[2em]">
                            <p className="text-[25px] font-bold">{project[0]}</p>
                            <p className="font-extralight text-gray-400">{project[1]}</p>
                        </div>
                    </a>
                    <div className="flex flex-wrap gap-[10px]">
                        {project[4].map((tools,index) => {
                            return (
                                <div key={index} className="w-max py-1 px-3 border-[2px] font-extralight tracking-wide border-solid border-bluegradient-500 rounded-lg text-bluegradient-500 hover:text-white hover:border-white transform transition-transform duration-200">
                                    {tools}
                                </div>
                            )
                        }) || null}
                    </div>
                    <button className="relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)] btn-primary text-[21px] font-bold rounded-[30px] py-2 px-4 text-gray-300 border border-transparent hover:border-gray-500">
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
        <div id="projects" className="flex flex-col gap-[80px] justify-center items-center w-full h-[80%] px-[80px] my-[140px] z-20">
            <p className="text-[46px] font-[600] tracking-widest">Projects</p>

            <div className="grid grid-cols-2 gap-[5%] px-[5%]">
                {generateProjects([
                    ["YouTube Clone", "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", youtube,"https://arbitrary3.github.io/youtube-homepage",["ReactJS","Responsive Web Design","Tailwind CSS", "JavaScript"]],
                    ["Tetris game", "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", tetris, "https://arbitrary3.github.io/tetris", ["ReactJS","Responsive Web Design","Tailwind CSS", "JavaScript"]],
                    ["Restaurant Landing Page", "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", landing, "https://arbitrary3.github.io/seafood-and-grills", ["ReactJS","Responsive Web Design","Tailwind CSS", "JavaScript"]],
                    ["My Portfolio Page", "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", portfolio, "https://arbitrary3.github.io/portfolio", ["ReactJS","Responsive Web Design","Tailwind CSS", "JavaScript"]],
                ])}
            </div>
        </div>
    )
}