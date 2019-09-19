import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
	console.log(country)
	const languagesSpoken = () => country.languages.map( language =>
		<li key={language.iso639_1}>{language.name}</li>
	)

	return (
		<>
		<h2>{country.name}</h2>
		<p>
			Capital: {country.capital}<br />
			Inhabitants: {country.population}
		</p>
		<h3>Languages</h3>
		<ul>
			{languagesSpoken()}
		</ul>
		<img src={country.flag} alt={country.name} width="200px" />
        <Weather city={country.capital}/>
		</>
	)
}

export default Country