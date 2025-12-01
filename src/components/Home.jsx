import ProfileBox from './ProfileBox';
import ExpandableInfoBox from './ExpandableInfoBox'; // <-- NEW IMPORT
import './Home.css';

// SkillsSection component with Bootstrap Icons (This remains the same)
const SkillsSection = () => (
    <div className="skills-container">
        <h3 className="skills-header">Core Skills & Expertise</h3>
        <div className="skills-grid">
            <span className="skill-item python"><i className="bi bi-filetype-py"></i> Python</span>
            <span className="skill-item react"><i className="bi bi-javascript"></i> React & JavaScript</span>
            <span className="skill-item ml"><i className="bi bi-cpu"></i> Machine Learning</span>

            {/* --- NEW SKILLS ADDED --- */}
            <span className="skill-item java"><i className="bi bi-filetype-java"></i> Java / JavaFX</span>
            <span className="skill-item numpy-pandas"><i className="bi bi-calculator"></i> NumPy & Pandas</span>
            <span className="skill-item tensorflow"><i className="bi bi-lightbulb"></i> TensorFlow / PyTorch</span>
            <span className="skill-item sql"><i className="bi bi-database"></i> SQL (MySQL)</span>
            <span className="skill-item c-sharp"><i className="bi bi-filetype-cs"></i> C/C++ & C#</span>
            <span className="skill-item testing"><i className="bi bi-bug"></i> Experiment Tracking</span>

            {/* --- Existing Skills --- */}
            <span className="skill-item css"><i className="bi bi-palette"></i> Clean CSS/Responsive Design</span>
            <span className="skill-item vision"><i className="bi bi-camera-video"></i> Computer Vision (YOLO)</span>
            <span className="skill-item data"><i className="bi bi-bar-chart"></i> Data Analysis & EDA</span>
        </div>
    </div>
);


// 1. DEFINE THESIS CONTENT
const thesisHighlights = [
    '<strong>Data Preparation:</strong> Cleaned 11k+ chemical samples, removed invalid entries, filled missing values with column means, and scaled descriptors for stable model training.',
    '<strong>Feature Engineering:</strong> Used 209 molecular descriptors and applied feature-importance analysis to identify which chemical properties influenced classification most.',
    '<strong>Model Development:</strong> Built neural networks (Keras Sequential & MLPClassifier) with ReLU hidden layers, sigmoid output, dropout, and L2 regularization to prevent overfitting.',
    '<strong>Training & Evaluation:</strong> Trained models with balanced classes and evaluated performance using accuracy, loss curves, confusion matrices, and prediction–truth comparisons.',
    '<strong>Interpretability:</strong> Applied permutation feature importance and heatmaps to quantify how much each descriptor contributed to COX-1 vs. COX-2 classification.',
    '<strong>Pharmaceutical Impact:</strong> Demonstrated that optimized machine-learning models can reliably distinguish COX-1 and COX-2 inhibitors, supporting selective drug design and virtual screening.'
];

const thesisDetailContent = (
    <> {/* Use React Fragment to return multiple elements */}
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
    </>
);


// 2. DEFINE INTERNSHIP CONTENT
const internshipHighlights = [
    '<strong>Data Annotation & Curation:</strong> Executed large-scale dataset annotation and curation, ensuring high-quality labels for downstream computer vision tasks.',
    '<strong>Experimental Design:</strong> Designed and conducted controlled ML experiments, including hyperparameter tuning and ablation studies to evaluate model robustness.',
    '<strong>Detection Pipeline Engineering:</strong> Implemented and troubleshot YOLOv5/YOLOv8 detection pipelines, optimizing training workflows and resolving model deployment issues.',
    '<strong>Foundation Model Utilization:</strong> Utilized Segment Anything Model 2 (SAM2) and foundation vision models such as Florence-2 and Kosmos-2 for segmentation, captioning, and multi-modal analysis.',
    '<strong>Domain Adaptation:</strong> Performed domain adaptation and domain generalization experiments to improve cross-distribution performance.',
    '<strong>Style Transfer Research:</strong> Conducted style transfer and identity-preserving image manipulation research using StyleShot, including debugging and fixing a critical issue in the official GitHub implementation.',
    '<strong>Workflow Reproducibility:</strong> Built reproducible ML workflows with systematic logging, experiment tracking, and methodology documentation.',
    '<strong>Model Evaluation:</strong> Developed evaluation pipelines for object detection and segmentation, including metric computation such as mAP, IoU, and per-class performance.',
    '<strong>Cross-Team Collaboration:</strong> Collaborated with ML engineers to diagnose and resolve model failures, contributing to improved internal research tools.'
];

