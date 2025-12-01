import React, { useState, useEffect } from 'react';
import './CursorLight.css';

const CursorLight = () => {
    // State to hold the cursor's coordinates
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        // Function to update position on mouse move
        const updatePosition = (e) => {
            // Update state with mouse X and Y coordinates
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Add the event listener to the window
        window.addEventListener('mousemove', updatePosition);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    // The style is applied inline to ensure the position updates quickly
    return (
        <div
            className="cursor-light"
            style={{
                // CRITICAL FIX: Combine the mouse position (raw pixels) 
                // with the centering offset (-50%, -50%)
                transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
            }}
        />
    );
};

export default CursorLight;