import './Projects.css';

export default function Projects() {
    const projects = [
        {
            title: "Spam Classifier",
            description: "A machine learning model that classifies SMS messages as spam or ham.",
            link: "https://github.com/yourusername/spam-classifier"
        },
        {
            title: "Drug Target Prediction",
            description: "Used ML models to identify potential COX-1 and COX-2 drug targets for drug discovery.",
            link: "https://github.com/yourusername/drug-target-prediction"
        },
        {
            title: "Portfolio Website",
            description: "This personal portfolio website built with React and hosted on GitHub Pages.",
            link: "https://yourusername.github.io/myportfolio"
        },
    ];

    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
