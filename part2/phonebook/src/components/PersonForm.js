import React, {useState} from 'react'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons, notify})=> {
const [ newName, setNewName ] = useState('')
const [ newNumber, setNewNumber ] = useState('')

const addName = (event)=>{
    event.preventDefault()
    if(persons.findIndex(person => person.name=== newName)>-1){
      if(window.confirm(`${newName} is aleady added to phonebook, replace the old number with a new one?`)){
          const id = persons.find(p=> p.name === newName).id
          const addPhoneNumber ={
            name: newName,
            number: newNumber,
          }
          personService
            .update(id, addPhoneNumber)
            .then(returnedPerson => {
              const returnedPersons = persons.map(person => person.id !== id? person: returnedPerson)
              setPersons(returnedPersons)
              notify(`${returnedPerson.name}'s number has been updated`)
            })
      }
    }
    else {
    const addPhoneNumber = {
      name: newName,
      number: newNumber,
      
    }
    personService
      .create(addPhoneNumber)
      .then(returnedPerson =>{
    setPersons(persons.concat(addPhoneNumber))
    setNewName('')
    setNewNumber('')
    notify(`Added ${returnedPerson.name}`)
  })
}
}
  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
}


    return(
        <form onSubmit={addName}>
        <div>
          name: 
          <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )

}
export default PersonForm