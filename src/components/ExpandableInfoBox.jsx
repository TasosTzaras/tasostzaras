// File: ./components/ExpandableInfoBox.jsx
import React, { useState } from 'react';
import './Home.css'; // Use the existing Home.css for styling

const ExpandableInfoBox = ({ title, highlights, detailContent }) => {
    // State to track whether the detailed content is visible
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="full-width-box info-box">
            <h3>{title}</h3>

            {/* Highlights (Always visible) */}
            <ul className="highlights-list">
                {highlights.map((item, index) => (
                    // Rendering highlights with strong tags for keywords
                    <li key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                ))}
            </ul>
            <hr />

            {/* Detailed Content (Conditionally visible based on state) */}
            {isExpanded && (
                <div className="detail-text">
                    {/* Render the full content JSX */}
                    {detailContent}
                </div>
            )}

            {/* The Expand/Collapse Button */}
            <button
                onClick={toggleExpand}
                className={`expand-btn ${isExpanded ? 'expanded' : ''}`}
            >
                <i className={`bi bi-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                {isExpanded ? ' Show Less Detail' : ' Show More Detail'}
            </button>
        </div>
    );
};

export default ExpandableInfoBox;