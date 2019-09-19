import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = (props) => {
  const [ persons, setPersons] = useState([]) 
  const [newFilter, setNewFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState({message:null})

  const handleFilterChange = (event) => {
		setNewFilter(event.target.value)
	}

  const hook= ()=>{
    personService
      .getAll()
      .then(initialPersons=> {
      setPersons(initialPersons)
    })
    }

  useEffect(hook,[])

  const notify = (message, type='success')=>{
    setNotificationMessage({message,type})
    setTimeout(()=> setNotificationMessage({message: null}), 5000)
  }

 const deletePersonHandler = (id) => {
     const person = persons.find(p => p.id === id)
     if ( window.confirm(`Are you sure you want to delete ${person.name}?`)) {
       personService
       .deletePerson(id)
       .then(() => {
         setPersons(persons.filter(p=> p.id !==p.id))
         notify(`${person.name} was removed`) 
        
       })
       .catch(error => {          
         setPersons(persons.filter(p => p.name !== setPersons))
         notify(`${setPersons} was already removed!`)
        
       })
   }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notificationMessage} />
      <Filter
				filter={newFilter}
				changeEvent={handleFilterChange}
			/>
      <h2>add a new</h2>
      <PersonForm
       persons={persons} 
       setPersons={setPersons}
       notify={notify}
      />
     
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter} deletePersonHandler={deletePersonHandler}/>

      
    </div>
  )
}

export default App