const internshipDetailContent = (
    <>
        <p>
            During my internship, I contributed to the development, debugging, and optimization of advanced computer vision and multimodal machine learning systems. My work spanned the full ML lifecycle, beginning with large-scale dataset construction and progressing through model development, evaluation, and toolchain maintenance.

            I performed extensive dataset annotation, preprocessing, and quality assurance, including class-balancing, outlier detection, data normalization, and generation of synthetic samples for low-frequency classes. I automated several data-handling routines to ensure consistent training-validation splits and reproducible experimental baselines.

            I implemented and optimized YOLOv5 and YOLOv8 training pipelines, addressing issues such as non-converging loss curves, anchor misconfiguration, and unstable gradient dynamics under custom datasets. I performed profiling of training runs, optimized data loaders, and configured mixed-precision training to reduce runtime without degrading accuracy. I also worked on inference-time optimizations including ONNX export, TensorRT compatibility checks, and model-size vs. latency evaluation.

            I experimented with state-of-the-art foundation vision models including SAM2, Florence-2, and Kosmos-2, applying them to segmentation, captioning, visual grounding, and multi-modal reasoning tasks. This involved customizing model prompts, modifying pre- and post-processing layers, and constructing evaluation suites to benchmark their zero-shot and few-shot performance.

            My research also involved domain adaptation, domain generalization, and style-transfer–based distribution alignment, where I evaluated techniques such as feature alignment, style randomization, and augmentation-based robustness improvements. I performed systematic ablation studies to quantify the effect of augmentation strategies, backbone selection, and training regimes on cross-domain performance.

            A significant contribution was my work on the StyleShot identity-preserving image synthesis framework, where I conducted low-level debugging, gradient-flow tracing, and architectural inspection to identify and resolve a critical implementation bug in the official GitHub repository. This fix restored pipeline stability and enabled reliable reproduction of identity-preserving style transfer experiments.

            I built modular evaluation pipelines for object detection and segmentation, automating computation of mAP, IoU, per-class confusion matrices, qualitative failure-case extraction, and statistical reporting for research logs. I also created scripts for visualization of attention maps, segmentation masks, and detection heatmaps to support qualitative model diagnostics.

            Throughout the internship, I maintained rigorous experiment tracking and documentation, used version control best practices, and collaborated with ML engineers to debug model failures, improve code quality, and streamline internal R&D workflows. My contributions strengthened the reproducibility, stability, and analytical depth of the team’s machine learning experiments.<br></br><br></br>
            <p>
                <strong>Paris Amerikanos: AI Lead @ {' '}
                    <a
                        href="https://www.linkedin.com/company/edencore/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fbbf24', fontWeight: 'underline' }}
                    >
                        Eden Library
                    </a>
                </strong>
                <br></br>Paris managed Tasos directly.<br></br>
            </p>
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
    </>
);


export default function Home() {
    return (
        <div className="home-container">

            {/* 🌟 NEW: Wrapper for Horizontal Top Content 🌟 */}
            <div className="top-row-flex">

                {/* 1. Profile Box */}
                <ProfileBox />

                {/* 2. Skills Section */}
                <SkillsSection />

            </div>

            {/* The rest of the content (Thesis/Internship) stacks below normally */}

            <ExpandableInfoBox
                title="Thesis"
                highlights={thesisHighlights}
                detailContent={thesisDetailContent}
            />

            <ExpandableInfoBox
                title="Internship"
                highlights={internshipHighlights}
                detailContent={internshipDetailContent}
            />
        </div>
    );
}