import React from 'react';
import './Resume.css';

export default function Resume() {
    // Contact Info (for easy updates)
    const contact = {
        phone: "+30-6942663027",
        email: "anastasiostzaras@gmail.com",
        github: "https://github.com/TasosTzaras",
        location: "Athens, Greece"
    };

    return (
        <div className="resume-page-content">
            {/* Header and Contact Info */}
            <header className="resume-header">
                <h1 className="name-title">ANASTASIOS TZARAS</h1>
                <p className="contact-info">
                    {/* Using Bootstrap Icons classes: bi bi-[icon-name] */}
                    <i className="bi bi-phone"></i> {contact.phone} |
                    <i className="bi bi-envelope"></i> {contact.email} |
                    <i className="bi bi-github"></i> {contact.github} |
                    <i className="bi bi-geo-alt"></i> {contact.location}
                </p>
                <div className="key-competencies">
                    <span className="competency-tag">Adaptable Learner</span>
                    <span className="competency-tag">Technical Expertise</span>
                    <span className="competency-tag">Analytical Skills</span>
                    <span className="competency-tag">Problem-Solving</span>
                    <span className="competency-tag">Attention to Detail</span>
                    <span className="competency-tag">Research-Oriented</span>
                </div>
            </header>
            <hr />

            {/* EXPERIENCE */}
            <section className="resume-section">
                <h2>EXPERIENCE</h2>

                {/* Diploma Thesis */}
                <div className="experience-item">
                    <h3 className="job-title">Diploma Thesis: Machine Learning in Drug Discovery</h3>
                    <p className="job-details">Target Identification for COX-1 vs COX-2 Inhibitors</p>
                    <ul className="resume-bullets">
                        <li>Conducted research on machine learning applications for drug target prediction, optimizing over 10 predictive models using <strong>Python</strong>.</li>
                        <li>Applied libraries like <strong>NumPy, Pandas, and Scikit-learn</strong>, leveraging Grid Search CV for hyperparameter tuning and feature selection.</li>
                        <li>Analyzed biological datasets, identifying patterns among molecular descriptors, and visualized insights with <strong>Matplotlib</strong> and <strong>Seaborn</strong>.</li>
                        <li>Documented work in Jupyter Notebook, showcasing strong problem-solving and technical communication.</li>
                    </ul>
                </div>

                {/* Internship */}
                <div className="experience-item">
                    <h3 className="job-title">Internship, Eden Library</h3>
                    <p className="job-details">Machine Learning Engineer | July 2024 - August 2024</p>
                    <p className="job-description">
                        Conducted extensive experiments by training and fine-tuning multiple models using <strong>YOLOv5</strong>, as well as other state-of-the-art computer vision tools, to enhance the accuracy and adaptability of the company's machine learning models across various challenging scenarios.
                    </p>
                </div>
            </section>
            <hr />

            {/* PROJECTS */}
            <section className="resume-section">
                <h2>PROJECTS</h2>

                {/* Text To Speech */}
                <div className="experience-item">
                    <h3 className="project-title">Text To Speech</h3>
                    <ul className="resume-bullets">
                        <li>Developed a <strong>Java-based</strong> application that converts user-provided text into speech using the FreeTTS library.</li>
                        <li>Designed a modular architecture, enabling easy integration of additional text-to-speech engines.</li>
                        <li>Developed a graphical user interface (GUI) with <strong>JavaFX</strong> for enhanced usability.</li>
                        <li>Implemented file encoding capabilities, allowing users to open, edit, and encode text files.</li>
                    </ul>
                </div>

                {/* NBA Stats */}
                <div className="experience-item">
                    <h3 className="project-title">NBA Stats</h3>
                    <ul className="resume-bullets">
                        <li>Built a <strong>Java</strong> desktop application for retrieving and analyzing NBA statistics, player performance, and game results.</li>
                        <li>Designed an interactive <strong>JavaFX</strong> interface for users to view team comparisons, player stats, and three-point metrics.</li>
                        <li>Implemented data visualization using <strong>JavaFX charts</strong>, including scatter plots and line charts for deeper statistical insights.</li>
                        <li>Developed a file management system, allowing users to load, save, and filter CSV datasets based on logical conditions.</li>
                    </ul>
                </div>
            </section>
            <hr />

            {/* EDUCATION, CERTIFICATIONS, SKILLS */}
            <section className="resume-section section-grid">
                <div>
                    <h2>EDUCATION</h2>
                    <p className="edu-item">
                        <strong>Computer Science and Engineering</strong><br />
                        University of Ioannina, Greece
                    </p>
                </div>

                <div>
                    <h2>SKILLS</h2>
                    <ul className="skill-list">
                        <li><strong>Languages:</strong> Java, Python, C/C++/C#, SQL (MySQL)</li>
                        <li><strong>Web/Frameworks:</strong> JavaScript (React, Node.js), HTML, CSS</li>
                        <li><strong>Libraries:</strong> NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch</li>
                    </ul>
                </div>

                <div>
                    <h2>CERTIFICATIONS</h2>
                    <ul className="cert-list">
                        <li>Scientific Computing with Python, FreeCodeCamp</li>
                        <li>Data Analysis with Python, FreeCodeCamp</li>
                        <li>Machine Learning with Python, FreeCodeCamp</li>
                        <li>JavaScript Algorithms and Data Structures, FreeCodeCamp</li>
                    </ul>
                </div>
            </section>
            <hr />

            {/* REFERENCE */}
            <section className="resume-section">
                <h2>REFERENCE</h2>
                <p>
                    <strong>Paris Amerikanos</strong>, Machine Learning Engineer - AI Lead, Eden Library.<br />
                    "I had the pleasure of mentoring Tasos during his 2-month internship at Eden Library, where he worked as a Machine Learning Engineer.
                    He quickly adapted to our projects and exceeded our expectations within the first week. Tasos successfully ran and completed three computer vision experiments, showing strong technical skills and great attention to detail. He’s easy to work with, communicates well, and was always eager to learn. His potential in ML & R&D, is clear, and I’m confident he’ll excel in future roles. I highly recommend him for any opportunity in the field!"<br />
                    Email: pamerikanos@outlook.com
                </p>
            </section>
        </div>
    );
}