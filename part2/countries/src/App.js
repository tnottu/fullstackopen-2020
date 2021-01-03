import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'
import CountryList from './components/CountryList'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ countryFilter, setCountryFilter] = useState('')

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
  }

  const countriesToShow = countryFilter
    ? countries.filter(country => country.name.toLowerCase().includes(countryFilter.toLowerCase()))
    : []

  return (
    <div>
      <Filter { ...{ countryFilter, handleCountryFilterChange } } />
      {countriesToShow.length === 1
         ? <Country country={countriesToShow[0]} />
         : <CountryList countries={countriesToShow} />
      }
    </div>
  )
}

export default App
