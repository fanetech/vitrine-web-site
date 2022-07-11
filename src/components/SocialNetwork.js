import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB } from "@fortawesome/free-solid-svg-icons";

function SocialNetwork(props) {
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <FontAwesomeIcon icon={faB} />
          </li>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <FontAwesomeIcon icon={faB} />
          </li>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <FontAwesomeIcon icon={faB} />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default SocialNetwork;
