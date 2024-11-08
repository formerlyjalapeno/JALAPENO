import { useState } from "react";
import Project from "./Project";
import data from './data';

const ProjectList = () => {
    const [project, setProjects] = useState(data);
    return (
        <>
            {
                project.map((project) => (
                    <Project title={project.title} date={project.date} description={project.description} image={project.image} />
                ))

            }

        </>
    );
};

export default ProjectList;
