import { PROJECTS } from "./Data";
import Card from "./Card.js"

const Projects = () =>{
    return(
        <div id="project" className="max-w-[1500px] w-[85%] mx-auto lg:pb-32 pb-16 lg:mt-24 mt-12  border-b-[1px] border-b-gray-600 border-opacity-40">
            <div>
                <h1 className="text-3xl font-serif font-bold text-white text-center pb-24">Projects</h1>
            </div>
            <div className="flex lg:flex-row gap-10 flex-wrap w-[100%] justify-evenly lg:items-start items-center">
            {PROJECTS.map((project) => {
              return  <Card project={project}/>;
            })}
            </div>
        </div>
    )
};
export default Projects;