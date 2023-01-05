import React from 'react'

function WeatherBros() {
  return (
    <>
    <div class="weather-Bros">
        <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6">
                <h5 id="weatherBros"class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weather Bros</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Utilizes the Mapbox Geocoding API to enable users to search for addresses and locations using either their name or coordinates.
                </p>
                <div className="flex">
                <a className="mr-[.5rem]"target="_blank" href= "https://weather-bros.web.app/">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16"><path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                </svg>
                </a>
                <a target="_blank" href="https://github.com/nightzillla/Weather-Bros-VSCode">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/></svg>
                </a>
                </div>
            </div>
        </div>
    </div> {/* END OF WEATHER BROS */}
    </>
  )
}

export default WeatherBros