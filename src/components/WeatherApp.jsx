import React, { useEffect, useState } from "react";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});
  const API_key = process.env.API_Key;
console.log(API_key)
  const lat = 34;
  const lon = -74;
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`
        );
        const data = await res.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  if (!weatherData.list) return <p>loading</p>
  return <p>{weatherData.list[0].main.temp}</p>;
}
