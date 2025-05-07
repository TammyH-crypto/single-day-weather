import React, { use, useEffect, useState } from "react";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState([]);
  const API_key = process.env.API_Key;
  const [city, setCity] = useState("Illinois");
  const [lat, setLat] = useState("15");
  const [lon, setLon] = useState("-70");
  

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`
      );
      const data = await res.json();
      setLat(data);
      setLon(data);
      setWeatherData(data.list);
      console.log(data);
    } catch (error) {
      console.log("Failed to locate");
    }
  }

}
  useEffect(() => {
async function getWeatherData() {
    try {
        const res = await fetch(
           `https://api.openweathermap.org/data/2.5/forecast?=${city},${country}&appid=${key}&units-imperial`
        );
        const data = await res.json();

        setWeather(data.list);
        setLoading(false);
    } catch (error) {
        console.log(error);
    }
   
}

const handleSubmit = (event) => {
    event.preventDefault();
    setCity(event.target.name.value);
  };

  return (
    <>
    <div>
     <form onSubmit={handleSubmit}>
      {console.log(city)}
      <input type="text" placeholder="Location name" name="name" />
      <button type="submit">City</button>
      <button type="submit">Temperature</button>
    </form>
  
</div>
    </>
   );
}

  )


