import React from 'react'

const Countries = ({ countries, buttonHandler}) => {
		
    const rows = () => countries.map(country =>
        <li key={country.name}>{country.name}<button onClick={buttonHandler}>show</button></li>
//		<Country key={country.alpha3Code} name={country.name} capital={country.capital}/>
	)

	return (
		<ul>
			{rows()}
		</ul>
	)
}

export default Countries