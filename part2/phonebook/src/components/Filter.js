import React from 'react'

const Filter = ({ nameFilter, handlenameFilterChange }) => (
  <div>
    filter shown with: <input value={nameFilter} onChange={handlenameFilterChange} />
  </div>
)

export default Filter
