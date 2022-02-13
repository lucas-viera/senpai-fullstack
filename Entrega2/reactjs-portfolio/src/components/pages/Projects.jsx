import {ProjectItem} from "../common/ProjectItem.jsx";
import axios from 'axios';
import { useEffect, useState } from "react";

export function Projects() {
    //JSON Server usage
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/projects').then((response) => {
            const projectsArray = response.data;    //Data from JSON Server
            setProjects(projectsArray);
        });
    },[]);

    const projectList = projects.map(function (project) {
        return (
            <div className="project-container project-card" key={project.id}>    
                <ProjectItem title={project.title} description={project.description} url={project.url} image={project.image} />
            </div>
        );
    });

    return (
        <>
            <section className="projects" id="projects">
                <h2 className="projects-header">My Projects</h2>
                <div className="projects-container">
                    <div> {projectList}</div>
                </div>
            </section>
        </>
    );
}