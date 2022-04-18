import React, { useState } from 'react';
import { projectsData } from "../data/projectsData"

const Project = ({ projetcNumber }) => {
    const [currentProjects] = useState(projectsData[projetcNumber]);
    console.log(currentProjects);
    return (
        <div className="div project-main">
            <div className="project-content">
                <h1>{currentProjects.title}</h1>
                <p>{currentProjects.date}</p>
                <ul className="languages">
                    {currentProjects.languages.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;