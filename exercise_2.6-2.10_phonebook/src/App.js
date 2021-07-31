import React, { useState } from 'react'
import Filter from './components/AddPerson'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons' 

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ search, setSearch ] = useState('')

  const handleNameAddition = (event) => { //This ensures that, the input field will get updated
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberAddition = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  // const personsToShow = 

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName,
      id : persons.length +1,
      number : newNumber
    }

    if(persons.filter(person => person.name === newName).length) {
      alert(`${newName} is already added to the phonebook`)
    }

    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch}/>
      <h1>Add a new</h1>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameAddition={handleNameAddition}
        newNumber={newNumber}
        handleNumberAddition={handleNumberAddition}
        />

      <h2>Numbers</h2>
      <Persons persons={persons} search={search}/>
    </div>
  )
}

export default App