import React from 'react'
import ListCountries from './ListCountries'
import Country from './Country'

const DisplayCountries = ({ countries, filter, buttonHandler }) => {
	let countriesToDisplay = countries
	if ( filter ) {
		countriesToDisplay = countries.filter( country => country.name.toLowerCase().includes(filter.toLowerCase()) )
	}

	// 1 country found.
	if ( countriesToDisplay.length === 1 ) {
		return ( <Country country={countriesToDisplay[0]} />)
	}

	// Nothing found, or no filter.
	if ( countriesToDisplay.length < 1 || ! filter ) {
		return ( <div></div> )
	}

	// More than 10 countries found.
	if ( countriesToDisplay.length > 10 ) {
		return ( <div>Too many options!</div>)
	}

	// 2-10 countries found.
	return (
		<>
			<ListCountries countries={countriesToDisplay} buttonHandler={buttonHandler} />
		</>
	)
}

export default DisplayCountries