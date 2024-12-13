import React from "react";
import { name } from "./Data";
const Navbar =() =>{
    return (
        <div className="max-w-[1500px] w-[100%] bg-[#000319]  z-30">
            <div className=" w-[85%] sm:py-4 py-1   mx-auto flex flex-row lg:justify-between items-center" >
            <div className=" w-fit text-3xl text-slate-200 flex flex-row">
            <p className="text-4xl font-serif border-b-[3px] border-b-sky-600">{name}</p>
            </div>
            <div className="flex flex-row gap-16">
            <div className="text-white text-xl hidden lg:block border-b-[3px] border-b-sky-600 hover:text-sky-300">
                <a href="#project">
                Projects
                </a>
            </div>
            <div className="text-white text-xl hidden lg:block border-b-[3px] border-b-sky-600 hover:text-sky-300">
                <a href="#skills">
                Skills
                </a>
            </div>
            <div className="text-white text-xl hidden lg:block border-b-[3px] border-b-sky-600 hover:text-sky-300">
            <a href="#contact">
                Contact
                </a>
            </div>
            </div>
            </div>
        </div>
        )
};

export default Navbar
