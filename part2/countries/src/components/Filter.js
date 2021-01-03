import React from 'react'

const Filter = ({ countryFilter, handleCountryFilterChange }) => (
  <div>
    find countries: <input value={countryFilter} onChange={handleCountryFilterChange} />
  </div>
)

export default Filter
