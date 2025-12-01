import React from 'react';
import './SocialFloat.css';
// Note: Assuming Bootstrap Icons CSS is linked globally

export default function SocialFloat() {
    const githubLink = "https://github.com/TasosTzaras";
    const linkedinLink = "https://www.linkedin.com/in/tasos-tzaras-04910b213/";

    return (
        <div className="social-float-container">
            {/* LinkedIn Button */}
            <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-float-btn linkedin-float"
                aria-label="LinkedIn Profile"
            >
                <i className="bi bi-linkedin"></i>
            </a>

            {/* GitHub Button */}
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-float-btn github-float"
                aria-label="GitHub Profile"
            >
                <i className="bi bi-github"></i>
            </a>
        </div>
    );
}