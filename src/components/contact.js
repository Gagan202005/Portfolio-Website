import { contact } from "./Data";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () =>{
    return(
        <div id="contact" className="max-w-[1500px] w-[85%] mx-auto flex flex-col mt-24 text-neutral-300 text-center text-sm mb-16">
            <div className="text-3xl font-bold mb-10">
            Get in Touch
            </div>

            <div className="w-[70%] text-lg text-sky-300 mx-auto mb-3">
                {contact.message}
            </div>
            <div className="my-6 decoration-white underline text-neutral-300">
                {contact.ph}
            </div>
            <div className="underline">
                {contact.gmail}
            </div>
            <div className="my-7 text-lg flex flex-row justify-center mt-1 ">
            <FaLocationDot color="" className="mt-[11px] mr-1 text-red-500" />
               <p className="pt-2"> {contact.address} </p>
            </div>
            <div className="font-bold text-slate-300">
                Designed and Developed by <br/> Gagan Singhal
            </div>
        </div>
    )
};
export default Contact;