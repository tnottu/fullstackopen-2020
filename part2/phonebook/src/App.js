import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handlenameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons([...persons, {
      name: newName,
      number: newNumber,
    }])
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = nameFilter
    ? persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter { ...{ nameFilter, handlenameFilterChange } } />
      <h2>Add a new</h2>
      <PersonForm {...{ handleSubmit, newName, handleNameChange, newNumber, handleNumberChange } } />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
