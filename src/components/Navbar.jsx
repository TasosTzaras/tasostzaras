import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ darkMode, setDarkMode }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Home button logo */}
            <Link to="/" className="nav-logo">
                {"{Hello Friend}."}
            </Link>

            <div className="nav-links">
                {/* Projects dropdown */}
                <div
                    className="nav-dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <button
                        className="nav-btn"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        Projects
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            {/* Currency Converter as first item */}
                            <Link to="/projects/currency-converter" className="dropdown-item">
                                Currency Converter
                            </Link>
                            <Link to="/projects/weather-app" className="dropdown-item">
                                Weather App
                            </Link>
                            <Link to="/projects/moviesdb" className="dropdown-item">
                                Movies' Data Extraction
                            </Link>
                            {/* <Link to="/projects/project4" className="dropdown-item">
                                Project 4
                            </Link> */}
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
