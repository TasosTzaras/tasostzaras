import React from 'react';
import './Contact.css';

export default function Contact() {
    // Replace these with your actual contact details
    const emailAddress = "your.email@example.com";
    const githubLink = "https://github.com/TasosTzaras";
    const linkedinLink = "https://www.linkedin.com/in/tasos-tzaras-04910b213/";

    // Helper function to handle email clicks
    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <div className="contact-container">
            <div className="contact-box">
                <h1 className="contact-header">
                    Oh, so you want to contact me? 📬
                </h1>

                <p className="contact-intro">
                    Excellent choice! You have three super-fast ways to reach out. Pick your favorite adventure:
                </p>

                <div className="contact-methods">
                    {/* Method 1: LinkedIn */}
                    <a
                        href={linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card linkedin"
                    >
                        <h3>1. The Professional Chat 💼</h3>
                        <p>For serious business, collaborations, or a virtual coffee. Let's connect!</p>
                        <span className="contact-btn">LinkedIn</span>
                    </a>

                    {/* Method 2: Email */}
                    <div
                        onClick={handleEmailClick}
                        className="contact-card email-me"
                        role="button"
                        tabIndex="0"
                        onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleEmailClick(); }}
                    >
                        <h3>2. The Classic Message 📧</h3>
                        <p>Got a detailed question or a project pitch? Send a good old-fashioned email.</p>
                        <span className="contact-btn">{emailAddress}</span>
                    </div>

                    {/* Method 3: GitHub */}
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card github"
                    >
                        <h3>3. The Code Whisperer 🤖</h3>
                        <p>Want to check out my latest repos or report a bug? Meet me on GitHub.</p>
                        <span className="contact-btn">GitHub Profile</span>
                    </a>
                </div>
            </div>
        </div>
    );
}