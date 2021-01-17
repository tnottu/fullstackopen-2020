import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState(null)

  const hook = () => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }

  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const handleRemove = (person) => {
    if (!window.confirm(`Delete ${person.name} ?`)) {
      return;
    }

    personService
      .remove(person.id)
      .then(id => {
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  const handleUpdate = (person, number) => {
    personService
      .update({ ...person, number })
      .then(updatedPerson => {
        setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
        setNewName('')
        setNewNumber('')
        setNotificationMessage(`Updated ${person.name}`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson) {
      if (window.confirm(`${existingPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
        handleUpdate(existingPerson, newNumber)
      }
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    personService
      .create(newPerson)
      .then(person => {
        setPersons([...persons, person])
        setNewName('')
        setNewNumber('')
        setNotificationMessage(`Created ${person.name}`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })

  }

  const personsToShow = nameFilter
    ? persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter { ...{ nameFilter, handleNameFilterChange } } />
      <h2>Add a new</h2>
      <PersonForm {...{ handleSubmit, newName, handleNameChange, newNumber, handleNumberChange } } />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleRemove={handleRemove} />
    </div>
  )
}

export default App
