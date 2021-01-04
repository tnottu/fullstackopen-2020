import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'
import CountryList from './components/CountryList'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ countryFilter, setCountryFilter] = useState('')
  const [ selectedCountry, setSelectedCountry] = useState(null)

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
    setSelectedCountry(null)
  }

  const countriesToShow = countryFilter
    ? countries.filter(country => country.name.toLowerCase().includes(countryFilter.toLowerCase()))
    : []

  const currentCountry = selectedCountry || (countriesToShow.length === 1 && countriesToShow[0]);

  return (
    <div>
      <Filter { ...{ countryFilter, handleCountryFilterChange } } />
      {currentCountry
         ? <Country country={currentCountry} />
         : <CountryList countries={countriesToShow} setSelectedCountry={setSelectedCountry} />
      }
    </div>
  )
}

export default App
