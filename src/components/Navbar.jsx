import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'; // <-- ADDED useEffect and useRef
import './Navbar.css';

export default function Navbar({ darkMode, setDarkMode }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // ✅ for burger menu

    // Create a reference to the dropdown container
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Effect to handle clicks outside the dropdown menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the dropdown is open AND the click target is NOT inside the dropdown
            if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        // Attach the listener to the document body
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]); // Re-run effect when dropdownOpen state changes


    return (
        <nav className="navbar">
            {/* Home button logo */}
            <Link to="/" className="nav-logo">
                {"{Hello Friend}."}
            </Link>

            {/* Burger icon for mobile */}
            <div
                className={`burger ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Nav links (toggle visibility on mobile) */}
            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                {/* Projects dropdown */}
                <div
                    className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
                    ref={dropdownRef} // <-- ATTACHED REF
                >
                    <button
                        className="nav-btn"
                        onClick={toggleDropdown}
                    >
                        Projects
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <Link to="/projects/currency-converter" className="dropdown-item">
                                💵 Currency Converter
                            </Link>
                            <Link to="/projects/weather-app" className="dropdown-item">
                                ☀️ Weather App
                            </Link>
                            <Link to="/projects/moviesdb" className="dropdown-item">
                                🎬 Movies' Data Extraction
                            </Link>
                        </div>
                    )}
                </div>

                {/* Contact button */}
                <Link to="/contact" className="nav-btn">
                    Contact
                </Link>

                {/* Dark mode toggle */}
                <button
                    className="nav-btn toggle-btn"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
}