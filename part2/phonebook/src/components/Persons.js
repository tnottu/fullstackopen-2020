import React from 'react'

const Person = ({ person }) => (
  <div key={person.name}>{person.name} {person.number}</div>
)

const Persons = ({ persons }) => (
  <div>
    {persons.map((person) => {
      return <Person key={person.name} person={person} />
    })}
  </div>
)

export default Persons;
