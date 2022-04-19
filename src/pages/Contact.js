import React from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";

const Projet1 = () => {
    return (
        <main>
                <Mouse />
            <div className="contact"> 
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>addresse</h4>
                            <p>12 rue Laplace</p>
                            <p>64500 Briazzte</p>
                        </div>
                    </div>
                    <div className="phon">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="22656885237" className='hover'>
                                <p style={{ cursor: "pointer" }} className="clipboard"
                                onClick={()=> alert("Telephone copié")} >56 88 52 37</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projet1;