import React from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Projet1 = () => {
    return (
        <main>
            <div className="contact"> 
                <Navigation />
                <Logo />
                <ContactForm />
            </div>
        </main>
    );
};

export default Projet1;