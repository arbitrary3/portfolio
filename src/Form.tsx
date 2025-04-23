//import { useState } from 'react';
//import ReCAPTCHA from "react-google-recaptcha";

const sitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

type TypeScreenMode = { screenMode: number; }


export default function Form({ screenMode }: TypeScreenMode) {
    //const [captchaToken, setCaptchaToken] = useState(null);

    /*const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!captchaToken) {
            alert("Please complete the reCAPTCHA.");
            return;
        }
        const form = document.getElementById("form") as HTMLFormElement;
        form.submit();
    }*/

    return (
        <div id="contact" className="relative flex flex-col items-center gap-[50px] w-full py-[80px] p-4">
            <div className="flex flex-col items-center">
                <p className="text-[46px] font-[500] tracking-[0.15em] text-center z-20">Contact Me</p>
                <p className="max-w-[500px] text-[18px] text-gray-500 font-[300] tracking-[0.1em] text-center z-20">
                    Want to work with me? Message me and let me know down below.
                </p>
            </div>

            <form id="form" className={`${screenMode >= 3 ? "w-full" : "w-[400px]"} flex flex-col items-center gap-[30px] space-y-4 mx-auto z-20`}
                action="https://formspree.io/f/xovdapba" 
                method="POST"
                //onSubmit={handleSubmit}
            >
                <div className="flex flex-col items-center gap-[20px] w-full">
                    <div className="w-full">
                        <label className="block mb-1 text-[12px] tracking-[0.4em]">NAME</label>
                        <input type="text" name="name" required className="w-full border rounded px-3 py-2 bg-projectbackground border-gray-600" />
                    </div>
                    
                    <div  className="w-full">
                        <label className="block mb-1 text-[12px] tracking-[0.4em]">EMAIL ADDRESS</label>
                        <input type="email" name="email" required className="w-full border rounded px-3 py-2 bg-projectbackground border-gray-600" />
                    </div>

                    <div  className="w-full">
                        <label className="block mb-1 text-[12px] tracking-[0.4em]">MESSAGE</label>
                        <textarea name="message" rows={5} required className="w-full border rounded px-3 py-2 bg-projectbackground border-gray-600"></textarea>
                    </div>
                </div>

                {/*<ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={setCaptchaToken} onExpired={() => setCaptchaToken(null)} />*/}

                <button type="submit" 
                        className="self-start relative w-[40%] text-[18px] overflow-hidden transform transition-transform duration-300 group btn-primary font-bold rounded-[30px] py-3 px-[50px] text-gray-300 border border-transparent hover:border-gray-300 hover:scale-115"
                        data-sitekey={sitekey}
                        data-callback="handleSubmit"
                        data-action="submit"
                >
                    <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                    <span className="relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                        Send
                    </span>
                </button>
            </form>
        </div>
    )
}