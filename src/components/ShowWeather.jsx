import React, { useEffect } from "react";
import { useState } from "react";
import { useFetchWeather } from "./useFetchWeather";
import "./styles.css";

export const ShowWeather = ({ form }) => {
  const { data, weatherImage } = useFetchWeather(form);
  const [img, setimg] = useState("");

  const getWeatherImage = (weatherImage) => {
    if (weatherImage === "Clouds") {
      setimg(`clouds.png`);
    } else if (weatherImage === "Clear") {
      setimg(`clear.png`);
    } else if (weatherImage === "Rain") {
      setimg(`rain.png`);
    } else if (weatherImage === "Drizzle") {
      setimg(`drizzle.png`);
    } else if (weatherImage === "Mist") {
      setimg(`mist.png`);
    } else if (weatherImage === "Snow") {
      setimg(`snow.png`);
    }
  };

  useEffect(() => {
    if (weatherImage) {
      getWeatherImage(weatherImage);
    }
  }, [weatherImage]);

  // Verifica si `data` está cargado antes de renderizar
  if (!data.main) {
    return <p className="text-center mt-2">Cargando...</p>;
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="box-border flex flex-col   mt-5 w-1/4 bg-gradient-to-r from-[#4da6ff] to-[#188ae0] text-white rounded-3xl p-8 ">
        <img
          src={`images/${img}`}
          alt={weatherImage}
          className="h-44 object-contain"
        />
        <h1 className="m-0 text-5xl text-center">
          {Math.round(data.main.temp)}°C{" "}
        </h1>
        <h2 className="m-0 text-4xl text-center">{data.name}</h2>
        <div className="mt-5 flex justify-between items-center text-xl">
          <div className="flex items-center text-lg gap-2 text-center">
            <img src="images/humidity.png" alt="humidity" className="h-8" />
            <div>
              <p className="m-0 text-xl">{data.main.humidity}%</p>
              <p className="m-0">Humidity</p>
            </div>
          </div>
          <div className="flex items-center text-lg gap-2 text-center">
            <img src="images/wind.png" alt="wind" className="h-8" />
            <div>
              <p className="m-0 text-xl ">{data.wind.speed}Km/h</p>
              <p className="m-0">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
