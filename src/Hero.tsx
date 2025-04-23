type TypeScreenMode = { screenMode: number; }

export default function Hero({ screenMode }: TypeScreenMode) {
    return (
        <div id="home" className={`${screenMode > 1 ? "px-6 h-[100%]" : (screenMode > 0 ? "px-8 h-[80%]" : "h-[80%] px-[150px]")} flex flex-col justify-center items-center w-full mt-[8%] z-20`}>
            <div className={`text-[11vw] w-full flex flex-col gap-[0px] leading-[1.15em] font-[200] my-auto`}>
                <p className="font-left text-transparent bg-clip-text bg-gradient-to-r from-bluegradient-500 to-purplegradient-500">
                    Hi I'm Iruwin Jay
                </p>
                <p  className="text-right text-transparent bg-clip-text bg-gradient-to-r from-bluegradient-500 to-purplegradient-500">
                    Web Developer
                </p>
            </div>
        </div>
    )
}