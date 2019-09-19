import React from 'react'

const Person = ({ person, deletePersonHandler}) => {
    const handleDelete = ()=>{deletePersonHandler(person.id)}
    return(
        <li>{person.name}: {person.number} 
<button onClick={handleDelete}>delete</button></li>
)}

export default Person