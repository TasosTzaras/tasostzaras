import ProfileBox from './ProfileBox';
import './Home.css';

const SkillsSection = () => (
    <div className="skills-container">
        <h3 className="skills-header">Core Skills & Expertise</h3>
        <div className="skills-grid">
            <span className="skill-item python"><i className="bi bi-filetype-py"></i> Python</span>
            <span className="skill-item react"><i className="bi bi-javascript"></i> React & JavaScript</span>
            <span className="skill-item ml"><i className="bi bi-cpu"></i> Machine Learning</span>
            <span className="skill-item css"><i className="bi bi-palette"></i> Clean CSS/Responsive Design</span>
            <span className="skill-item vision"><i className="bi bi-camera-video"></i> Computer Vision (YOLO)</span>
            <span className="skill-item data"><i className="bi bi-bar-chart"></i> Data Analysis & EDA</span>
        </div>
    </div>
);

export default function Home() {
    return (
        <div className="home-container">
            {/* Centered profile box */}
            <ProfileBox />

            <SkillsSection />

            {/* Full-width info boxes */}
            <div className="full-width-box info-box">
                <h3>Thesis</h3>

                <ul className="highlights-list">
                    <li><strong>Target Identification for COX Enzymes:</strong> Focused on identifying molecular drug targets for COX-1 and COX-2 enzymes using advanced machine learning techniques.</li>
                    <li><strong>Data Curation & Preprocessing:</strong> Curated a comprehensive dataset from ChEMBL and PDB, utilizing features like hydrophobicity and topological surface area.</li>
                    <li><strong>Addressed Class Imbalance:</strong> Employed <strong>SMOTE</strong> (Synthetic Minority Over-sampling Technique) to balance interaction data for robust model training.</li>
                    <li><strong>Interpretability via SHAP:</strong> Used <strong>SHAP</strong> values to ensure model interpretability, validating that influential features (hydrophobicity, polarity) aligned with known biological insights.</li>
                    <li><strong>High Predictive Precision:</strong> Models achieved high precision, demonstrating the potential for machine learning to significantly reduce the need for exhaustive experimental testing.</li>
                </ul>
                <hr />

                <div className="detail-text">
                    <p>
                        In my thesis on target identification in drug discovery using machine learning, I focused on identifying
                        viable
                        molecular targets specifically for COX-1 and COX-2 enzymes. These enzymes are crucial in inflammatory
                        processes, making
                        them primary targets for developing anti-inflammatory drugs. Traditional methods for identifying these
                        targets are
                        costly and time-consuming, so my research aimed to develop a data-driven machine learning approach to
                        streamline this
                        process.<br></br><br></br>
                        <strong>Data Collection and Preparation</strong><br></br>
                        I curated a comprehensive dataset from sources like ChEMBL and the Protein Data Bank (PDB), which
                        included molecular
                        descriptors, structural information, and known interactions between COX enzymes and various compounds.
                        Key features
                        included hydrophobicity, molecular weight, topological polar surface area, and sequence-based
                        descriptors, providing
                        essential data points for predictive modeling.<br></br>
                        To prepare the data for analysis, I addressed class imbalance with SMOTE (Synthetic Minority
                        Over-sampling Technique) to
                        balance interactions versus non-interactions. I also applied standardization and normalization
                        techniques to ensure
                        consistency across the dataset and reduce noise.<br></br>
                        Exploratory Data Analysis (EDA)
                        Through EDA, I explored correlations among descriptors, refining highly correlated features like
                        molecular weight and
                        surface area to avoid redundancy. Visualizing descriptor distributions allowed me to observe trends
                        specific to COX-1
                        and COX-2 interactions, guiding feature selection and engineering to capture biologically relevant
                        patterns.<br></br><br></br>
                        <strong>Model Evaluation</strong><br></br>
                        Model evaluation was conducted using the following metrics:<br></br>
                        Precision
                        Recall
                        F1 Score
                        ROC-AUC
                        Interpretability and Feature Importance
                        To ensure interpretability, I used SHAP (SHapley Additive exPlanations) values, which helped pinpoint
                        the molecular
                        descriptors most influential in identifying COX-1 and COX-2 interactions. Important features like
                        hydrophobicity and
                        polarity consistently aligned with known biological insights into COX binding, supporting the relevance
                        of the model’s
                        predictions.<br></br><br></br>
                        <strong>Results and Conclusions</strong><br></br>
                        After fine-tuning, my models demonstrated high precision in predicting COX-1 and COX-2 targets,
                        significantly reducing
                        the need for exhaustive experimental testing. This work underscored the potential for machine learning
                        to efficiently
                        identify therapeutic targets, advancing drug discovery efforts for COX-specific treatments.
                    </p>
                </div>
            </div>

            <div className="full-width-box info-box">
                <h3>Internship</h3>

                <ul className="highlights-list">
                    <li><strong>Advanced Computer Vision:</strong> Experimented with <strong>YOLOv5</strong> and <strong>YOLOv8</strong> models for vehicle detection under challenging low light and nighttime conditions.</li>
                    <li><strong>Dataset Refinement:</strong> Managed and refined large vehicle datasets using <strong>CVAT</strong> (Computer Vision Annotation Tool) for improved model training.</li>
                    <li><strong>Domain Adaptation & Style Transfer:</strong> Successfully implemented Style Transfer using <strong>StyleShot</strong> to evaluate model robustness across diverse lighting conditions.</li>
                    <li><strong>Physics-Based Image Processing:</strong> Utilized <strong>PhyCV</strong> to enhance image quality by removing excess light and shadows, optimizing inputs for training.</li>
                    <li><strong>VLM Exploration:</strong> Investigated <strong>Visual-Language Models</strong> (VLMs) like Kosmos-2 and Florence-2 and experimented with <strong>SAM2</strong> for accelerated annotation and segmentation capabilities.</li>
                </ul>
                <hr />

                <div className="detail-text">
                    <p>
                        During my internship, I focused on advanced computer vision tasks, honing my skills in both
                        model
                        experimentation and
                        dataset management. I began by working with YOLOv5 and YOLOv8 models, initially testing YOLOv5’s
                        performance on large
                        vehicle datasets under various conditions like low light and nighttime, which helped me identify
                        key
                        model limitations.
                        This led to the use of CVAT for manual annotation and dataset refinement, ensuring better
                        training data
                        for challenging
                        environments. Through detailed experimentation, I compared the performance of different dataset
                        sizes,
                        gaining insights
                        into how image quantity affects model accuracy.<br></br><br></br>
                        To address domain adaptation challenges, I implemented Style Transfer using the StyleShot tool,
                        successfully changing
                        images’ lighting conditions to evaluate model robustness across diverse settings. This
                        adaptation
                        allowed me to train
                        and test models using images taken at different times of the day, with notable results recorded
                        on
                        TensorBoard. I also
                        explored PhyCV for physics-based image processing, which enhanced image quality by removing
                        excess light
                        or shadows,
                        providing cleaner inputs for training.<br></br><br></br>
                        On the research side, I delved into domain generalization, transfer learning, and style transfer
                        techniques, evaluating
                        Visual-Language Models (VLMs) like Kosmos-2 and Florence-2 for potential in accelerating the
                        annotation
                        process. I
                        further experimented with SAM2 on Ultralytics, exploring its segmentation and detection
                        capabilities
                        through bounding
                        box prompts, enhancing the accuracy and speed of object detection.<br></br><br></br>
                        Throughout the internship, I documented each phase and troubleshooting step, and I wrapped up by
                        creating a
                        comprehensive documentation of the entire workflow. This hands-on experience with machine
                        learning tools
                        and model
                        fine-tuning broadened my expertise in deploying and optimizing computer vision systems across
                        complex
                        conditions.<br></br><br></br>
                        <strong>Paris Amerikanos Machine Learning / Data Science / PhysicsMachine Learning / Data Science /
                            Physics</strong><br></br>Paris managed Tasos directly.<br></br>
                        <i><p>"I had the pleasure of mentoring Tasos during his 2-month internship at Eden Library, where he
                            worked as
                            a Machine
                            Learning Engineer.<br></br>
                            He quickly adapted to our projects and exceeded our expectations within the first week. Tasos
                            successfully ran and
                            completed
                            three computer vision experiments, showing strong technical skills and great attention to detail.
                            He’s
                            easy to work
                            with, communicates well, and was always eager to learn. His potential in ML & R&D, is clear, and I’m
                            confident he’ll
                            excel in future roles. I highly recommend him for any opportunity in the field!"</p></i>
                    </p>
                </div>
            </div>
        </div>
    );
}
