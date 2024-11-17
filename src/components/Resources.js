import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Resources() {
  return (
    <div className="container">
      <h2>Resources</h2>
      <p>Check out my GitHub for more resources and projects.</p>
      <a href="https://github.com/shah-ibrag" className="resource-link">
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
      <p>Connect with me on LinkedIn to expand your professional network and stay updated with my latest activities.</p>
      <a href="https://www.linkedin.com/in/shawn-ibragimov-4b689b22a/" className="resource-link">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
    </div>
  );
}

export default Resources;