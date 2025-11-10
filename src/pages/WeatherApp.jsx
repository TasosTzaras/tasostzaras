import { useState } from "react";
import './WeatherApp.css'; // We'll style it separately

const API_KEY = '298b597e70725c1bbbb1db8685c84c76';

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getLocalTime = (offset) => {
    let utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    let localTime = new Date(utc + offset * 1000);
    return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const searchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather({
          name: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          time: getLocalTime(data.timezone),
        });
        setError("");
      } else {
        setError("City not found. Please try again.");
        setWeather(null);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong...");
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      searchWeather(city.trim());
    }
  };

  return (
    <div className="weather-app">
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit} className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-results">
          <h3>{weather.name}</h3>
          <p><strong>Time:</strong> {weather.time}</p>
          <img src={weather.icon} alt="Weather Icon" />
          <p><strong>Temperature:</strong> {weather.temp}°C</p>
          <p><strong>Condition:</strong> {weather.description}</p>
          <p><strong>Humidity:</strong> {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
}
