import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Mouse from "../components/Mouse"

const Projet1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project"> 
                <Navigation />
                <Logo />

                <button left={"/"} right={"projet-2"} />
            </div>
        </main>
    );
};

export default Projet1;