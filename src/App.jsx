import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './pages/Projects'; // your existing projects page
import CurrencyConverter from './pages/CurrencyConverter'; // new currency converter page
import './App.css';
import WeatherApp from './pages/WeatherApp'; // import the new component

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/currency-converter" element={<CurrencyConverter />} />
          <Route path="/projects/weather-app" element={<WeatherApp />} /> {/* new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
