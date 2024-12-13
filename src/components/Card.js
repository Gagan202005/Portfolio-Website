
import react from "../images/react.webp"
import redux from "../images/redux.webp"
import tailwind from "../images/tailwind.webp"
import { FaGithub } from "react-icons/fa6";
import {FaEye } from "react-icons/fa";
const Card = ({project}) =>{
    return(
        <div className=" lg:w-[28%] w-[95%] max-w-[350px] text-white border-[1px] border-gray-700 bg-[#0f172b] flex flex-col gap-5 lg:p-4 p-2 rounded-lg hover:scale-110 transition-all z-20">
            <img src={project.image} className="rounded-lg">
            </img>
            <p className="text-lg text-white font-mono">{project.title}</p>
            <p className="text-sm font-serif text-gray-300"> {project.description} </p>
            <div className="flex flex-row gap-2">
            {
                project.technologies.map((tech)=>{
                    console.log(tech);
                   return ( (tech==redux || tech==tailwind || tech==react) ? (<img src={tech} className="w-[8%] animate-bounce rounded-full bg-white state"></img>) : (<img src={tech} className="w-[8%] animate-bounce state"></img>) );
                })
            }
            </div>
            <div className="flex flex-row gap-5 p-2 ">
                <a href={project.livelink} className="text-sm text-semibold border-[1px]  bg-sky-600 rounded-md border-slate-700 min-w-[45%] flex flex-row gap-2 items-center justify-evenly p-2 hover:scale-110 transition-all hover:bg-sky-700"> <FaEye size={20} /> Check Live</a>
                <a href={project.codelink} className="text-sm text-semibold border-[1px] p-2 bg-sky-600 rounded-md  border-slate-700 flex flex-row gap-2 justify-between items-center hover:scale-110 transition-all hover:bg-sky-700">
                    <FaGithub size={20} color="#e2e8f0"/>
                    Get Code </a>
            </div>
            </div>
    )     
};
export default Card;