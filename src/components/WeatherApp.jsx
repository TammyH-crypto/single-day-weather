import React, { use, useEffect, useState } from "react";

export default function WeatherApp() {
  const [weatherData, setWeather] = useState("");
  const API_key = process.env.Weather_Key;
  const [city, setCity] = useState("Illinois");
  const [lat, setLat] = useState("15");
  const [lon, setLon] = useState("-70");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const res = await fetch(
       `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`
      );
      const data = await res.json();
      setLat(data.lat);
      setLon(data.lon);
    } catch (error) {
      console.log("Failed to locate");
    }
  }

  useEffect(() => {
    async function getWeatherData() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`
        );
        const data = await res.json();
        console.log(data)
        setWeather(data.list[0].main);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
if (lat && lon) {
    getWeatherData(); 
   }
   },

  [lat,lon]
);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(event.target.name.value);
  };
if (loading) {
  return(
    <>
    <p>Loading ...</p>
    </>
  )
}
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {console.log(city)}
          <input type="text" placeholder="Location name" name="name" />
          <button type="submit">Search</button>
        </form>
        <p>
          {weatherData.temp}
        </p>
      </div>
    </>
  );
}
