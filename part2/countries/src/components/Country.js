import React from 'react'

const Weather = ({ weather }) => {
  if (!(weather && weather.current)) {
    return null;
  }

  return (
    <div>
      <h2>Weather in {weather.location.name}</h2>
      <div><strong>temperature:</strong> {weather.current.temperature} Celsius</div>
      <img src={weather.current.weather_icons[0]} alt="" width="100" />
      <div><strong>wind:</strong> {weather.current.wind_speed} kmh {weather.current.wind_dir}</div>
    </div>
  )
}

const Country = ({ country, weather }) => (
  <div>
    <h1>{country.name}</h1>
    <div>capital {country.capital}</div>
    <div>population {country.population}</div>
    <h2>Languages</h2>
    <ul>
      {country.languages.map(lang => (
        <li key={lang.name}>{lang.name}</li>
      ))}
    </ul>
    <img src={country.flag} alt="" width="150" />
    <Weather weather={weather} />
  </div>
)

export default Country;
