import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Mouse from "../components/Mouse"
import Buttons from '../components/Buttons';
import Project from '../components/Project';

const Projet1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project"> 
                <Navigation />
                <Logo />
                <Project projetcNumber={2}/>
                <Buttons left={"/projet-2"} right={"/projet-4"}/>
            </div>
        </main>
    );
};

export default Projet1;