import './ProfileBox.css';
import profilePic from '../assets/DSC_0085111.JPEG';

export default function ProfileBox() {
    return (
        <div className="profile-box">
            <div className="box-inner">
                {/* Front side */}
                <div className="box-front">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    <h2>Tasos Tzaras</h2>
                    <p>
                        Hi! I’m a passionate developer who loves building React apps.
                        I enjoy learning new technologies and creating clean, responsive interfaces.
                    </p>
                    <span className="flip-hint">Turn me over ↻</span> {/* Hint */}
                </div>

                {/* Back side */}
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
