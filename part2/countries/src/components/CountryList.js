import React from 'react'

const CountryList = ({ countries }) => {
  if (!countries.length) {
    return null
  } else if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  return (
    <div>
      {countries.map((country) => {
        return <div key={country.name} country={country}>{country.name}</div>
      })}
    </div>
  )
}

export default CountryList;
