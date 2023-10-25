"use client";

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [responseData, setResponseData] = useState(null);
  const [plantName, setPlantName] = useState("");
  const [potSize, setPotSize] = useState("");
  const [sunlightLevel, setSunlightLevel] = useState("");
  const [airTemperature, setAirTemperature] = useState("");
  const [airMoisture, setAirMoisture] = useState("");

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const fetchData = () => {
    // Define the URL of your Next.js API route
    const apiUrl = 'http://127.0.0.1:5000/chatgpt';

    // Make an HTTP POST request to the API route with the prompt in the request body
    fetch(apiUrl + '?' + new URLSearchParams({
      plantName: plantName,
      potSize: potSize,
      sunlightLevel: sunlightLevel,
      airTemperature: airTemperature,
      airMoisture: airMoisture
    })
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request to API failed');
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePlantNameChange = (event) => {
    setPlantName(event.target.value);
  };

  const handlePotSizeChange = (event) => {
    setPotSize(event.target.value);
  };

  const handleSunlightLevelChange = (event) => {
    setSunlightLevel(event.target.value);
  };

  const handleAirTemperatureChange = (event) => {
    setAirTemperature(event.target.value);
  };

  const handleAirMoistureChange = (event) => {
    setAirMoisture(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };


  return (
    <div className='bg-[#0ED3CF]'>
      <h1>OpenAI API Response:</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center justify-center space-y-6'>
          <input
            placeholder='Emri i Bimes'
            type="text"
            id="plantName"
            value={plantName}
            onChange={handlePlantNameChange}
            className='w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500'
          />
        </div>
        <div>
          <label htmlFor="potSize">Pot Size:</label>
          <input
            type="text"
            id="potSize"
            value={potSize}
            onChange={handlePotSizeChange}
            className='bg-white text-black'
          />
        </div>
        <div>
          <label htmlFor="sunlightLevel">Sunlight Level:</label>
          <input
            type="text"
            id="sunlightLevel"
            value={sunlightLevel}
            onChange={handleSunlightLevelChange}
            className='bg-white text-black'
          />
        </div>
        <div>
          <label htmlFor="airTemperature">Air Temperature (°C):</label>
          <input
            type="text"
            id="airTemperature"
            value={airTemperature}
            onChange={handleAirTemperatureChange}
            className='bg-white text-black'
          />
        </div>
        <div>
          <label htmlFor="airMoisture">Air Moisture (%):</label>
          <input
            type="text"
            id="airMoisture"
            value={airMoisture}
            onChange={handleAirMoistureChange}
            className='bg-white text-black'
          />
        </div>
        <button type="submit">Fetch Data</button>
      </form>
      {responseData ? (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
