import { education } from "./Data";
const Education = () =>{
    return(
        <div className="max-w-[1500px] w-[85%] flex flex-col mx-auto lg:mt-20 mt-10 gap-5 border-b-[1px] border-b-gray-600 border-opacity-60 pb-16">
            <div className="text-3xl font-mono text-white text-center mt-7 mb-14 ">
                Education
            </div>
            {
                education.map((edu) =>{
                    return (
                        <div className="flex lg:flex-row flex-col justify-evenly  mb-5">
                            <p className="text-lg text-white lg:w-[20%] w-full">{edu.year}</p>
                            <div className="lg:w-[45%] w-full gap-3 flex flex-col"> 
                                <h1 className="text-lg text-white">
                                    {edu.title}
                                </h1>
                                <p className="text-sm text-slate-500">
                                    {edu.description}
                                </p>
                                <p className="text-[17px] text-sky-400">{edu.extra}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default Education;