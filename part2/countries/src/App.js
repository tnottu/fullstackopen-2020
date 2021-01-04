import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'
import CountryList from './components/CountryList'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ countryFilter, setCountryFilter] = useState('')
  const [ currentCountry, setCurrentCountry] = useState(null)
  const [ currentWeather, setCurrentWeather] = useState(null)

  const getCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  const getWeather = () => {
    const WEATHERSTACK_API_KEY = process.env.REACT_APP_API_KEY
    if (currentCountry) {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${currentCountry.capital}`)
        .then(response => {
          setCurrentWeather(response.data)
        })
    } else {
      setCurrentWeather(null)
    }
  }

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
    setCurrentWeather(null)
    setCurrentCountry(null)
  }

  useEffect(getCountries, [])
  useEffect(getWeather, [currentCountry, countryFilter])

  const countriesToShow = countries.filter(country => countryFilter && country.name.toLowerCase().includes(countryFilter.toLowerCase()))

  if (countriesToShow.length === 1 && !currentCountry) {
    setCurrentCountry(countriesToShow[0])
  }

  return (
    <div>
      <Filter { ...{ countryFilter, handleCountryFilterChange } } />
      {currentCountry
         ? <Country country={currentCountry} weather={currentWeather} />
         : <CountryList countries={countriesToShow} setCurrentCountry={setCurrentCountry} />
      }
    </div>
  )
}

export default App
