import { useState } from "react";
import "./ImageSearchComponent.css";

const nepalCities = [
  "Kathmandu",
  "Pokhara",
  "Biratnagar",
  "Lalitpur",
  "Bharatpur",
  "Birgunj",
  "Dharan",
  "Bhaktapur",
  "Janakpur",
  "Butwal",
];

const ImageSearchComponent = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSearch = () => {
    const apiUrl = `https://example.com/api/search?source=${source}&destination=${destination}&date=${date}`;
    console.log("API Request:", apiUrl);
  };

  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container">
      <div className="image-container">
        <img src="busscene.jpg" alt="Image" />
      </div>
      <div className="search-container">
        <select onChange={handleSourceChange}>
          <option value="">Select source</option>
          {nepalCities.map((city) => (
            <option key={city} value={city} onChange={() => setSource(city)}>
              {city}
            </option>
          ))}
        </select>
        <select onChange={handleDestinationChange}>
          <option value="">Select destination</option>
          {nepalCities.map((city) => (
            <option
              key={city}
              value={city}
              onChange={() => setDestination(city)}
            >
              {city}
            </option>
          ))}
        </select>
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={today}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default ImageSearchComponent;
