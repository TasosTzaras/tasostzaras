import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CurrencyConverter from './pages/CurrencyConverter'; // new currency converter page
import './App.css';
import WeatherApp from './pages/WeatherApp'; // import the new component
import MoviesDB from './pages/MoviesDB';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import SocialFloat from './components/SocialFloat';
import CursorLight from './components/CursorLight';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="app">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/currency-converter" element={<CurrencyConverter />} />
          <Route path="/projects/weather-app" element={<WeatherApp />} />
          <Route path="/projects/moviesdb" element={<MoviesDB />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <SocialFloat />
        <CursorLight />
      </div>
    </Router>
  );
}

export default App;
