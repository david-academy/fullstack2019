import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'

const App= ()=> {
  const [countries, setCountries]= useState([])
  const [newFilter, setNewFilter]= useState('')

 

  const hook = ()=>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response=> {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

 const handleFilterChange = (event)=>{
    setNewFilter(event.target.value)
  }
  const showCountryButton=(event)=>{
    console.log(event)
    setNewFilter(event.target.value)
    console.log(event.target.value)
  }
  return (
  <div>
    find countries
      <input onChange={handleFilterChange}/>
      <DisplayCountries 
            countries={countries} 
            filter={newFilter}
            buttonHandler={showCountryButton}
            />
  </div>
  )
}

export default App;

//https://restcountries.eu/rest/v2/name/{name}
