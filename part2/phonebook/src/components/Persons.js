import React from 'react'
import Person from './Person'


const Persons = ({ persons, filter, deletePersonHandler}) => {
	let personsToShow = persons
	if ( filter ) {
		personsToShow = persons.filter( person => person.name.toLowerCase().includes(filter.toLowerCase()) )
	}
	
	
	const rows = () => personsToShow.map(person =>
		<Person 
			key={person.name} 
			person={person} 
			deletePersonHandler={deletePersonHandler}/>
	)

	return (
		<ul>
			{rows()}
		</ul>
	)
}

export default Persons