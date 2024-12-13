import React from "react";
import { TypeAnimation } from "react-type-animation";
import hero4 from "../images/hero4.jpeg"
import { desc } from "./Data";
const Hero = () =>{
    return(
        <>
        <div className="max-w-[1500px] lg:w-[85%] sm:w-[100%] sm:py-28 py-10 mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="lg:w-[50%] w-[90%] px-3 flex flex-col justify-center lg:items-start items-center">
                <h1 className="text-white text-5xl pt-5 ">Hi! Gagan Singhal</h1>
                <div className="text-white mb-5 mt-4 flex flex-row flex-wrap sm:h-[50px] h-[80px]">
                   <span className="min-w-fit pr-2 text-2xl"> I am a </span> 
                   <span className="min-w-fit text-2xl font-mono font-bold text-start text-sky-400">
                    <TypeAnimation
                        sequence={[' Coder',1000, ' Web Developer',1000,' Full Stack Developer',1000,"Backend Developer",1000]}
                        cursor={true}
                        repeat={Infinity}
                        style={{
                        whiteSpace: "pre-line",
                        display: "block",
                        }}
                        omitDeletionAnimation={true}
                    />
                    </span>
                </div>
                <p className="text-slate-300 text-sm sm:text-[15px] text-justify">
                        {desc}
                </p>
                <button className="w-fit text-[18px] my-10 p-3 bg-sky-600 rounded-md  hover:scale-110 transition-all text-white hover:bg-sky-700">
                    <a href="#contact" className="font-sans">
                    HIRE ME!
                    </a>
                </button>
            </div>
            
                <img src={hero4} className="sm:mb-10 mb-5 lg:w-[40%] max-w-[400px] w-[70%] rounded-md"></img>

        </div>
        <div className="w-[85%] mx-auto border-b-[0.5px] border-b-gray-600 border-opacity-60"></div>
        </>
    )
};
export default Hero 