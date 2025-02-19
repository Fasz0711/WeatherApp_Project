import { useEffect, useState } from "react";

export const useFetchWeather = (city) => {
  const [data, setData] = useState([]);
  const [weatherImage, setWeatherImage] = useState("");
  const apiKey = "cec0491d4ad353c057fe29950098e02b";
  const endpoint1 = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}&units=metric`;

  const fetchWeather = async () => {
    //GET LAT AND LON
    const response = await fetch(endpoint1);
    const data1 = await response.json();
    const latitud = data1[0].lat;
    const longitud = data1[0].lon;

    //GET WEATHER
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric&lang=sp`
    );
    const data2 = await weatherResponse.json();
    setData(data2);
    setWeatherImage(data2.weather[0].main);
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return {
    data,
    weatherImage,
  };
};
