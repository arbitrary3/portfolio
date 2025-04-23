import github from './assets/icons/github-mark-white.png';
import logo from './assets/images/logo.png';
import linkedin from './assets/icons/linkedin.png';

type TypeScreenMode = { screenMode: number; }

export default function Footing({ screenMode }: TypeScreenMode) {

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
        <div className={`${screenMode >= 3 ? "flex flex-col px-3 items-center gap-[100px] py-[160px]" : "grid grid-cols-[80%_20%] px-[180px] py-[50px]"} w-full h-max bg-black text-gray-400 text-[18px] z-20 font-[300]`}>
            <div className={`${screenMode >= 3 ? "mx-auto" : ""} flex flex-col justify-start gap-[15px]`}>
                <img className={`${screenMode >= 3 ? "mx-auto" : ""} w-[80px] invert my-auto`} src={logo} />

                <p className={`${screenMode >= 3 ? "text-center" : ""}`}>Iruwin Jay is a Web Developer and Programmer based from Philippines</p>

                <nav className={`${screenMode >= 3 ? "mx-auto" : ""} flex gap-[15px]`}>
                    <a href="#home" className="hover:text-white">Home</a>
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#tools" className="hover:text-white">Tools</a>
                    <a href="#projects" className="hover:text-white">Projects</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </nav>
            </div>

            <div className="flex flex-col gap-[20px] items-center justify-center p-[30px]">
                <div className="flex gap-[20px]">
                    {generateContactsButtons([
                        [github, "https://github.com/arbitrary3", "GitHub page"],
                        [linkedin, "https://www.linkedin.com/in/iruwin-jay-dadulla-402a90331/", "LinkedIn page"]
                    ])}
                </div>

                <p>dadullairuwin@gmail.com</p>

                <p>+693-21-252-7180</p>
            </div>
        </div>
    )
}