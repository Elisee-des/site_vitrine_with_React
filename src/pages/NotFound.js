import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-content">
                <h2>ERREUR 404</h2>
                <NavLink to="/">
                    <h3>Retour a la page d'acueil <li className="fas fa-home"></li></h3>
                </NavLink >

            </div>
        </div>
    );
};

export default NotFound;