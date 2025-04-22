import github from './assets/icons/github-mark-white.png';
import linkedin from './assets/icons/linkedin.png';
import logo from './assets/images/logo.png';
import resume from './assets/IruwinJayDadulla(Resume).pdf';

export default function Navbar() {

    type ContactButton = [string, string, string];

    const generateContactsButtons = (array: ContactButton[]) => {
        //array arguments [image link, link, hover message]

        return array.map((button,index) => {
            return (
                <a key={index} className="relative group w-[30px] h-[30px] rounded-[50%]" href={button[1]} rel="noreferrer" target="_blank">
                    <img className="transform transition-transform duration-300 group-hover:scale-125 group-hover:shadow(0_0_30px_black)" src={button[0]} />
                    <div className="hidden ml-[-30px] mt-10 w-max bg-white text-black text-sm rounded py-1 px-2 group-hover:block transition-opacity duration-200 z-10">
                        {button[2]}
                    </div>
                </a>
            )
        })
    };

    return (
        <div className="fixed top-0 left-0 grid grid-cols-[30%_40%_30%] items-center w-full h-[15%] p-[20px] bg-black/70 backdrop-blur-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50">
            <a id="logo" href="https://arbitrary3.github.io/portfolio" className="w-[50px] h-[50px] rounded-[50%] bg-white">
                <img className="rounded-[50%]" src={logo} />
            </a>

            <nav id="navbar" className="flex justify-center w-full gap-[60px] text-[18px] font-extralight m-auto text-gray-400">
                <a href="#about" className="shadow(2px_2px_4px_#000000) hover:text-white hover:scale-130 transform transition-all duration-300">About</a>
                <a href="#tools" className="hover:text-white hover:scale-130 transform transition-all duration-300">Tools and Skills</a>
                <a href="#projects" className="hover:text-white hover:scale-130 transform transition-all duration-300">Projects</a>
            </nav>

            <div id="contacts" className="flex justify-end items-center gap-[50px]">
                <div className="flex gap-[20px]">
                    {generateContactsButtons([
                        [github, "https://github.com/arbitrary3", "GitHub page"],
                        [linkedin, "https://www.linkedin.com/in/iruwin-jay-dadulla-402a90331/", "LinkedIn page"]
                    ])}
                </div>
                <div className="group">
                    <button className="relative overflow-hidden transform transition-transform duration-300 group btn-primary font-bold rounded-[30px] py-2 px-4 text-gray-300 border border-transparent hover:border-gray-300 hover:scale-115"
                            onClick={() => window.open(resume, "_blank")}
                    >
                        <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                        <span className="relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                            See my Resume
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}