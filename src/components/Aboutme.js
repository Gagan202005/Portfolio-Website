import React from "react";
import Gagan from "../images/gagan.jpeg"
import { aboutme } from "./Data";
const Aboutme = () =>{
    return (
        <>
    <div id="about" className="max-w-[1500px] lg:w-[85%] w-full mx-auto text-white lg:pt-24 pt-12 lg:pb-24 pb-12">
        <h1 className="text-3xl font-semibold mx-auto text-center text-white lg:mb-24 mb-12">
            About Me
        </h1>
        <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center lg:gap-20 gap-6">
            <div className="lg:w-[50%] w-full justify-center">
            <img src={Gagan} className="w-[70%] max-w-[400px] rounded-md mx-auto">
            </img>
            </div>
            <p className="lg:w-[50%] w-[80%] text-justify text-[15px] text-slate-300 ">
                {aboutme}
            </p>
        </div>
    </div>
    <div className="w-[85%] mx-auto border-b-[0.5px] border-b-gray-600 border-opacity-60"></div>
    </>
    )
};
export default Aboutme;