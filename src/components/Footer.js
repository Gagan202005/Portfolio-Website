import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
const Footer = () =>{
    return (
        <div className="max-w-[1500px] bg-slate-900 pt-24 flex flex-row justify-between">
        <p className="lg:text-7xl text-3xl text-opacity-20 font-bold font-serif text-slate-300">GAGAN SINGHAL </p> 
        <div className="flex flex-row gap-3 items-end pr-5 pb-3">
        <a href="https://www.linkedin.com/in/gagan-singhal-b20a95308/"><FaLinkedin size={25} color="#94a3b8" className="hover:scale-110"/></a>
        <a href="https://www.instagram.com/gagansinghal18/"><FaInstagramSquare size={25} color="#94a3b8" className="hover:scale-110"/> </a>
        <a href="https://leetcode.com/u/gagansinghal2005/"><SiLeetcode size={25} color="#94a3b8" className="hover:scale-110"/> </a>
        <a href="https://github.com/Gagan202005"><FaGithub size={25} color="#94a3b8" className="hover:scale-110"/></a>
        </div>
        </div>
    )
};
export default Footer;