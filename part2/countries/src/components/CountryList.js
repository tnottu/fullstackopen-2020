import React from 'react'

const CountryList = ({ countries, setSelectedCountry }) => {
  if (!countries.length) {
    return null
  } else if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name} country={country}>
          {country.name}
          <button onClick={() => setSelectedCountry(country)}>show</button>
        </div>
      ))}
    </div>
  )
}

export default CountryList;
