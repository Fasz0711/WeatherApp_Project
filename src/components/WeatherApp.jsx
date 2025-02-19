import React, { useState } from "react";
import { InputPlace } from "./InputPlace";
import { ShowWeather } from "./ShowWeather";

export const WeatherApp = () => {
  const [inputWeather, setInputWeather] = useState("");
  const [form, setForm] = useState("");

  const setInput = (e) => {
    setInputWeather(e.target.value);
  };

  const setFormSearch = (e) => {
    e.preventDefault();
    setForm(inputWeather);
  };
  return (
    <div className="bg-cyan-300 w-screen h-screen font-sans   ">
      <>
        <h1 className="text-4xl py-2 text-center  ">
          Dashboard de Clima con API de OpenWeather
        </h1>
        <InputPlace setInput={setInput} setFormSearch={setFormSearch} />
        <ShowWeather form={form} />
      </>
    </div>
  );
};
