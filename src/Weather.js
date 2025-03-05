import React from "react";

export default function Weather() {
  return (
  <div className="weatherApp">
 
    <div className="header">
      <form className="search-form" >
        <input
          type="search"
          placeholder="Enter a city.."
          required          
          className="search-form-input"
          />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
    </div>
    
    <div className="weather-app-data">
      
      <h1 className="weather-app-city">XXX</h1>
        <p className="weather-app-details">
            <span className="time">15:20</span>,
            <span className="description"></span>
              <br />
            Humidity: 50%, Wind: 5 km/h
        </p>
        
        <div className="weather-app-temperature-container">
          <div ></div>
          <div className="weather-app-temperature"></div>
          <div className="weatehr-app-unit">°C</div>
        </div>
              
    </div>

  </div> 
  
  );
}

