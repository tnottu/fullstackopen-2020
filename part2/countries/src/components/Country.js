import React from 'react'

const Country = ({ country }) => (
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
  </div>
)

export default Country;
