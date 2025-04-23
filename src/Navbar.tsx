import github from './assets/icons/github-mark-white.png';
import linkedin from './assets/icons/linkedin.png';
import logo from './assets/images/logo.png';
import resume from './assets/IruwinJayDadulla(Resume).pdf';

import { useState, useEffect } from 'react';

type TypeScreenMode = { screenMode: number; }

export default function Navbar({ screenMode }: TypeScreenMode) {
    const [menuVisible, isMenuVisible] = useState(false);

    type ContactButton = [string, string, string];

    useEffect(() => {
        if (screenMode < 3) { isMenuVisible(false); } //If the Navbar doesn't have the Menu button, then remove the Menu screen
    },[screenMode])
    
    const toggleMenu = () => {
        if (menuVisible == true) { isMenuVisible(false); } else { isMenuVisible(true); }
    }

    const generateContactsButtons = (array: ContactButton[]) => {
        //array arguments [image link, link, hover message]

        return array.map((button,index) => {
            return (
                <a key={index} className="relative group w-[30px] h-[30px] rounded-[50%]" href={button[1]} rel="noreferrer" target="_blank">
                    <img className="transform transition-transform duration-300 group-hover:scale-125 group-hover:shadow(0_0_30px_black)" src={button[0]} />
                    <div className="hidden ml-[-125%] mt-10 w-max bg-white text-black text-sm rounded py-1 px-2 group-hover:block transition-opacity duration-200 z-10">
                        {button[2]}
                    </div>
                </a>
            )
        })
    };

    return (
        <div className={`${screenMode > 0 ? "flex justify-between" : "grid grid-cols-[30%_40%_30%]"} fixed top-0 left-0 items-center w-full h-[15%] p-4 bg-black/70 backdrop-blur-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50`}>
            {/*At lower screen resolutions, only show the logo plus the menu button*/}
            
            
            {/*Appears as 1st element on higher resolutions. Appears as 2nd element in lower resolutions*/}
            <a id="logo" href="https://arbitrary3.github.io/portfolio" 
               className={`hover:scale-110 w-[50px] h-[50px] rounded-[50%] bg-white ${screenMode <= 2 ? "" : "m-auto"}`}>
                <img className="rounded-[50%]" src={logo} />
            </a>

            {/*Appears as 1st element on higher resolutions. Doesn't appear in lower resolutions*/}
            {screenMode <= 2 ? (
                <nav id="navbar" className={`${screenMode >= 1 ? "text-x1 gap-[50px]" : "gap-[60px]"} flex flex-wrap justify-center items-center w-full font-extralight m-auto text-gray-400`}>
                    <a href="#about" className="shadow(2px_2px_4px_#000000) hover:text-white hover:scale-130 transform transition-all duration-300">About</a>
                    <a href="#tools" className="hover:text-white hover:scale-130 transform transition-all duration-300">Tools</a>
                    <a href="#projects" className="hover:text-white hover:scale-130 transform transition-all duration-300">Projects</a>
                    <a href="#contact" className="hover:text-white hover:scale-130 transform transition-all duration-300">Contact</a>
                </nav>
                ) : null
            }

            {screenMode < 1 ? (
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
                ) : (
                (screenMode < 3) ? (
                        <button className="w-[100px] m-auto relative overflow-hidden transform transition-transform duration-300 group btn-primary font-bold rounded-[30px] py-2 px-4 text-gray-300 border border-transparent hover:border-gray-300 hover:scale-115"
                        onClick={() => window.open(resume, "_blank")}
                        >
                            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                            <span className="relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                                Resume
                            </span>
                        </button>
                    ) : (
                        <button className="px-3 flex justify-end w-[100%] h-[30px]"
                                onClick={toggleMenu}
                        >
                            <div className="material-symbols-outlined hover:scale-150 scale-140 cursor-pointer my-auto">
                                menu
                            </div>
                        </button>
                    )
                )
            }

            {menuVisible === true ? (
                <div className="fixed flex flex-col justify-between gap-[0px] top-[15vh] w-full h-[78vh] bg-black/70 backdrop-blur-[5px] p-12">
                    <div></div>
                    
                    <nav id="navbar" className={`flex flex-col justify-start gap-[20px] items-center w-full text-[25px] font-bold p-6`}>
                        <a href="#about" onClick={() => toggleMenu()}  className="shadow(2px_2px_4px_#000000) hover:text-white hover:scale-130 transform transition-all duration-300">About</a>
                        <a href="#tools" onClick={() => toggleMenu()} className="hover:text-white hover:scale-130 transform transition-all duration-300">Tools</a>
                        <a href="#projects" onClick={() => toggleMenu()} className="hover:text-white hover:scale-130 transform transition-all duration-300">Projects</a>
                        <a href="#contact" onClick={() => toggleMenu()} className="hover:text-white hover:scale-130 transform transition-all duration-300">Contact</a>
                    </nav>

                    <div id="contacts" className="flex justify-center items-center gap-[50px]">
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
                </div>) : null
            }
        </div>
    )
}