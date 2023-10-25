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
    }))
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request to API failed');
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data.percentage);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="selection:bg-sky-500 selection:text-white">
      <div className="min-h-screen bg-sky-100 flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="w-[100%] lg:w-[50%] bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
            <div className="relative h-48 bg-sky-500 rounded-bl-4xl">
              <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
              <h1 className="text-2xl font-semibold text-gray-900">Sistemi Adaptiv</h1>
			  <p className='text-l font-normal text-gray-500'>i Qytetit të Ujit</p>
              <form className="mt-12" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    id="plant-name"
                    name="plant-name"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                    placeholder="Orchidea"
					onChange={handlePlantNameChange}
                  />
                  <label
                    htmlFor="plant-name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Emri i Bimës
                  </label>
                </div>

				<div className="mt-10 relative">
                  <input
                    id="pot-size"
                    name="pot-size"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                    placeholder="Small sized"
					onChange={handlePotSizeChange}
                  />
                  <label
                    htmlFor="pot-size"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Madhësia e Vazos
                  </label>
                </div>

				<div className="mt-10 relative">
                  <input
                    id="sunlight-level"
                    name="sunlight-level"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                    placeholder="A lot"
					onChange={handleSunlightLevelChange}
                  />
                  <label
                    htmlFor="sunlight-level"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Niveli i Ndriçimit
                  </label>
                </div>

                <input
                  type="submit"
                  value="Llogarit"
                  className="mt-20 px-4 py-2 rounded bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>

				{
					responseData ?
					<div className='my-4 py-4 border-t-[1px] border-solid border-gray-400'>
						<h1 className='text-sky-900 font-bold'>Përqindja Optimale: {responseData}</h1>
			  			<div className="mb-5 h-1 my-4 bg-gray-200 transition-all duration-200">
  							<div className="h-1 bg-purple-500" style={{width: responseData}}></div>
						</div>
					</div>
					: null
				}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
