import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { projectsData } from "../data/projectsData";

const Project = ({ projetcNumber }) => {
    const [currentProjects] = useState(projectsData[projetcNumber]);
    const [left, setLeft] = useState();
    const [top, setTop] = useState();
    const [size, setSize] = useState();

    useEffect(() => {
        setLeft(Math.floor(Math.random() * 200 + 700) + "px");
        setTop(Math.floor(Math.random() * 200 + 150) + "px");
        setSize("scale(" + (Math.random() + 0.7) + ")");

    },[]);

    const variants = {
        initial: {
            opacity: 0,
            transition: {duration: 0.5},
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0.4,
            transition: { duration: 0.35 },
            x: -800
        }
    }

    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration:0.6
    }

    return (
        <motion.div className="div project-main" initial="initial" animate="visible"
        exit="exit" transition={transition} variants={variants}>
            <div className="project-content">
                <h1>{currentProjects.title}</h1>
                <p>{currentProjects.date}</p>
                <ul className="languages">
                    {currentProjects.languages.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
                <div className="img-content">
                    <div className="img-container hover">
                        <span>
                            <h3>{currentProjects.title}</h3>
                            <p>{currentProjects.infos}</p>
                        </span>
                        <img 
                            src={currentProjects.img} 
                            alt={currentProjects.title}
                            className="img" />
                    </div>
                    <div className="button-container">
                        <a href={currentProjects.link} rel="noopener noreferrer" className="hover">
                            <span className="button">Voir le site</span>
                        </a>
                    </div>
                </div>
                <span className="random-circle" style={{ left, top, transform: size }}></span>
        </motion.div>
    );
};

export default Project;