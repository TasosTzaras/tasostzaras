import { useState } from 'react'; // <-- ADDED
import './ProfileBox.css';
import profilePic from '../assets/DSC_0085111.JPEG';

export default function ProfileBox() {
    // State to track if the box is flipped
    const [isFlipped, setIsFlipped] = useState(false);

    // Function to toggle the flipped state
    const handleFlip = () => {
        setIsFlipped(prev => !prev);
    };

    return (
        // Added onClick, onKeyPress, tabIndex, and role for click-to-flip and accessibility
        <div
            className="profile-box"
            onClick={handleFlip}
            onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleFlip(); }}
            tabIndex="0"
            role="button"
            aria-label="Flip profile box for more information"
        >
            {/* Conditionally apply the 'flipped' class to trigger the animation */}
            <div className={`box-inner ${isFlipped ? 'flipped' : ''}`}>
                {/* Front side */}
                <div className="box-front">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    <h2>Tasos Tzaras</h2>
                    <p>
                        Hi! I’m a passionate Machine Learning Engineer and Software Developer who loves programming pretty much everything.
                        I enjoy learning new technologies and creating clean, responsive interfaces.
                    </p>
                    {/* Updated hint text based on state */}
                    <span className="flip-hint">{isFlipped ? 'Turn me back ↺' : 'Turn me over ↻'}</span>
                </div>

                {/* Back side (content remains the same) */}
                <div className="box-back">
                    <h3>More About Me</h3>
                    <p>
                        I have experience in Python, React, Machine Learning, and building responsive web apps.
                        I love problem-solving and continuously learning new tools and technologies.
                    </p>
                    <p>
                        <strong>Skills:</strong> Python, React, JavaScript, CSS, Machine Learning
                    </p>

                    <div className="social-buttons">
                        <a
                            href="https://github.com/TasosTzaras"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn github-btn"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tasos-tzaras-04910b213/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn linkedin-btn"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}