import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function NotFound(props) {
  return (
    <div className="notFound">
      <div className="notFound-content">
        <h1>Errrer 404</h1>
        <NavLink to={"/"}>
            <h3>Retour à l'accueil <FontAwesomeIcon icon={faHome} /> </h3>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
