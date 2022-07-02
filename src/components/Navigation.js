import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ()=> {
    return (
        <div className="navigation">
            <ul>
                <NavLink to={"/"} className={(nav) =>(nav.isActiv ? "nav-active-hover" : "hover")}>
                    <li>accueil</li>
                </NavLink>
                <div className="nav-portfolio">
                Portfolio
                    <div className="nav-projects">
                    <NavLink to={"/projet-1"} className={(nav) =>(nav.isActiv ? "nav-active hover" : "hover")}>
                    <li>Projet 1</li>
                </NavLink>
                <NavLink to={"/projet-2"} className={(nav) =>(nav.isActiv ? "nav-active hover" : "hover")}>
                    <li>Projet 2</li>
                </NavLink>
                <NavLink to={"/projet-3"} className={(nav) =>(nav.isActiv ? "nav-active hover" : "hover")}>
                    <li>Projet 3</li>
                </NavLink>
                <NavLink to={"/projet-4"} className={(nav) =>(nav.isActiv ? "nav-active hover" : "hover")}>
                    <li>Projet 4</li>
                </NavLink>

                    </div>
                </div>
                <NavLink to={"/contact"} className={(nav) =>(nav.isActiv ? "nav-active hover" : "hover")}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Navigation;